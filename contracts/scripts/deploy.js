const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Deploy cBTC
  const CBTC = await hre.ethers.getContractFactory("cBTC");
  const cBTC = await CBTC.deploy();
  await cBTC.deployed();
  console.log("cBTC deployed to:", cBTC.address);

  // Deploy PriceOracle
  const PriceOracle = await hre.ethers.getContractFactory("PriceOracle");
  const priceOracle = await PriceOracle.deploy();
  await priceOracle.deployed();
  console.log("PriceOracle deployed to:", priceOracle.address);

  // Deploy LendingPool
  const LendingPool = await hre.ethers.getContractFactory("LendingPool");
  const lendingPool = await LendingPool.deploy(cBTC.address);
  await lendingPool.deployed();
  console.log("LendingPool deployed to:", lendingPool.address);

  // Deploy LoanManager
  const LoanManager = await hre.ethers.getContractFactory("LoanManager");
  const loanManager = await LoanManager.deploy(
    cBTC.address,
    cBTC.address, // Mock USDC (using cBTC for simplicity)
    lendingPool.address,
    priceOracle.address
  );
  await loanManager.deployed();
  console.log("LoanManager deployed to:", loanManager.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});