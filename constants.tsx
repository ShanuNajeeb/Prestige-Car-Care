import { Service, Testimonial, PricingPlan } from './types.ts';

export const SERVICES: Service[] = [
  {
    id: 'engine',
    title: 'Engine Repair',
    category: 'MECHANICAL',
    description: 'Comprehensive diagnostics, major overhauls, and performance tuning for peak efficiency.',
    image: 'https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?auto=format&fit=crop&q=80',
    tag: 'MASTER TECH CHOICE'
  },
  {
    id: 'oil',
    title: 'Oil Services',
    category: 'MAINTENANCE',
    description: 'Premium synthetic oil changes and filter replacements for long-term engine health.',
    image: 'https://images.unsplash.com/photo-1635437536607-b8572f443763?auto=format&fit=crop&q=80',
    tag: 'PRESTIGE STANDARD'
  },
  {
    id: 'brakes',
    title: 'Brake Services',
    category: 'SAFETY',
    description: 'Disc resurfacing, pad replacement, and safety inspections for maximum stopping power.',
    image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80',
    tag: 'PRECISION CARE'
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    category: 'TRANSMISSION',
    description: 'Differential work, steering rack fixes, and precision wheel alignment laboratory.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80',
    tag: 'STABILITY'
  },
  {
    id: 'fuel',
    title: 'Fuel System',
    category: 'OPTIMIZATION',
    description: 'Injector cleaning and fuel pump maintenance for maximum performance and efficiency.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80',
    tag: 'EFFICIENCY'
  },
  {
    id: 'ac',
    title: 'AC Services',
    category: 'COMFORT',
    description: 'Specialized cooling system maintenance, gas refills, and leak detection for the UAE climate.',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80',
    tag: 'CLIMATE CONTROL'
  },
  {
    id: 'paint',
    title: 'Painting Workshop',
    category: 'AESTHETICS',
    description: 'Professional oven-baked painting with a high-gloss showroom finish and exact color matching.',
    image: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80',
    tag: 'AED 2,900+'
  },
  {
    id: 'bodywork',
    title: 'Body Repair',
    category: 'RESTORATION',
    description: 'Scuff removal, dent repair, and full body restoration after minor or major incidents.',
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80',
    tag: 'ELITE CARE'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mohanad K.',
    role: 'Google Reviewer',
    content: "I testify that Mohannad does amazing work. Excellent job, great attention to detail, and a clean environment.",
    rating: 5,
    initial: 'M'
  },
  {
    id: '2',
    author: 'Saeed A.',
    role: 'Local Guide',
    content: "Great garage. Clean. Taking care of your car. Very professional and highly recommended.",
    rating: 5,
    initial: 'S'
  },
  {
    id: '3',
    author: 'Ahmed R.',
    role: 'Client',
    content: "Honestly, after my experience, I thank Mohannad very much. He worked on my car as if it were his own.",
    rating: 5,
    initial: 'A'
  },
  {
    id: '4',
    author: 'Satisfied Customer',
    role: 'Visitor',
    content: "A great reception and professionalism. May God bless your business.",
    rating: 5,
    initial: 'V'
  }
];

export const PAINT_PRICES: PricingPlan[] = [
  {
    type: 'Saloons',
    label: 'Professional Oven Bake',
    price: 'AED 2,900',
    features: ['German Materials', 'Exact Color Match', 'Showroom Finish']
  },
  {
    type: 'SUVs',
    label: 'High-Gloss Finish',
    price: 'AED 3,900',
    features: ['Clinical Finish', 'Deep Gloss', 'Weather Resistant']
  },
  {
    type: '4x4 Vehicles',
    label: 'Major Body Restoration',
    price: 'AED 5,900',
    features: ['Premium Coatings', 'Full Surface Prep', 'Quality Guaranteed']
  }
];