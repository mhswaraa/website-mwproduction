
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg animate-gradient-pulse"></div>
      <div className="absolute inset-0 bg-brand-dark/60"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-manrope font-extrabold text-white tracking-tight leading-tight uppercase animate-fade-in-up [animation-delay:0.2s] opacity-0">
          Tools Digital untuk <span className="gradient-text">Pertumbuhan</span> Anda
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-brand-gray animate-fade-in-up [animation-delay:0.4s] opacity-0">
          Tingkatkan produktivitas Anda dengan koleksi template, tools, dan aset digital kami yang dirancang untuk kesuksesan personal dan profesional.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap animate-fade-in-up [animation-delay:0.6s] opacity-0">
          <a href="#products" className="px-8 py-4 bg-brand-primary text-white rounded-lg font-bold hover:bg-brand-primary/80 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.6)]">
            Jelajahi Produk
          </a>
          <a href="#features" className="px-8 py-4 bg-transparent text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border-2 border-brand-primary">
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;