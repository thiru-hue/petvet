# Content map: section -> what it needs -> where to change it

Content is data in [lib/data.ts](../lib/data.ts); layout is in [app/page.tsx](../app/page.tsx); styles are in [app/globals.css](../app/globals.css).

| Section (id) | Content | Change it in |
|---|---|---|
| Announcement ticker | 5 short lines | `ANN` in `app/page.tsx` |
| Nav | 5 links | `NAV` in `lib/data.ts` |
| Hero | headline, copy, hero illustration (`public/images/hero.webp`) | `app/page.tsx` |
| Care range (`#care`), Featured (`#shop`), Crew | 4 products: name, slogan, kind, size, description, how to use, good to know, colours | `CARE` in `lib/data.ts` |
| Build a kit (`#quiz`) | pet choice, 6 needs and the product each recommends | `NEEDS` in `lib/data.ts`, logic in `components/Sections.tsx` (`Quiz`) |
| Tap the pup (`#map`) | 6 spots: label, text, pin position (`x`, `y` in %), product shown | `AREAS` in `lib/data.ts` |
| Soft treats (`#treats`) | 6 treats: name, who for, size, filter tags, pouch artwork colours, description | `TREATS` in `lib/data.ts` |
| Cozy milk (`#cozy`) | copy, carton | `app/page.tsx` |
| Kits (`#kits`) | 4 kits and the products inside | `KITS` in `lib/data.ts` |
| Join the pack | email form (no backend yet) | `JoinForm` in `components/Chrome.tsx` |
| Footer | links, legal line | `app/page.tsx` |
| Bag / WhatsApp order | products listed by id; WhatsApp number from `NEXT_PUBLIC_WHATSAPP` | `components/Chrome.tsx`, `components/Store.tsx` |
| SEO | title, description, keywords, JSON-LD | `app/layout.tsx`, `SITE` in `lib/data.ts` |

## Still needed from the client
1. Prices, pack photos and a real checkout (Shopify / Razorpay / WhatsApp only).
2. A WhatsApp business number for orders.
3. Newsletter tool for the Join form.
4. Vet / regulatory review of product claims (HOCl wording, how-to-use, safety notes).
5. Contact details, address and policy pages (privacy, terms, refunds, shipping).
6. Real photography and reviews, if wanted. None are shown today and none should be invented.

## Adding a product
Add an object to `CARE` (or `TREATS`) in `lib/data.ts`; the page, quiz, bag and featured tabs pick it up. Add its illustration to `public/images/` and register it in `IMG`.
