import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const Home: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [marketData, setMarketData] = useState({ apy: 3.5, interest: 5.0, stakeYield: 2.0 });

  useEffect(() => {
    // Mock Redstone API call
    axios.get('http://localhost:5000/market-data')
      .then(response => setMarketData(response.data))
      .catch(error => console.error('Error fetching market data:', error));
  }, []);

  const toggleAdvanced = () => setShowAdvanced(!showAdvanced);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-b from-green-900 to-black p-10 rounded-xl mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="text-secondary">The Best</span><br />
          <span className="text-secondary">DeFi Choice</span><br />
          for Your BTC
        </h1>
        <div className="flex justify-center mb-4">
          <span className="w-16 h-1 bg-gray-300 rounded-full"></span>
        </div>
        <button
          onClick={toggleAdvanced}
          className="bg-secondary text-black py-3 px-6 rounded-full text-lg hover:bg-green-400 transition"
        >
          Let's Start
        </button>
      </div>

      {showAdvanced && (
        <div>
          <h2 className="text-2xl font-bold text-secondary mb-4">Market Dashboard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <ProductCard title="Lend BTC" rate={marketData.apy} maxAmount={500} type="lend" />
            <ProductCard title="Borrow BTC" rate={marketData.interest} maxAmount={200} type="borrow" />
            <ProductCard title="Stake BTC" rate={marketData.stakeYield} maxAmount={100} type="stake" />
          </div>
          <div className="mb-6">
            <canvas id="earningsChart" width="400" height="200"></canvas>
            <script>
              {`const ctx = document.getElementById('earningsChart').getContext('2d');
               new Chart(ctx, {
                 type: 'line',
                 data: { labels: ['Day 1', 'Day 2', 'Day 3'], datasets: [{ label: 'Earnings', data: [10, 20, 30], borderColor: '#00ff00', tension: 0.1 }] },
                 options: { scales: { y: { beginAtZero: true } } }
               });`}
            </script>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;