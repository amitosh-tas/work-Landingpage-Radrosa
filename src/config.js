// Everything you may want to change lives here.

// Your app's Shopify App Store page (or your install link for an unlisted app).
export const SHOPIFY_APP_URL = 'https://apps.shopify.com/lookon';
export const CONTACT_EMAIL = 'hello@lookon.app';

// Credit packs, as set in the lookOn super admin (Credit logic). Stores see price, credits and images only.
export const CREDITS_PER_IMAGE = 10;
export const CURRENCY = 'USD';
export const PACKS = [
  { price: 10, credits: 500 },
  { price: 20, credits: 1000 },
  { price: 50, credits: 2500, popular: true },
  { price: 100, credits: 5000 },
];

// What the demo can put on the shopper.
export const DEMO_PRODUCTS = [
  { id: 'earrings', label: 'Gold hoops', kind: 'Earrings' },
  { id: 'hat', label: 'Wool beanie', kind: 'Hat' },
  { id: 'glasses', label: 'Round frames', kind: 'Glasses' },
  { id: 'necklace', label: 'Pendant chain', kind: 'Necklace' },
];
