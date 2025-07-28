import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WalletIcon } from '@heroicons/react/24/solid';
import WalletConnect from './WalletConnect';

const Header: React.FC = () => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-800 to-black p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-green-400 text-2xl font-bold">Citrea-Lend</span>
        </div>
        <div className="flex space-x-6 text-gray-300">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
        </div>
        <button
          onClick={() => setIsWalletModalOpen(true)}
          className="flex items-center bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-400"
        >
          <WalletIcon className="h-5 w-5 mr-2" />
          Connect Wallet
        </button>
      </div>
      {isWalletModalOpen && <WalletConnect onClose={() => setIsWalletModalOpen(false)} />}
    </nav>
  );
};

export default Header;