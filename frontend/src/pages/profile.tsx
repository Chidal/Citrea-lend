import { useEffect, useState } from 'react';
import axios from 'axios';

const Profile: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    // Mock Blocksense API call
    axios.get('http://localhost:5000/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-secondary mb-4">Your Profile</h2>
      <div className="bg-gray-800 p-6 rounded-xl">
        <h3 className="text-lg font-semibold text-secondary">Transaction History</h3>
        <ul className="mt-4 space-y-2">
          {transactions.map((tx, index) => (
            <li key={index} className="text-gray-300">{tx.description} - {tx.amount} BTC</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;