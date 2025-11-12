
import React, { useState, useEffect } from 'react';
import { COUNTDOWN_TARGET_DATE, PRODUCTS, DISCOUNTED_PRODUCT_IDS } from '../constants';
import type { TimeLeft } from '../types';
import ProductCard from './ProductCard';

const calculateTimeLeft = (): TimeLeft | {} => {
  const difference = +COUNTDOWN_TARGET_DATE - +new Date();
  let timeLeft: TimeLeft | {} = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const TimeBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="text-3xl md:text-6xl font-manrope font-extrabold text-white bg-white/5 backdrop-blur-sm border border-brand-primary/30 rounded-lg px-2 py-2 md:px-4 md:py-3 min-w-[65px] md:min-w-[120px] text-center shadow-lg">
            {String(value).padStart(2, '0')}
        </div>
        <div className="mt-2 md:mt-3 text-xs md:text-base font-semibold text-brand-gray uppercase tracking-widest">{label}</div>
    </div>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const discountedProducts = PRODUCTS.filter(product => DISCOUNTED_PRODUCT_IDS.includes(product.id));

  useEffect(() => {
    const initialTimeLeft = calculateTimeLeft();
    if ('days' in initialTimeLeft) {
        setTimeLeft(initialTimeLeft as TimeLeft);
    }

    const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft();
        if ('days' in newTimeLeft) {
            setTimeLeft(newTimeLeft as TimeLeft);
        } else {
            clearInterval(timer);
            setTimeLeft(null);
        }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
        <section className="bg-brand-dark py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-manrope font-extrabold text-white">Penawaran Spesial Telah Berakhir!</h2>
                <p className="mt-4 text-lg text-brand-gray">Nantikan promo eksklusif kami selanjutnya.</p>
            </div>
        </section>
    );
  }

  return (
    <section className="bg-brand-dark py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark-secondary to-brand-dark"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-manrope font-extrabold text-white">
                    <span className="text-brand-primary">Penawaran Waktu Terbatas!</span> Dapatkan Diskon 20%
                </h2>
                <p className="mt-4 text-lg text-brand-gray">Promo spesial ini akan berakhir dalam:</p>
            </div>
            <div className="flex justify-center items-start space-x-2 sm:space-x-4 md:space-x-8">
                <TimeBox value={timeLeft.days} label="Hari" />
                <span className="text-3xl md:text-6xl font-manrope text-brand-primary/50 pt-2 md:pt-3">:</span>
                <TimeBox value={timeLeft.hours} label="Jam" />
                <span className="text-3xl md:text-6xl font-manrope text-brand-primary/50 pt-2 md:pt-3">:</span>
                <TimeBox value={timeLeft.minutes} label="Menit" />
                <span className="text-3xl md:text-6xl font-manrope text-brand-primary/50 pt-2 md:pt-3">:</span>
                <TimeBox value={timeLeft.seconds} label="Detik" />
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {discountedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            <div className="text-center mt-16">
                <a href="#products" className="px-10 py-4 bg-brand-primary text-white rounded-lg font-bold hover:bg-brand-primary/80 transition-all transform hover:scale-105 shadow-[0_0_25px_rgba(16,185,129,0.7)] text-lg">
                    Klaim Diskon Anda
                </a>
            </div>
        </div>
    </section>
  );
};

export default Countdown;
