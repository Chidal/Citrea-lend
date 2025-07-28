import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-b from-green-900 to-black p-10 rounded-xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-green-400">The Best</span><br />
          <span className="text-green-400">DeFi Choice</span><br />
          for Your BTC
        </h1>
        <div className="flex justify-center mb-4">
          <span className="w-16 h-1 bg-gray-300 rounded-full"></span>
        </div>
        <button
          onClick={toggleProducts}
          className="bg-green-500 text-black py-3 px-6 rounded-full text-lg hover:bg-green-400 transition"
        >
          Let's Start
        </button>
      </div>

      {showProducts && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard title="Lend BTC" rate={3.5} maxAmount={500} type="lend" />
          <ProductCard title="Borrow BTC" rate={5.0} maxAmount={200} type="borrow" />
          <ProductCard title="Lend cBTC" rate={4.0} maxAmount={300} type="lend" />
        </div>
      )}
    </div>
  );
};

export default Home;