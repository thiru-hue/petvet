@AGENTS.md

# PetVet - notes for Claude

Read [README.md](README.md) first (setup, file map, current state, conventions), then [docs/CONTENT-MAP.md](docs/CONTENT-MAP.md) when changing content.

## Rules for this repo
- The design is the client's reference page "PETVET — Pet care, from eyes to paws". Do not restyle, recolour, rename sections or rewrite copy unless asked. Tokens are in `:root` of `app/globals.css`.
- All styling lives in `app/globals.css` as plain CSS classes (ported verbatim from the reference). No Tailwind, no CSS-in-JS.
- Products, treats, kits, quiz needs and body-map spots are data in `lib/data.ts`. Edit data there, not in the components.
- Mobile first. Check 320 / 360 / 390 px and desktop after any layout change.
- Scroll-reveal = the `.rv` class handled by `RevealObserver` in `components/Chrome.tsx`. Respect `prefers-reduced-motion`.
- Never invent ratings, prices, certifications, testimonials or vet quotes.
- Brand logos are in `public/brand/` (cobalt on light, white on dark). Use `next/image` for photos and keep `alt` text meaningful.
- `npm run build` must pass before committing. `master` auto-deploys to production on Vercel.
- Commit as the GitHub account that belongs to the Vercel team, or deploys are blocked. Do not change git author to work around this.
