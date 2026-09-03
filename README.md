# World Smiles Prosthodontics — worldsmilesnyc.com

Website for Dr. Lior Furman, DMD (World Smiles Prosthodontics, Sheepshead Bay, Brooklyn).
Vite + React 19 + TypeScript + Tailwind CSS 4, client-side routing with React Router, deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build / typecheck

```bash
npm run build      # production build to dist/
npm run typecheck  # tsc --noEmit
```

## Structure

- `src/components/Header.tsx` — site nav (canonical version from the home page, includes the Patient Resources dropdown `pt-2` hover fix)
- `src/components/Footer.tsx` — site footer
- `src/components/Layout.tsx` — Header + page + Footer + mobile sticky call/book bar
- `src/pages/*.tsx` — one file per page
- `src/lib/seo.ts` + `src/lib/pageMeta.ts` — per-page `<title>`, meta description, and JSON-LD
- `src/assets/` — images (cases, office, services, landing)
- `vercel.json` — SPA rewrite so `/services`, `/about`, etc. load directly

## Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/about` | About Dr. Furman |
| `/before-after` | Before & After |
| `/reviews` | Reviews |
| `/second-opinion` | Second Opinion |
| `/contact` | Contact |
| `/landing` | Paid-traffic landing page (standalone, no site header/footer) |
| `/patient-forms` | Patient Forms |
| `/patient-instructions` | Patient Instructions |
| `/insurance` | Insurance |
| `/technology` | Technology |
| `/faq` | FAQ |
| `/blog` | Journal |
| `/accessibility`, `/privacy`, `/terms` | Legal |

## Design system

Colors: `#F7F3EC` (bg), `#0A0A0A` (dark), `#1B1B1B` (text), `#C9A961` (gold), `#A8893F` (gold hover).
Fonts: Fraunces (serif headlines), Inter (sans body), loaded from Google Fonts in `index.html`.

## Before launch

- Contact form (`src/pages/ContactPage.tsx`, `handleFormSubmit`) is a simulated submit. Wire it to Formspree/Web3Forms/etc.
- Blog article links point to `/blog/<slug>`; those articles are not built yet and currently show the journal index.
- Images in `src/assets/services` and `src/assets/office` are 3–9 MB each and should be compressed.

## Source

Generated from 17 Google AI Studio projects by `tools/merge.mjs` (kept for reference; not needed at runtime).
