# Maison Lumière — fine jewellery storefront

A luxury jewellery e-commerce experience built with React, React Router and Vite.
It is a self-contained storefront demo: catalogue, search, filtering, wishlist,
cart and a demonstrative checkout all run client-side, with cart and wishlist
persisted in `localStorage`.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on `http://localhost:3000`.

## Structure

- `src/data/catalog.js` — products, collections, editorial content, pricing helpers
- `src/store/StoreContext.jsx` — cart, wishlist, overlays and toast notifications
- `src/components/` — header, mega menu, drawers, cart, quick view, product card
- `src/pages/` — home, shop, product detail, wishlist, about, journal, checkout
- `src/styles/` — design tokens and page styles

## Note on the demo

No payment provider or backend is connected. The checkout and account screens are
clearly labelled demonstrations; no order is placed and no data leaves the browser.
