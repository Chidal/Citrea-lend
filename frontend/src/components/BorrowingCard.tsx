interface BorrowingCardProps {
  asset: string;
  interestRate: number;
  maxBorrow: number;
  collateralRatio: number;
}

const BorrowingCard: React.FC<BorrowingCardProps> = ({ asset, interestRate, maxBorrow, collateralRatio }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-secondary">{asset}</h3>
      <p className="text-gray-300">Interest Rate: {interestRate}%</p>
      <p className="text-gray-300">Max Borrow: {maxBorrow} {asset}</p>
      <p className="text-gray-300">Collateral Ratio: {collateralRatio}%</p>
      <button className="mt-4 bg-accent text-primary py-2 px-4 rounded-md hover:bg-green-500">
        Borrow Now
      </button>
    </div>
  );
};

export default BorrowingCard;