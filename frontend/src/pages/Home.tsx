import { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import { ethers } from 'ethers';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false); // Retained but not toggled
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showBorrowModal, setShowBorrowModal] = useState(false);
  const [showLendModal, setShowLendModal] = useState(false);
  const [saveAmount, setSaveAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [lendAmount, setLendAmount] = useState('');
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  const handleSave = () => {
    if (saveAmount) {
      console.log(`Saving ${saveAmount} BTC`);
      setShowSaveModal(false);
      setSaveAmount('');
    }
  };

  const handleBorrow = () => {
    if (borrowAmount) {
      console.log(`Borrowing ${borrowAmount} BTC`);
      setShowBorrowModal(false);
      setBorrowAmount('');
    }
  };

  const handleLend = () => {
    if (lendAmount) {
      console.log(`Lending ${lendAmount} BTC`);
      setShowLendModal(false);
      setLendAmount('');
    }
  };

  // Connect Wallet Function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
        console.log("Connected:", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask or an Ethereum-compatible wallet!");
    }
  };

  // Check wallet connection on mount
  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      {/* Top Section with Hero and Grids */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-8">
        {/* Hero Section with Actions (Left) */}
        <div className="bg-primary p-10 rounded-lg md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
            <span>The Best</span><br />
            <span>DeFi Choice</span><br />
            for Your BTC
          </h1>
          <div className="flex justify-center mb-4">
            <span className="w-16 h-1 bg-highlight rounded-full"></span>
          </div>

          {/* Actions Section */}
          <button
            onClick={() => setShowCalendar(true)}
            className="bg-secondary text-primary py-3 px-6 rounded-full mb-4 hover:bg-orange-500 transition"
          >
            Schedule
          </button>

          {showCalendar && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-primary p-6 rounded-lg">
                <h3 className="text-lg font-bold text-secondary mb-2">Calendar</h3>
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  className="react-calendar"
                  tileClassName="text-accent"
                />
                <p className="mt-2 text-accent">
                  Selected Date: {selectedDate?.toLocaleDateString()}
                </p>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="mt-4 bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="mb-4">
            <label className="text-accent mr-2">Save Amount:</label>
            <input
              type="number"
              value={saveAmount}
              onChange={(e) => setSaveAmount(e.target.value)}
              placeholder="Enter BTC amount"
              className="bg-primary text-accent border border-highlight rounded p-2 w-32 hover:bg-gray-700 transition"
              step="0.01"
            />
            <button
              onClick={() => setShowSaveModal(true)}
              className="ml-2 bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
            >
              Save
            </button>
          </div>

          <div className="space-x-4 mb-4">
            <button
              onClick={() => setShowBorrowModal(true)}
              className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
            >
              Borrow
            </button>
            <button
              onClick={() => setShowLendModal(true)}
              className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
            >
              Lend
            </button>
          </div>

          {/* Connect Wallet Button */}
          {!walletAddress && (
            <button
              onClick={connectWallet}
              className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
            >
              Connect Wallet
            </button>
          )}
          {walletAddress && (
            <p className="text-accent">Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
          )}
        </div>

        {/* Right Grids */}
        <div className="md:w-1/3 p-4 space-y-6">
          {/* Get a Reward for Saving */}
          <div className="bg-[#FF6200] p-6 rounded-lg text-accent shadow-lg">
            <h3 className="text-xl font-bold mb-2">Get a Reward for Saving</h3>
            <Link to="/reward" className="mt-2 bg-accent text-[#FF6200] py-1 px-3 rounded-full hover:bg-white transition block">
              Claim Reward
            </Link>
          </div>

          {/* Accounting Basics */}
          <div className="bg-[#FFC107] p-6 rounded-lg text-accent shadow-lg">
            <h3 className="text-xl font-bold mb-2">Accounting Basics</h3>
            <Link to="/accounting" className="mt-2 bg-accent text-[#FFC107] py-1 px-3 rounded-full hover:bg-white transition block">
              Learn More
            </Link>
          </div>

          {/* Savings Plan */}
          <div className="bg-[#4CAF50] p-6 rounded-lg text-accent shadow-lg">
            <h3 className="text-xl font-bold mb-2">Savings Plan</h3>
            <Link to="/savings" className="mt-2 bg-accent text-[#4CAF50] py-1 px-3 rounded-full hover:bg-white transition block">
              Start Plan
            </Link>
          </div>
        </div>
      </div>

      {/* Modals for Save, Borrow, Lend */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-primary p-6 rounded-lg">
            <h3 className="text-lg font-bold text-secondary mb-2">Save Amount</h3>
            <input
              type="number"
              value={saveAmount}
              onChange={(e) => setSaveAmount(e.target.value)}
              placeholder="Enter BTC amount"
              className="bg-primary text-accent border border-highlight rounded p-2 w-48 mb-4 hover:bg-gray-700 transition"
              step="0.01"
            />
            <div className="space-x-4">
              <button
                onClick={handleSave}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => { setShowSaveModal(false); setSaveAmount(''); }}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showBorrowModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-primary p-6 rounded-lg">
            <h3 className="text-lg font-bold text-secondary mb-2">Borrow Amount</h3>
            <input
              type="number"
              value={borrowAmount}
              onChange={(e) => setBorrowAmount(e.target.value)}
              placeholder="Enter BTC amount"
              className="bg-primary text-accent border border-highlight rounded p-2 w-48 mb-4 hover:bg-gray-700 transition"
              step="0.01"
            />
            <div className="space-x-4">
              <button
                onClick={handleBorrow}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => { setShowBorrowModal(false); setBorrowAmount(''); }}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showLendModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-primary p-6 rounded-lg">
            <h3 className="text-lg font-bold text-secondary mb-2">Lend Amount</h3>
            <input
              type="number"
              value={lendAmount}
              onChange={(e) => setLendAmount(e.target.value)}
              placeholder="Enter BTC amount"
              className="bg-primary text-accent border border-highlight rounded p-2 w-48 mb-4 hover:bg-gray-700 transition"
              step="0.01"
            />
            <div className="space-x-4">
              <button
                onClick={handleLend}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Confirm
              </button>
              <button
                onClick={() => { setShowLendModal(false); setLendAmount(''); }}
                className="bg-secondary text-primary py-2 px-4 rounded-full hover:bg-orange-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showProducts && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <ProductCard title="Lend BTC" rate={0} maxAmount={0} type="lend" />
          <ProductCard title="Borrow BTC" rate={0} maxAmount={0} type="borrow" />
          <ProductCard title="Lend cBTC" rate={0} maxAmount={0} type="lend" />
        </div>
      )}
    </div>
  );
};

export default Home;