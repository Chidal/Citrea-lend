import { useState } from 'react';
import LendingCard from '../components/LendingCard';
import BorrowingCard from '../components/BorrowingCard';

const Dashboard: React.FC = () => {
  const [userBalance] = useState({
    btc: 0.5,
    lent: 0.2,
    borrowed: 0.1,
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-secondary mb-6">Your Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-secondary">BTC Balance</h3>
          <p className="text-2xl text-accent">{userBalance.btc} BTC</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-secondary">Total Lent</h3>
          <p className="text-2xl text-accent">{userBalance.lent} BTC</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-secondary">Total Borrowed</h3>
          <p className="text-2xl text-accent">{userBalance.borrowed} BTC</p>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-4">Lending Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LendingCard asset="BTC" apy={3.5} totalLent={1000} available={500} />
        <LendingCard asset="cBTC" apy={4.0} totalLent={800} available={300} />
      </div>
      <h3 className="text-2xl font-bold text-secondary mt-8 mb-4">Borrowing Opportunities</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BorrowingCard asset="BTC" interestRate={5.0} maxBorrow={200} collateralRatio={150} />
        <BorrowingCard asset="cBTC" interestRate={5.5} maxBorrow={150} collateralRatio={140} />
      </div>
    </div>
  );
};

export default Dashboard;