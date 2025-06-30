# Citrea-lend: Bitcoin-Powered DeFi Money Market

Welcome to **Citrea-lend**, a cutting-edge decentralized finance (DeFi) money market built on Citrea’s zk-rollup technology. This project unlocks Bitcoin’s potential by allowing users to lend BTC for yield or use it as collateral for loans in other assets, all secured by smart contracts and powered by scalability magic.

Citrea-lend showcases innovative Bitcoin use cases with a sleek React frontend, robust Solidity smart contracts, and seamless integration with Citrea’s Bitcoin Light Client.

- **Website**: [Coming Soon](#)  
- **Testnet**: Citrea Testnet (Chain ID: 5115)  
- **License**: MIT

---

## 🚀 What It Does

Citrea-lend transforms Bitcoin into a dynamic DeFi asset, enabling users to:

- **Lend BTC**: Deposit BTC to earn competitive yields based on market demand.  
- **Borrow Against BTC**: Use BTC as collateral to borrow assets like USDC.  
- **Automated Management**: Smart contracts handle liquidations and adjust interest rates dynamically.  
- **Scalable & Low-Cost**: Citrea’s zk-rollups ensure high throughput and minimal fees.

This non-custodial platform reimagines Bitcoin as the heartbeat of DeFi, blending security, efficiency, and accessibility.

---

## 🧩 The Problem It Solves

Bitcoin, despite being the most valuable crypto asset, lacks native support for smart contracts, making DeFi use cases challenging. Wrapping BTC on other chains adds trust risks and inefficiencies.

**Citrea-lend** bridges this gap using Citrea’s zkEVM technology to enable Bitcoin-native DeFi without wrapping or custodial risks. It tackles scalability, trustlessness, and DeFi utility — all at once.

---

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS  
- **Blockchain**: Citrea zkEVM Testnet (Chain ID: 5115)  
- **Smart Contracts**: Solidity (Hardhat framework)  
- **Wallet Integration**: Ethers.js, MetaMask  
- **BTC Verification**: Citrea Bitcoin Light Client  
- **Testing**: Hardhat, Chai/Mocha

---

## 🏗️ How We Built It

1. **Smart Contract Development**  
   - Created `LendingPool`, `LoanManager`, `cBTC`, and `PriceOracle` contracts.  
   - Deployed to the Citrea Testnet using Hardhat.

2. **Frontend App**  
   - Built with React + Tailwind CSS for modern UI/UX.  
   - Integrated MetaMask and Ethers.js for contract interaction.

3. **Testing & Integration**  
   - Simulated edge cases (like liquidations) using Hardhat tests.  
   - Verified BTC deposits using Citrea’s Bitcoin Light Client.

4. **Launch Timeline**  
   - Project launched: **June 29, 2025 at 04:14 PM WAT**

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v14+)  
- MetaMask Wallet  
- Citrea Testnet (Chain ID: 5115, RPC: `https://rpc.testnet.citrea.xyz`)  
- cBTC from [Citrea Faucet](#)

### Installation

```bash
git clone https://github.com/chidal/citrea-lend.git
cd citrea-lend
npm install
````

### Environment Configuration

Create a `.env` file:

```env
PRIVATE_KEY=your_metamask_private_key
CITREA_RPC_URL=https://rpc.testnet.citrea.xyz
LENDING_POOL_ADDRESS=your_deployed_lending_pool_address
LOAN_MANAGER_ADDRESS=your_deployed_loan_manager_address
```

> ⚠️ **Keep your `.env` file private and never commit it!**

### Running the App

Start the frontend:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000)

### Deploying Contracts

```bash
npx hardhat run --network citrea scripts/deploy.js
```

---

## 🧪 Challenges We Faced

* **zkEVM Quirks**: Adapting to Citrea’s Shanghai-based zkEVM required debugging edge-case opcodes.
* **BTC Verification**: Integrating and syncing the Light Client for onchain BTC validation was non-trivial.
* **Liquidation Edge Cases**: Real-time volatility created unexpected state changes that required fine-tuning.
* **Frontend ↔ Blockchain Sync**: Ensuring UI responsiveness with async blockchain events required custom hooks.

---

## 📚 What We Learned

* **zk-Rollups are Game-Changers** for Bitcoin scalability and smart contract compatibility.
* **Trustlessness is Achievable** using Bitcoin Light Clients instead of wrapped BTC.
* **Frontend Polish Matters** — Tailwind and user-focused UI dramatically improved UX.
* **Testing Is Everything** — Simulating volatile markets built confidence in the system’s resilience.

---

## 🔮 What's Next for Citrea-lend

* ✅ Replace mock `PriceOracle` with **Chainlink price feeds**
* ✅ Add **ETH, USDC, and additional BTC-backed assets**
* 🚀 Integrate **Schnorr signature verification** via Citrea precompile
* 📢 Launch **community governance (DAO)** for parameter control
* 🌉 Build **Citrea-Swap** for atomic BTC swaps (Wave 2)
* 🧑‍🤝‍🧑 Explore **Citrea-Orbit** for BTC-powered social finance (Wave 3)

---


> *Citrea-lend redefines Bitcoin in the DeFi era. Lend securely. Borrow freely. Own your finance.*

```

---

Let me know if you’d like this exported as a downloadable file or auto-filled with real GitHub links and contract addresses.
```
