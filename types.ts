
export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
  pricePrefix?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  rating: number;
  initial: string;
}

export interface PricingPlan {
  type: string;
  label: string;
  price: string;
  features: string[];
}
