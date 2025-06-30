import { useState } from "react";
import { ethers } from "ethers";

const Borrow = ({ provider, signer, account }) => {
  const [collateral, setCollateral] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const loanManagerAddress = process.env.REACT_APP_LOAN_MANAGER_ADDRESS;

  const borrow = async () => {
    const contract = new ethers.Contract(loanManagerAddress, require("../abis/LoanManager.json"), signer);
    const tx = await contract.borrow(
      ethers.utils.parseEther(collateral),
      ethers.utils.parseEther(borrowAmount)
    );
    await tx.wait();
    alert("Borrow successful!");
  };

  const repay = async () => {
    const contract = new ethers.Contract(loanManagerAddress, require("../abis/LoanManager.json"), signer);
    const tx = await contract.repay(ethers.utils.parseEther(borrowAmount));
    await tx.wait();
    alert("Repay successful!");
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Borrow Against BTC</h2>
      <input
        type="text"
        placeholder="Collateral in BTC"
        value={collateral}
        onChange={(e) => setCollateral(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="text"
        placeholder="Borrow Amount in USDC"
        value={borrowAmount}
        onChange={(e) => setBorrowAmount(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={borrow}
        >
          Borrow
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={repay}
        >
          Repay
        </button>
      </div>
    </div>
  );
};

export default Borrow;