import { Link } from 'react-router-dom';

const AccountingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-dark text-accent p-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Accounting Basics</h1>
      <p>Learn to manage your DeFi finances here. (To be implemented)</p>
      <Link to="/" className="mt-4 bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition">
        Back to Home
      </Link>
    </div>
  );
};

export default AccountingPage;