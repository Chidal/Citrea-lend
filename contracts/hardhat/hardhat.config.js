require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.25",
  networks: {
    citrea: {
      url: process.env.CITREA_RPC_URL || "https://rpc.testnet.citrea.xyz",
      chainId: 5115,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};