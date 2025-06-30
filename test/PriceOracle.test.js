const { expect } = require("chai");

describe("PriceOracle", function () {
  let priceOracle;

  beforeEach(async function () {
    const PriceOracle = await ethers.getContractFactory("PriceOracle");
    priceOracle = await PriceOracle.deploy();
    await priceOracle.deployed();
  });

  it("should return correct initial prices", async function () {
    expect(await priceOracle.getBTCPrice()).to.equal(60000n * 10n**18n);
    expect(await priceOracle.getUSDCPrice()).to.equal(1n * 10n**18n);
  });

  it("should update prices", async function () {
    await priceOracle.updateBTCPrice(65000n * 10n**18n);
    expect(await priceOracle.getBTCPrice()).to.equal(65000n * 10n**18n);
  });
});