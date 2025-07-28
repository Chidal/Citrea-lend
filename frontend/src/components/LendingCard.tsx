interface LendingCardProps {
  asset: string;
  apy: number;
  totalLent: number;
  available: number;
}

const LendingCard: React.FC<LendingCardProps> = ({ asset, apy, totalLent, available }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-secondary">{asset}</h3>
      <p className="text-gray-300">APY: {apy}%</p>
      <p className="text-gray-300">Total Lent: {totalLent} {asset}</p>
      <p className="text-gray-300">Available: {available} {asset}</p>
      <button className="mt-4 bg-accent text-primary py-2 px-4 rounded-md hover:bg-green-500">
        Lend Now
      </button>
    </div>
  );
};

export default LendingCard;