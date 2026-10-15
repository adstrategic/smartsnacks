export type ProductCategory =
  | "protein-shakes"
  | "energy-teas"
  | "mega-teas"
  | "bowls"
  | "acai"
  | "waffles-snacks"
  | "waffles"
  | "specialties"
  | "coffee"
  | "functional-drinks";

export interface NutritionalHighlight {
  label: string;
  badgeType?: "protein" | "energy" | "clean" | "superfood" | "specialty";
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image?: string;
  pricePlaceholder?: string; // e.g. "Contact for pricing / In-store"
  proteinAmount?: string; // e.g. "24g+ Protein" or placeholder
  caloriesPlaceholder?: string; // e.g. "Approx. 200-250 cal" or placeholder
  highlights: string[];
  isFeatured?: boolean;
  isHerbalifeBased?: boolean;
  customizationNotes?: string;
}

export interface CategoryInfo {
  id: ProductCategory;
  slug: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  accentColor: string;
  path: string;
}

export interface BusinessLocation {
  name: string;
  streetAddress: string;
  corridor?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  displayPhone: string;
  email: string;
  googleMapsDirectionsUrl: string;
  embedMapUrlPlaceholder: string;
  hours: {
    dayRange: string;
    openTime: string;
    closeTime: string;
    formatted: string;
  }[];
}

export interface SocialLink {
  platform: "Instagram" | "Facebook" | "WhatsApp" | "Google";
  url: string;
  handle: string;
  ariaLabel: string;
}

export interface Testimonial {
  id: string;
  author: string;
  source: string;
  text: string;
  rating: number;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "menu" | "nutrition" | "ordering" | "general";
}
