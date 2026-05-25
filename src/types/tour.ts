export type DifficultyLevel = 'Easy' | 'Moderate' | 'Strenuous' | 'Technical';

export interface ItineraryItem {
  id: string;
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals: string[]; // e.g., ['Breakfast', 'Lunch', 'Dinner']
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
  
  // Adventure Meta Stats
  distanceKm: number;
  maxElevationM: number;
  durationDays: number;
  maxGroupSize: number;
  difficulty: DifficultyLevel;
  
  // Pricing
  basePrice: number;
  currency: string;
  
  // Content
  itinerary: ItineraryItem[];
  inclusions: string[];
  exclusions: string[];
  packingList: PackingItem[];
  
  // Safety & Prerequisites
  fitnessLevel: string;
  medicalWarnings?: string[];
  acclimatizationNotes?: string;
  
  // Booking related
  availableDates: Date[];
  bookedDates: Date[];
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
