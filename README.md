# PetVet website

Marketing and shop-front site for **PetVet** (HOCl pet care, soft treats and cozy milk for dogs and cats). Built with Next.js (App Router), React and TypeScript. It is one long, mostly static home page, mobile-first, built from the client's reference page "PETVET — Pet care, from eyes to paws".

- **Live:** https://petvet-eta.vercel.app/
- **Repo:** https://github.com/thiru-hue/petvet (`master` auto-deploys to Vercel, team `zzxc`)

## Start here (5 minutes)

```bash
git clone https://github.com/thiru-hue/petvet.git
cd petvet
npm install
npm run dev        # http://localhost:3000
npm run build      # run before pushing
```

Node 20+. No env vars are required. Optional: `NEXT_PUBLIC_SITE_URL` (live domain for canonical/sitemap) and `NEXT_PUBLIC_WHATSAPP` (order number for the bag's WhatsApp button, digits only, e.g. `919876543210`).

> This project uses a very new Next.js version with breaking changes. Read [AGENTS.md](AGENTS.md) and `node_modules/next/dist/docs/` before framework-level changes.

## Page sections (top to bottom)

Announcement ticker → nav (+bag) → hero → marquee → **Care range** (flip cards) → **Build a kit** quiz → **Featured product** → **What's HOCl** → **Tap the pup** body map → **Soft treats** → **Cozy milk** → **Kits** → **Crew** → **Join the pack** → footer. A bag drawer and a mobile bottom bar sit on top.

## Where things live

| File | What it is |
|---|---|
| [app/page.tsx](app/page.tsx) | The page: every section in order (server component) |
| [app/globals.css](app/globals.css) | **All styling**, ported from the reference. Tokens in `:root`, one block per section, then tablet (`1000px`) and phone (`720px`) media queries |
| [app/layout.tsx](app/layout.tsx) | Fonts (Lilita One, Oswald, DM Sans, Caveat), SEO metadata, JSON-LD |
| [app/sitemap.ts](app/sitemap.ts), [app/robots.ts](app/robots.ts), [app/opengraph-image.tsx](app/opengraph-image.tsx), [app/icon.svg](app/icon.svg) | SEO files and favicon (brand app icon) |
| [lib/data.ts](lib/data.ts) | **Content data**: 4 care products, 6 treats, 4 kits, quiz needs, body-map spots, nav, image list, site URL |
| [components/Store.tsx](components/Store.tsx) | Client state: bag (saved in localStorage), featured product, toast |
| [components/Chrome.tsx](components/Chrome.tsx) | Header, mobile bar, bag drawer, scroll-reveal, join form |
| [components/Sections.tsx](components/Sections.tsx) | Interactive sections: flip packs, quiz, featured, body map, treats, crew |
| [components/ui.tsx](components/ui.tsx) | Small shared pieces: pack face, add-to-bag button, swatches |
| `public/images/`, `public/brand/` | Illustrations (from the reference page) and the official logo SVGs |
| [docs/CONTENT-MAP.md](docs/CONTENT-MAP.md) | What each section needs from the client and where to change it |

## Current state

- Design, interactions and mobile layout are implemented.
- **Not yet real:** prices (the bag says "prices coming at launch"), checkout (orders go via WhatsApp / copy order), the email box (shows a thank-you only), Contact (jumps to the join form), policy pages. All product copy comes from the reference and should be confirmed by the client and a vet.
- The WhatsApp number is empty until `NEXT_PUBLIC_WHATSAPP` is set.
- The client requirements sheet in `docs/` was written for an earlier design and is out of date.

## Conventions

1. Match the reference exactly (colours, fonts, spacing, copy). Navy `#173798`, red `#B3311E`, cream `#FBF5E9`, ink `#141414`.
2. Mobile first: check 320, 360, 390 px and desktop after layout changes.
3. Edit content in `lib/data.ts`; keep components generic.
4. No invented claims, prices, ratings or testimonials.
5. `npm run build` before pushing. Pushing to `master` deploys to production.

## Deploying

`master` is connected to Vercel (team `zzxc`); every push deploys. Deploys from a Git author who is not a member of the Vercel team are blocked, so commit with the GitHub account that is on the team.
