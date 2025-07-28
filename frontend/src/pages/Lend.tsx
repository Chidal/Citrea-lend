import LendingCard from '../components/LendingCard';

const Lend: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-secondary mb-6">Lend Your BTC</h2>
      <p className="text-gray-300 mb-6">Lend your Bitcoin to earn attractive yields with Citrea’s zk-rollup technology.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <LendingCard asset="BTC" apy={3.5} totalLent={1000} available={500} />
        <LendingCard asset="cBTC" apy={4.0} totalLent={800} available={300} />
        <LendingCard asset="BTC" apy={3.8} totalLent={1200} available={400} />
      </div>
    </div>
  );
};

export default Lend;