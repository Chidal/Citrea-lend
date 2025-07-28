import { Link } from 'react-router-dom';
import { WalletIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="text-secondary text-2xl font-bold">Citrea-Lend</span>
        <div className="flex space-x-6 text-gray-300">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/profile" className="hover:text-secondary">Profile</Link>
        </div>
        <button className="bg-secondary text-black px-4 py-2 rounded-full hover:bg-green-400">
          <WalletIcon className="h-5 w-5 mr-2 inline" /> Connect
        </button>
      </div>
    </nav>
  );
};

export default Header;