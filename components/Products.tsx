
import React from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-brand-dark-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-manrope font-extrabold text-white uppercase">Katalog Produk Kami</h2>
          <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
            Aset yang dirancang untuk meningkatkan produktivitas dan membantu Anda meraih sukses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
