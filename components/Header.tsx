
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-brand-dark/70 backdrop-blur-md sticky top-0 z-50 border-b border-brand-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <span className="text-3xl font-manrope font-bold text-white tracking-wider">MW.<span className="text-brand-primary">Production</span></span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-10">
            <a href="#products" className="text-brand-gray hover:text-white transition-colors relative group">
                Produk
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#features" className="text-brand-gray hover:text-white transition-colors relative group">
                Fitur
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
            <a href="#testimonials" className="text-brand-gray hover:text-white transition-colors relative group">
                Testimoni
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
          <div className="hidden md:block">
            <a href="#" className="px-5 py-2.5 bg-brand-primary text-white rounded-lg font-bold hover:bg-brand-primary/80 transition-colors shadow-[0_0_15px_rgba(16,185,129,0.5)]">
              Mulai Sekarang
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray hover:text-white focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-dark/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:bg-brand-dark-secondary hover:text-white">Produk</a>
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:bg-brand-dark-secondary hover:text-white">Fitur</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-brand-gray hover:bg-brand-dark-secondary hover:text-white">Testimoni</a>
            <a href="#" className="block w-full text-center px-3 py-3 rounded-md text-base font-bold text-white bg-brand-primary hover:bg-brand-primary/80 mt-2">Mulai Sekarang</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
