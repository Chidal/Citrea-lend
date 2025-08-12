import { Link } from 'react-router-dom';
import { WalletIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  return (
    <nav className="bg-primary p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-secondary text-2xl font-bold">Citrea-Lend</span>
        <div className="flex space-x-6 text-accent">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/lend" className="hover:text-secondary">Lend</Link>
          <Link to="/borrow" className="hover:text-secondary">Borrow</Link>
          <Link to="/profile" className="hover:text-secondary">Profile</Link>
        </div>
        <button className="bg-secondary text-primary px-4 py-2 rounded-full hover:bg-orange-500">
          <WalletIcon className="h-5 w-5 mr-2 inline" /> Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Header;