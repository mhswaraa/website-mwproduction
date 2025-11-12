
import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-brand-dark p-8 border border-brand-light/10 rounded-xl shadow-lg flex flex-col h-full">
        <svg className="w-10 h-10 text-brand-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.983 3v7.391c0 2.908-2.35 5.258-5.258 5.258H3.342V10.12C3.342 6.182 6.524 3 9.983 3zM20.983 3v7.391c0 2.908-2.35 5.258-5.258 5.258h-1.383V10.12C14.342 6.182 17.524 3 20.983 3z"/>
        </svg>
        <blockquote className="mt-4 text-brand-gray flex-grow">
            <p>"{testimonial.quote}"</p>
        </blockquote>
        <footer className="mt-6 flex items-center">
            <img className="h-14 w-14 rounded-full object-cover border-2 border-brand-primary" src={testimonial.avatarUrl} alt={testimonial.author} />
            <div className="ml-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-brand-gray">{testimonial.role}</p>
            </div>
        </footer>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-manrope font-extrabold text-white uppercase">Dipercaya Para Profesional</h2>
                    <p className="mt-4 text-lg text-brand-gray max-w-2xl mx-auto">
                        Lihat apa kata para pelanggan kami yang puas.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;