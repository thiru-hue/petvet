# Content map: page section -> what it needs -> where in the code

Use this when the client sends content. Every section lives in [app/page.tsx](../app/page.tsx); styles are in [app/globals.css](../app/globals.css) under the class named below. Image sizes are the minimums we asked the client for (full list: [PetVet-Client-Requirements.xlsx](PetVet-Client-Requirements.xlsx)).

**How to add a real image:** every placeholder is a coloured box with `[bracketed]` text. Replace it with `next/image` (`import Image from "next/image"`), keep the same wrapper class so size and rounded corners stay, put files in `public/images/`, give meaningful `alt`, add `priority` only to the hero image, and use `sizes` so mobile loads small files. Videos: `<video muted loop playsInline preload="none" poster=...>` (MP4, under ~6 MB).

| # | Section (id) | Placeholder class | Needs from client | Replace in |
|---|---|---|---|---|
| 1 | Announcement bar | `.announce` | Offer line | `page.tsx` top |
| 1 | Header / brand | `.site-header`, `.brand` | Logo SVG/PNG, favicon | `components/Header.tsx`, `app/icon.svg` |
| 2 | Hero (`.hero`) | `.hero-photo` | Hero photo 2400x1500 (or short MP4), confirm headline | `page.tsx` hero |
| 3 | Categories (`#categories`) | `.cat-card .cat-ph` x4 | 4 photos 800x800, category names | `categories` array in `page.tsx` |
| 4 | Range (`#range`) | `.product-card .pc-media` x4 | Product photos 1200x1200, names, prices, launch dates | `page.tsx` range section (`upcoming` array for cards 2-4) |
| 5 | Featured product (`#shop`) | `.shot`, `.thumb` x3 | 4 product images, video (optional), name/size/price, MRP, subscription %, description, ingredients, directions, shipping, rating/review count | `page.tsx` featured section |
| 6 | Needs explorer (`#needs`) | `.dog-stage`, `.needs-card` | Vet-approved text for 7 areas, product mapping, quiz decision | `lib/content.ts` (`AREAS`), `components/NeedsExplorer.tsx` |
| 7 | Why PetVet | `.why-card`, `.badge-ring` x3 | Third promise, certification badges (PNG 400x400) | `why` array in `page.tsx` |
| 8 | Story (`#story`) | `.founder-photo`, `.story-copy` | Founder photo (1000x1000), name, 60-90 word story | `page.tsx` story section |
| 9 | Promise | `.promise` | Guarantee sentence + real terms | `page.tsx` promise section |
| 10 | Reviews (`#reviews`) | `.rev-card`, `.rev-ph`, `.press` | Real reviews + photos (consent), vet quote + photo, before/after, rating %, press logos | `page.tsx` reviews section |
| 11 | Bundles (`#bundles`) | `.bundle` x4 | Bundle names, contents, price, discount %, photos 1000x800 | `bundles` array in `page.tsx` |
| 12 | Footer (`#contact`) | `.footer` | Email/phone/address, social links, FAQs, newsletter tool, policy pages | `page.tsx` footer |
| 13 | Commerce | buttons `.btn-blue`, `.btn-yellow` | Decision: Shopify / Razorpay / WhatsApp; gateway + shipping details | not built yet |
| 14 | SEO | - | Title/description approval, keywords, analytics access, share image | `app/layout.tsx`, `app/opengraph-image.tsx`, `lib/content.ts` |

## When real prices and ratings exist
- Add `offers` (price, currency `INR`, availability) and, only with real reviews, `aggregateRating` to the Product object in `app/layout.tsx` JSON-LD.
- Add real product, FAQ and policy pages to `app/sitemap.ts`.

## Open decisions (ask the client)
1. How are orders taken (cart + gateway, Shopify, or WhatsApp)?
2. Real multi-step "pet needs" quiz, or keep the interactive dog only?
3. Which newsletter / notify-me tool receives emails?
4. Which bundles launch first (hide the section until ready if none)?
