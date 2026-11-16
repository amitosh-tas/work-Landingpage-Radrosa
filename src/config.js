// Everything you may want to change lives here.

// Your app's Shopify App Store page (or your install link for an unlisted app).
export const SHOPIFY_APP_URL = 'https://apps.shopify.com/lookon';
export const CONTACT_EMAIL = 'hello@lookon.app';

// Current credit pack pricing.
export const CREDITS_PER_IMAGE = 10;
export const CURRENCY = 'USD';
export const PACKS = [
  { price: 20, credits: 94, cost: 15, profit: 5 },
  { price: 80, credits: 376, cost: 60, profit: 20 },
  { price: 1000, credits: 4700, cost: 750, profit: 250 },
  { price: 100000, credits: 470000, cost: 75000, profit: 25000 },
];

// What the demo can put on the shopper.
export const DEMO_PRODUCTS = [
  { id: 'earrings', label: 'Gold hoops', kind: 'Earrings' },
  { id: 'hat', label: 'Wool beanie', kind: 'Hat' },
  { id: 'glasses', label: 'Round frames', kind: 'Glasses' },
  { id: 'necklace', label: 'Pendant chain', kind: 'Necklace' },
];
