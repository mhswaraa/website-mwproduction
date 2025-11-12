
import React from 'react';
import type { Product, Feature, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Life Planner Dashboard',
    category: 'Template Digital',
    description: 'Organisir tujuan, tugas, dan kebiasaan Anda dalam satu dasbor digital yang intuitif dan powerful.',
    price: 349000,
    imageUrl: 'https://picsum.photos/seed/planner/600/400',
  },
  {
    id: 2,
    name: 'Budgeting Toolkit',
    category: 'Tools Keuangan',
    description: 'Kendalikan keuangan Anda dengan serangkaian alat penganggaran dan pelacakan komprehensif kami.',
    price: 499000,
    imageUrl: 'https://picsum.photos/seed/budget/600/400',
  },
  {
    id: 3,
    name: 'Content Creator\'s Pack',
    category: 'Template & Aset',
    description: 'Luncurkan kreativitas Anda dengan 50+ template untuk media sosial, skrip, dan perencanaan konten.',
    price: 799000,
    imageUrl: 'https://picsum.photos/seed/creator/600/400',
  },
];

// Tentukan produk mana yang akan ditampilkan di bagian diskon
export const DISCOUNTED_PRODUCT_IDS = [1, 2];

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const ChartBarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917l9 2.5 9-2.5a12.02 12.02 0 00-2.382-9.984z" />
    </svg>
);

export const FEATURES: Feature[] = [
    {
        id: 1,
        icon: <CalendarIcon />,
        title: 'Langsung Pakai',
        description: 'Dapatkan akses instan ke template dan tools Anda setelah pembelian untuk langsung digunakan.'
    },
    {
        id: 2,
        icon: <ChartBarIcon />,
        title: 'Kualitas Profesional',
        description: 'Semua produk kami dirancang oleh ahli untuk memastikan hasil yang fungsional dan estetis.'
    },
    {
        id: 3,
        icon: <ShieldCheckIcon />,
        title: 'Dukungan Berkelanjutan',
        description: 'Beli sekali dan dapatkan pembaruan gratis selamanya. Kami terus menyempurnakan produk kami.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'Life Planner Dashboard benar-benar mengubah cara saya mengatur minggu saya. Intuitif dan dirancang dengan indah. Wajib dimiliki!',
    author: 'Rina Hartono',
    role: 'Project Manager, Inovasi Digital',
    avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
  },
  {
    id: 2,
    quote: 'Akhirnya, alat penganggaran yang masuk akal! Toolkit ini mudah digunakan dan telah membantu saya menabung lebih banyak dari sebelumnya.',
    author: 'Budi Santoso',
    role: 'Konsultan Lepas',
    avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
  },
  {
    id: 3,
    quote: 'Sebagai seorang content creator, paket ini adalah penyelamat. Menghemat banyak waktu saya dalam perencanaan dan membuat saya bisa fokus pada kreativitas.',
    author: 'Citra Lestari',
    role: 'YouTuber & Blogger',
    avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
  },
];

// Menetapkan tanggal target untuk hitung mundur (contoh: 7 hari dari sekarang)
export const COUNTDOWN_TARGET_DATE = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);