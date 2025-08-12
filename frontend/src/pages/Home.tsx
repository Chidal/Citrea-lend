import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="bg-primary p-10 rounded-lg mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-accent mb-4">
          <span>The Best</span><br />
          <span>DeFi Choice</span><br />
          for Your BTC
        </h1>
        <div className="flex justify-center mb-4">
          <span className="w-16 h-1 bg-highlight rounded-full"></span>
        </div>
        <button
          onClick={() => setShowProducts(!showProducts)}
          className="bg-secondary text-primary py-3 px-6 rounded-full text-lg hover:bg-orange-500 transition"
        >
          Shop Now
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