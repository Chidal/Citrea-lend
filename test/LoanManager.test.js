const { expect } = require("chai");

describe("LoanManager", function () {
  let cBTC, priceOracle, lendingPool, loanManager, deployer;

  beforeEach(async function () {
    const CBTC = await ethers.getContractFactory("cBTC");
    cBTC = await CBTC.deploy();
    await cBTC.deployed();

    const PriceOracle = await ethers.getContractFactory("PriceOracle");
    priceOracle = await PriceOracle.deploy();
    await priceOracle.deployed();

    const LendingPool = await ethers.getContractFactory("LendingPool");
    lendingPool = await LendingPool.deploy(cBTC.address);
    await lendingPool.deployed();

    const LoanManager = await ethers.getContractFactory("LoanManager");
    loanManager = await LoanManager.deploy(cBTC.address, cBTC.address, lendingPool.address, priceOracle.address);
    await loanManager.deployed();

    [deployer] = await ethers.getSigners();
    await cBTC.approve(loanManager.address, ethers.utils.parseEther("1000"));
  });

  it("should allow borrowing and repaying", async function () {
    await loanManager.borrow(ethers.utils.parseEther("10"), ethers.utils.parseEther("5"));
    expect((await loanManager.loans(deployer.address)).borrowedAmount).to.equal(ethers.utils.parseEther("5"));

    await loanManager.repay(ethers.utils.parseEther("5"));
    expect((await loanManager.loans(deployer.address)).borrowedAmount).to.equal(0);
  });
});