// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./LendingPool.sol";
import "./PriceOracle.sol";

contract LoanManager {
    using SafeMath for uint256;

    IERC20 public cBTC;
    IERC20 public usdc;
    LendingPool public lendingPool;
    PriceOracle public priceOracle;

    struct Loan {
        uint256 collateralAmount;
        uint256 borrowedAmount;
        uint256 borrowTime;
        bool active;
    }

    mapping(address => Loan) public loans;
    uint256 public constant LIQUIDATION_THRESHOLD = 150; // 150% collateralization ratio

    event Borrow(address indexed user, uint256 collateral, uint256 borrowed);
    event Repay(address indexed user, uint256 amount);
    event Liquidate(address indexed user, uint256 collateralLiquidated);

    constructor(address _cBTC, address _usdc, address _lendingPool, address _priceOracle) {
        cBTC = IERC20(_cBTC);
        usdc = IERC20(_usdc);
        lendingPool = LendingPool(_lendingPool);
        priceOracle = PriceOracle(_priceOracle);
    }

    function borrow(uint256 collateralAmount, uint256 borrowAmount) external {
        require(collateralAmount > 0 && borrowAmount > 0, "Invalid amounts");
        require(cBTC.transferFrom(msg.sender, address(this), collateralAmount), "Collateral transfer failed");

        uint256 collateralValue = collateralAmount.mul(priceOracle.getBTCPrice()).div(1e18);
        uint256 borrowValue = borrowAmount.mul(priceOracle.getUSDCPrice()).div(1e18);
        require(collateralValue.mul(100).div(borrowValue) >= LIQUIDATION_THRESHOLD, "Insufficient collateral");

        loans[msg.sender] = Loan(collateralAmount, borrowAmount, block.timestamp, true);
        lendingPool.updateInterestRate();
        require(usdc.transfer(msg.sender, borrowAmount), "Borrow transfer failed");

        emit Borrow(msg.sender, collateralAmount, borrowAmount);
    }

    function repay(uint256 amount) external {
        require(loans[msg.sender].active, "No active loan");
        require(amount <= loans[msg.sender].borrowedAmount, "Excess repayment");
        require(usdc.transferFrom(msg.sender, address(this), amount), "Repayment failed");

        loans[msg.sender].borrowedAmount = loans[msg.sender].borrowedAmount.sub(amount);
        if (loans[msg.sender].borrowedAmount == 0) {
            loans[msg.sender].active = false;
            require(cBTC.transfer(msg.sender, loans[msg.sender].collateralAmount), "Collateral return failed");
        }

        lendingPool.updateInterestRate();
        emit Repay(msg.sender, amount);
    }

    function liquidate(address user) external {
        require(loans[user].active, "No active loan");
        uint256 collateralValue = loans[user].collateralAmount.mul(priceOracle.getBTCPrice()).div(1e18);
        uint256 borrowValue = loans[user].borrowedAmount.mul(priceOracle.getUSDCPrice()).div(1e18);
        require(collateralValue.mul(100).div(borrowValue) < LIQUIDATION_THRESHOLD, "Not undercollateralized");

        uint256 collateralToLiquidate = loans[user].collateralAmount;
        loans[user].active = false;
        require(cBTC.transfer(msg.sender, collateralToLiquidate), "Liquidation transfer failed");

        emit Liquidate(user, collateralToLiquidate);
    }
}