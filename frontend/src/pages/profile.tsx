import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the shape of the transaction data
interface Transaction {
  description: string;
  amount: number;
}

const Profile: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Mock Blocksense API call
    axios.get<{ data: Transaction[] }>('http://localhost:5000/transactions')
      .then(response => setTransactions(response.data.data)) // Extract the data array
      .catch((error: Error) => console.error('Error fetching transactions:', error));
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