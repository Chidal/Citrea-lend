import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Dashboard = ({ provider, signer, account }) => {
  const [deposits, setDeposits] = useState("0");
  const [loan, setLoan] = useState({ collateralAmount: "0", borrowedAmount: "0" });
  const lendingPoolAddress = process.env.REACT_APP_LENDING_POOL_ADDRESS;
  const loanManagerAddress = process.env.REACT_APP_LOAN_MANAGER_ADDRESS;

  useEffect(() => {
    const fetchData = async () => {
      const lendingPool = new ethers.Contract(lendingPoolAddress, require("../abis/LendingPool.json"), provider);
      const loanManager = new ethers.Contract(loanManagerAddress, require("../abis/LoanManager.json"), provider);

      const depositBalance = await lendingPool.deposits(account);
      setDeposits(ethers.utils.formatEther(depositBalance));

      const loanData = await loanManager.loans(account);
      setLoan({
        collateralAmount: ethers.utils.formatEther(loanData.collateralAmount),
        borrowedAmount: ethers.utils.formatEther(loanData.borrowedAmount),
      });
    };
    if (account) fetchData();
  }, [account, provider]);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <p className="mb-2">Deposited BTC: {deposits}</p>
      <p className="mb-2">Collateral BTC: {loan.collateralAmount}</p>
      <p>Borrowed USDC: {loan.borrowedAmount}</p>
    </div>
  );
};

export default Dashboard;