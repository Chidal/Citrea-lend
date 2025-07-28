const { ethers } = require("hardhat");

async function getContract(address, abi) {
  const [signer] = await ethers.getSigners();
  return new ethers.Contract(address, abi, signer);
}

module.exports = { getContract };