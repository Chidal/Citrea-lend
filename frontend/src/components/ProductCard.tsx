interface ProductCardProps {
  title: string;
  rate: number;
  maxAmount: number;
  type: 'lend' | 'borrow';
}

const ProductCard: React.FC<ProductCardProps> = ({ title, rate, maxAmount, type }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <h3 className="text-lg font-semibold text-green-400">{title}</h3>
      <p className="text-gray-300">Rate: {rate}%</p>
      <p className="text-gray-300">Max Amount: {maxAmount} BTC</p>
      <button className="mt-2 bg-green-500 text-black py-1 px-3 rounded-full hover:bg-green-400">
        {type === 'lend' ? 'Lend Now' : 'Borrow Now'}
      </button>
    </div>
  );
};

export default ProductCard;