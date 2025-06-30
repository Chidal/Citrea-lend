// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract PriceOracle {
    uint256 public btcPrice = 60000e18; // Mock BTC price: $60,000
    uint256 public usdcPrice = 1e18;    // Mock USDC price: $1

    function getBTCPrice() external view returns (uint256) {
        return btcPrice;
    }

    function getUSDCPrice() external view returns (uint256) {
        return usdcPrice;
    }

    function updateBTCPrice(uint256 _price) external {
        btcPrice = _price;
    }

    function updateUSDCPrice(uint256 _price) external {
        usdcPrice = _price;
    }
}