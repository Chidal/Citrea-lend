interface ProductCardProps {
  title: string;
  rate: number;
  maxAmount: number;
  type: 'lend' | 'borrow';
}

const ProductCard: React.FC<ProductCardProps> = ({ title, rate, maxAmount, type }) => {
  return (
    <div className="bg-primary rounded-full w-48 h-48 flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-secondary">{title}</h3>
        <p className="text-highlight">Rate: {rate}%</p>
        <p className="text-highlight">Max: {maxAmount} BTC</p>
        <button className="mt-2 bg-secondary text-primary py-1 px-3 rounded-full hover:bg-orange-500">
          {type === 'lend' ? 'Lend Now' : 'Borrow Now'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;