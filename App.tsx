
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-brand-light font-sans">
      <Header />
      <main>
        <Hero />
        <Products />
        <Countdown />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
