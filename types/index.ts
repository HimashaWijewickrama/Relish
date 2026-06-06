//define TypeScript interfaces for the components and data structures used in the project
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: "starters" | "salads" | "specialty";
}

export interface Chef {
  id: number;
  name: string;
  role: string;
  image: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  stars: number;
}

export interface Special {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
}