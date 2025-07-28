const { expect } = require("chai");

describe("LendingPool", function () {
  let cBTC, lendingPool, deployer;

  beforeEach(async function () {
    const CBTC = await ethers.getContractFactory("cBTC");
    cBTC = await CBTC.deploy();
    await cBTC.deployed();

    const LendingPool = await ethers.getContractFactory("LendingPool");
    lendingPool = await LendingPool.deploy(cBTC.address);
    await lendingPool.deployed();

    [deployer] = await ethers.getSigners();
    await cBTC.approve(lendingPool.address, ethers.utils.parseEther("1000"));
  });

  it("should allow deposits and withdrawals", async function () {
    await lendingPool.deposit(ethers.utils.parseEther("100"));
    expect(await lendingPool.deposits(deployer.address)).to.equal(ethers.utils.parseEther("100"));

    await lendingPool.withdraw(ethers.utils.parseEther("50"));
    expect(await lendingPool.deposits(deployer.address)).to.equal(ethers.utils.parseEther("50"));
  });
});