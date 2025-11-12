
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatRupiah = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleBuyClick = () => {
    alert(`Membeli ${product.name} seharga ${formatRupiah(product.price)}`);
  };

  return (
    <div className="group bg-brand-dark border border-brand-light/10 rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col hover:shadow-2xl hover:shadow-brand-primary/30 hover:-translate-y-2 hover:scale-[1.02]">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute top-4 left-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">{product.category}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white">{product.name}</h3>
        <p className="mt-2 text-brand-gray flex-grow">{product.description}</p>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xl sm:text-2xl font-extrabold text-white">{formatRupiah(product.price)}</p>
          <button
            onClick={handleBuyClick}
            className="w-full sm:w-auto px-6 py-3 bg-brand-primary text-white rounded-lg font-bold hover:bg-brand-primary/80 transition-colors focus:outline-none focus:ring-4 focus:ring-brand-primary/50 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
          >
            Dapatkan Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
