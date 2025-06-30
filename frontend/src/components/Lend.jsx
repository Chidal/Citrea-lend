import { useState } from "react";
import { ethers } from "ethers";

const Lend = ({ provider, signer, account }) => {
  const [amount, setAmount] = useState("");
  const lendingPoolAddress = process.env.REACT_APP_LENDING_POOL_ADDRESS;

  const deposit = async () => {
    const contract = new ethers.Contract(lendingPoolAddress, require("../abis/LendingPool.json"), signer);
    const tx = await contract.deposit(ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Deposit successful!");
  };

  const withdraw = async () => {
    const contract = new ethers.Contract(lendingPoolAddress, require("../abis/LendingPool.json"), signer);
    const tx = await contract.withdraw(ethers.utils.parseEther(amount));
    await tx.wait();
    alert("Withdrawal successful!");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Lend BTC</h2>
      <input
        type="text"
        placeholder="Amount in BTC"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex space-x-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={deposit}
        >
          Deposit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={withdraw}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Lend;