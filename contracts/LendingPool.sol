// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LendingPool {
    using SafeMath for uint256;

    IERC20 public cBTC;
    uint256 public totalDeposits;
    uint256 public totalBorrowed;
    uint256 public interestRate; // Annual interest rate in basis points (e.g., 500 = 5%)
    mapping(address => uint256) public deposits;
    mapping(address => uint256) public lastDepositTime;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event InterestRateUpdated(uint256 newRate);

    constructor(address _cBTC) {
        cBTC = IERC20(_cBTC);
        interestRate = 500; // Initial 5% annual interest rate
    }

    function deposit(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        require(cBTC.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        uint256 accruedInterest = calculateAccruedInterest(msg.sender);
        deposits[msg.sender] = deposits[msg.sender].add(amount).add(accruedInterest);
        lastDepositTime[msg.sender] = block.timestamp;
        totalDeposits = totalDeposits.add(amount);

        emit Deposit(msg.sender, amount);
    }

    function withdraw(uint256 amount) external {
        require(amount <= deposits[msg.sender], "Insufficient balance");
        uint256 accruedInterest = calculateAccruedInterest(msg.sender);
        deposits[msg.sender] = deposits[msg.sender].add(accruedInterest).sub(amount);
        lastDepositTime[msg.sender] = block.timestamp;
        totalDeposits = totalDeposits.sub(amount);

        require(cBTC.transfer(msg.sender, amount), "Transfer failed");
        emit Withdraw(msg.sender, amount);
    }

    function calculateAccruedInterest(address user) public view returns (uint256) {
        uint256 timeElapsed = block.timestamp.sub(lastDepositTime[user]);
        uint256 interest = deposits[user].mul(interestRate).mul(timeElapsed).div(365 days).div(10000);
        return interest;
    }

    function updateInterestRate() external {
        uint256 utilization = totalBorrowed.mul(1e18).div(totalDeposits == 0 ? 1 : totalDeposits);
        interestRate = 200 + utilization.mul(10).div(1e18); // 2% base + utilization adjustment
        emit InterestRateUpdated(interestRate);
    }
}