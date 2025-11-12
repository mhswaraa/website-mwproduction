
import React from 'react';
import { FEATURES } from '../constants';
import type { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
    <div className="text-center p-8 bg-white/5 backdrop-blur-sm border border-brand-light/10 rounded-xl transition-all duration-300 hover:border-brand-primary/50 hover:bg-white/10 hover:-translate-y-1">
        <div className="flex justify-center items-center h-16 w-16 bg-brand-primary/10 rounded-full mx-auto shadow-lg">
            {feature.icon}
        </div>
        <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
        <p className="mt-2 text-brand-gray">{feature.description}</p>
    </div>
);

const Features: React.FC = () => {
    return (
        <section id="features" className="py-20 bg-brand-dark-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-manrope font-extrabold text-white uppercase">Mengapa Memilih Kami?</h2>
                    <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                        Kami fokus pada kualitas dan fungsionalitas untuk memberikan pengalaman terbaik bagi Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
