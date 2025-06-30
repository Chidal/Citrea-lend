// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract cBTC is ERC20 {
    constructor() ERC20("Citrea Bitcoin", "cBTC") {
        _mint(msg.sender, 1000000e18); // Mint 1M cBTC for testing
    }
}