@AGENTS.md

# PetVet - notes for Claude

Read [README.md](README.md) first (setup, file map, current state, conventions), then [docs/CONTENT-MAP.md](docs/CONTENT-MAP.md) when adding client content.

## Rules for this repo
- The design is approved and final. Do not restyle, recolour, rename sections or rewrite copy unless asked. Match existing tokens in `:root` of `app/globals.css`.
- Everything is styled in `app/globals.css` with plain CSS classes (no Tailwind, no CSS-in-JS). Do not add inline style blocks for layout.
- Mobile first. After any layout change, check 320 / 360 / 390 px and desktop. Mobile dog-tag positions are `.pv-tag[data-id=...]` percentages in the `max-width: 720px` block; no two tags may overlap.
- Scroll-reveal = `data-reveal` attribute handled by `components/RevealObserver.tsx`. Respect `prefers-reduced-motion`.
- Never invent ratings, prices, certifications, testimonials or vet quotes. Leave `[BRACKETED]` placeholders until the client provides real content.
- `npm run build` must pass before committing. `master` auto-deploys to production on Vercel.
- Commit as the GitHub account that belongs to the Vercel team, or deploys are blocked. Do not change git author to work around this.
- Use `next/image` for real images, keep file sizes small, and give every image meaningful `alt` text.
