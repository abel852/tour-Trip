export type DifficultyLevel = 'Easy' | 'Moderate' | 'Strenuous' | 'Technical';

export interface ItineraryItem {
  id: string;
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals: string[];
  distance?: string;
  elevationGain?: string;
}

export interface PackingItem {
  name: string;
  category: 'Required Gear' | 'Recommended Clothing' | 'Personal Items' | 'Optional';
  included: boolean;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  heroImage: string;
  galleryImages: string[];
  distanceKm: number;
  maxElevationM: number;
  durationDays: number;
  maxGroupSize: number;
  difficulty: DifficultyLevel;
  basePrice: number;
  currency: string;
  highlights?: string[];
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  packingList: PackingItem[];
  fitnessLevel: string;
  medicalWarnings?: string[];
  acclimatizationNotes?: string;
  availableDates: Date[];
  bookedDates: Date[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  certifications?: string[];
  languages?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  rating: number;
  tourName: string;
  review: string;
  date: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface Booking {
  id: string;
  tourId: string;
  userId?: string;
  startDate: Date;
  guests: {
    adults: number;
    children: number;
  };
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  contactInfo: {
    fullName: string;
    email: string;
    phone: string;
    emergencyContact: string;
    dietaryRestrictions?: string;
    medicalRestrictions?: string;
  };
}
