export interface PropertyListing {
  id: string;
  title: string;
  price: string;
  location: string;
  type: string;
  bhk: string;
  carpetArea: string;
  deposit: string;
  furnishing: string;
  preferredTenant: string;
  viewsCount: number;
  imageUrl: string;
}

export const sampleListings: PropertyListing[] = [
  {
    id: 'prop-1',
    title: '2 BHK Luxury Apartment in Sector 62, Noida',
    price: '₹22,000 / month',
    location: 'Sector 62, Noida',
    type: 'Rent',
    bhk: '2 BHK',
    carpetArea: '850 sqft',
    deposit: '₹44,000',
    furnishing: 'Semi Furnished',
    preferredTenant: 'Anyone',
    viewsCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-2',
    title: '3 BHK Independent Builder Floor in Indirapuram',
    price: '₹75 Lakhs',
    location: 'Indirapuram, Ghaziabad',
    type: 'Sale',
    bhk: '3 BHK',
    carpetArea: '1350 sqft',
    deposit: 'Nil',
    furnishing: 'Semi Furnished',
    preferredTenant: 'Family Only',
    viewsCount: 18,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-3',
    title: '1 BHK Semi-Furnished Studio in Vaishali',
    price: '₹12,500 / month',
    location: 'Vaishali, Ghaziabad',
    type: 'Rent',
    bhk: '1 BHK',
    carpetArea: '520 sqft',
    deposit: '₹25,000',
    furnishing: 'Semi Furnished',
    preferredTenant: 'Bachelors',
    viewsCount: 8,
    imageUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'prop-4',
    title: '3 BHK Gated Society Flat in DLF Phase 5',
    price: '₹55,000 / month',
    location: 'DLF Phase 5, Gurugram',
    type: 'Rent',
    bhk: '3 BHK',
    carpetArea: '1600 sqft',
    deposit: '₹1,10,000',
    furnishing: 'Fully Furnished',
    preferredTenant: 'Family Only',
    viewsCount: 25,
    imageUrl: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80'
  }
];

export function getFilteredListings(query: string = ''): PropertyListing[] {
  return sampleListings.filter((prop) => {
    if (!query) return true;
    return prop.title.toLowerCase().includes(query.toLowerCase()) || 
           prop.location.toLowerCase().includes(query.toLowerCase());
  });
}
