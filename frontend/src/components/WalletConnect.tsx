import { useState } from 'react';

interface WalletConnectProps {
  onClose: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onClose }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const connectWallet = () => {
    const address = '0x1234...5678'; // Mock address
    setWalletAddress(address);
    alert('Wallet connected successfully!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-xl font-bold text-green-400 mb-4">Connect to Citrea</h2>
        {walletAddress ? (
          <p className="text-green-400">Connected: {walletAddress}</p>
        ) : (
          <button
            onClick={connectWallet}
            className="w-full bg-green-500 text-black py-2 rounded-full hover:bg-green-400"
          >
            Connect with MetaMask
          </button>
        )}
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-600 text-white py-2 rounded-full hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WalletConnect;