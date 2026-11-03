# PetVet website

Marketing and shop-front site for **PetVet** (health and care products for dogs and cats). Built with Next.js (App Router), React and TypeScript. It is one long, mostly static home page, designed mobile-first.

- **Live:** https://petvet-eta.vercel.app/
- **Repo:** https://github.com/thiru-hue/petvet (`master` auto-deploys to Vercel, team `zzxc`)

## Start here (5 minutes)

```bash
git clone https://github.com/thiru-hue/petvet.git
cd petvet
npm install
npm run dev        # http://localhost:3000
npm run build      # production build - run this before pushing
```

Requires Node 20+. No environment variables are needed. Optionally set `NEXT_PUBLIC_SITE_URL` (the live domain, used for canonical URLs, sitemap and social previews).

> This project uses a very new Next.js version with breaking changes. Read [AGENTS.md](AGENTS.md) and the docs in `node_modules/next/dist/docs/` before changing framework-level code.

## Where things live

| File | What it is |
|---|---|
| [app/page.tsx](app/page.tsx) | The whole home page, one section after another (hero, categories, range, featured product, needs explorer, why, story, promise, reviews, bundles, footer) |
| [app/globals.css](app/globals.css) | **All styling.** Colour tokens at the top (`:root`), one block per section, then tablet (`max-width: 960px`) and phone (`max-width: 720px`) blocks, then reduced-motion |
| [app/layout.tsx](app/layout.tsx) | Fonts (Bricolage Grotesque + Figtree), site-wide SEO metadata, JSON-LD structured data |
| [app/sitemap.ts](app/sitemap.ts), [app/robots.ts](app/robots.ts) | Generated `/sitemap.xml` and `/robots.txt` |
| [app/opengraph-image.tsx](app/opengraph-image.tsx), [app/icon.svg](app/icon.svg) | Auto-generated social share image and favicon |
| [components/Header.tsx](components/Header.tsx) | Sticky nav + mobile hamburger menu (client component) |
| [components/NeedsExplorer.tsx](components/NeedsExplorer.tsx) | The interactive dog ("Find out what your pet needs") |
| [components/RevealObserver.tsx](components/RevealObserver.tsx) | Scroll-reveal animation: adds `.in` to any element with `data-reveal` |
| [lib/content.ts](lib/content.ts) | Site name/URL, nav links, and the 7 dog areas (text, available/coming-soon, tag positions) |
| [docs/CONTENT-MAP.md](docs/CONTENT-MAP.md) | Section-by-section map: what each part of the page needs and where to put it in code |
| [docs/PetVet-Client-Requirements.xlsx](docs/PetVet-Client-Requirements.xlsx) | The checklist we send the client (images, videos, copy, prices, accounts) |

## Current state

- The design is final and implemented. **All photos, prices, founder story, reviews, badges, press names, bundles and the offer bar are still placeholders** (grey boxes and `[BRACKETED]` text). They are waiting on client content - see the checklist in `docs/`.
- **Not wired up yet** (buttons exist but do nothing): Add to cart / Buy now, Notify me, newsletter Subscribe, search, review arrows, "Take the quiz" (just scrolls to the dog section), thumbnail gallery, accordion rows. The commerce choice (Shopify, Razorpay, WhatsApp orders) is an open client decision.
- Footer links FAQs and Contact currently point to the footer itself; policy pages (privacy, terms, refund, shipping) do not exist yet.
- SEO is set up (metadata, Open Graph/Twitter, JSON-LD, sitemap, robots, canonical). The Product JSON-LD has no price or rating on purpose - add `offers` and `aggregateRating` only once they are real.

## Conventions to keep

1. **Match the approved design exactly** (colours, fonts, spacing, copy). Palette: navy `#12285F`, blue `#1B3A8C`, yellow `#FFD24A`, sky `#8EC5FF`, cream `#FBF4CF`, soft `#F6F8FD`. Tokens are in `:root` in `globals.css`.
2. **Mobile first.** Check every change at 320, 360, 390 px and desktop. The dog tags on mobile are positioned by percentage in the `@media (max-width: 720px)` block (`.pv-tag[data-id=...]`); desktop uses the positions in `lib/content.ts`. Tags must never overlap each other.
3. **Animations** use `data-reveal` (+ optional `style={{"--d": "120ms"}}` for stagger). They are disabled under `prefers-reduced-motion`. Keep it that way.
4. **Do not invent claims.** No fake ratings, certifications, prices or testimonials. Leave placeholders until the client supplies real ones.
5. Run `npm run build` before pushing. Pushing to `master` deploys to production.

## Deploying

`master` is connected to Vercel (team `zzxc`): every push deploys. Deployments from a Git author who is not a member of the Vercel team are blocked, so commit with the GitHub account that is on the team.
