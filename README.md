# lookOn landing page (React + Vite)

```bash
npm install
npm run dev      # local preview at http://localhost:5173
npm run build    # static site in dist/ — upload it to any host (Vercel, Netlify, Cloudflare Pages, S3…)
```

## Change these first — `src/config.js`
- `SHOPIFY_APP_URL`: your Shopify App Store page (or install link). Every "Add to Shopify" button uses it.
- `CONTACT_EMAIL`
- `PACKS`, `CREDITS_PER_IMAGE`, `CURRENCY`: keep them the same as the lookOn super admin (Credit logic).
- `DEMO_PRODUCTS`: the products the hero demo cycles through.

## What's inside
- `src/components/ScanDemo.jsx`: hero demo — the shopper photo is scanned on the left, the preview is revealed on the right; loops, or visitors pick a product.
- `src/components/Portrait.jsx`: the illustrated shopper (original artwork) with and without each accessory.
- `src/components/Pricing.jsx`: credit packs and the "how many previews a month" calculator.
- `src/App.jsx`: page sections (hero, products, how it works, merchant features, pricing, questions, final call to action).
- `src/styles.css`: all styles. Respects "reduce motion" and works down to phone width.
