export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  features?: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  text: string;
  rating: number;
}
