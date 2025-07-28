import BorrowingCard from '../components/BorrowingCard';

const Borrow: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-secondary mb-6">Borrow Against Your BTC</h2>
      <p className="text-gray-300 mb-6">Use your Bitcoin as collateral to borrow other assets securely.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <BorrowingCard asset="BTC" interestRate={5.0} maxBorrow={200} collateralRatio={150} />
        <BorrowingCard asset="cBTC" interestRate={5.5} maxBorrow={150} collateralRatio={140} />
        <BorrowingCard asset="BTC" interestRate={5.2} maxBorrow={180} collateralRatio={145} />
      </div>
    </div>
  );
};

export default Borrow;