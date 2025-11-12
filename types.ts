import type { ReactNode } from 'react';

export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

export interface Feature {
  id: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
