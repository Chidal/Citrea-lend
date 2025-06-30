// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

interface ILendingPool {
    function deposit(uint256 amount) external;
    function withdraw(uint256 amount) external;
    function calculateAccruedInterest(address user) external view returns (uint256);
    function updateInterestRate() external;
}