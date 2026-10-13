export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  type: 'RENT' | 'SALE';
  category: 'NATIONAL' | 'INTERNATIONAL';
  bhk: string;
  price: string;
  isVerified: boolean;
  ownerContact: string;
}

export const POPULAR_NATIONAL_CITIES = [
  'Noida', 'Greater Noida', 'Ghaziabad', 'Delhi NCR', 'Gurugram', 'Mumbai', 'Bengaluru', 'Pune'
];

export const POPULAR_INTL_CITIES = [
  'Dubai (UAE)', 'London (UK)', 'Singapore', 'Toronto (Canada)', 'New York (USA)'
];

// Helper to generate dynamic listings
export const generateDynamicProperties = (
  cityFilter?: string,
  typeFilter?: string,
  categoryFilter?: string,
  limit: number = 12
): Property[] => {
  const sampleListings: Property[] = [
    {
      id: 'AH-8L-01',
      title: '2 BHK Luxury Apartment',
      location: 'Sector 62',
      city: 'Noida',
      type: 'RENT',
      category: 'NATIONAL',
      bhk: '2 BHK',
      price: '₹22,000 / month',
      isVerified: true,
      ownerContact: '+91 9876543210'
    },
    {
      id: 'AH-8L-02',
      title: '3 BHK Independent Builder Floor',
      location: 'Indirapuram',
      city: 'Ghaziabad',
      type: 'SALE',
      category: 'NATIONAL',
      bhk: '3 BHK',
      price: '₹75 Lakhs',
      isVerified: true,
      ownerContact: '+91 9876543211'
    },
    {
      id: 'AH-8L-03',
      title: '3 BHK Gated Society Flat',
      location: 'DLF Phase 5',
      city: 'Gurugram',
      type: 'RENT',
      category: 'NATIONAL',
      bhk: '3 BHK',
      price: '₹55,000 / month',
      isVerified: true,
      ownerContact: '+91 9876543212'
    },
    {
      id: 'AH-8L-04',
      title: '3 BHK Premium Flat',
      location: 'Andheri West',
      city: 'Mumbai',
      type: 'SALE',
      category: 'NATIONAL',
      bhk: '3 BHK',
      price: '₹2.4 Crores',
      isVerified: true,
      ownerContact: '+91 9876543213'
    },
    {
      id: 'AH-8L-05',
      title: '2 BHK Modern Apartment',
      location: 'Koramangala',
      city: 'Bengaluru',
      type: 'RENT',
      category: 'NATIONAL',
      bhk: '2 BHK',
      price: '₹38,000 / month',
      isVerified: true,
      ownerContact: '+91 9876543214'
    },
    {
      id: 'AH-4L-01',
      title: '1 BHK Executive Suite (Burj View)',
      location: 'Downtown',
      city: 'Dubai (UAE)',
      type: 'RENT',
      category: 'INTERNATIONAL',
      bhk: '1 BHK',
      price: '$1,500 / month',
      isVerified: true,
      ownerContact: '+971 501234567'
    },
    {
      id: 'AH-4L-02',
      title: '3 BHK Luxury Condo with Terrace',
      location: 'Mayfair',
      city: 'London (UK)',
      type: 'SALE',
      category: 'INTERNATIONAL',
      bhk: '3 BHK',
      price: '£650,000',
      isVerified: true,
      ownerContact: '+44 2079460912'
    },
    {
      id: 'AH-4L-03',
      title: '3 BHK Marina Bay Penthouse',
      location: 'Marina Bay',
      city: 'Singapore',
      type: 'SALE',
      category: 'INTERNATIONAL',
      bhk: 'Penthouse',
      price: 'S$ 2.1 Million',
      isVerified: true,
      ownerContact: '+65 61234567'
    }
  ];

  return sampleListings.filter((prop)
