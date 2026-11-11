# Amozecks Projects — Website Demo

A fast, accessible, single-page rebuild of [amozecksprojects.co.za](https://www.amozecksprojects.co.za/), made with Next.js 16, TypeScript and Tailwind CSS 4. All wording, photos, logos and contact details are the **real content of the live site** — nothing is invented.

> Demo built by [Business Hustle](https://businesshustle.co.za)

## Why this demo

The original WordPress/Elementor site is heavy and has several broken or failing pieces. This demo fixes every issue surfaced in its Lighthouse report, feature-for-feature and more:

| Issue on the original | Fix in this demo |
| --- | --- |
| ~6.2 s LCP resource-load delay (ken-burns slideshow + full-page preloader) | Static, preloaded hero image; no preloader; no slideshow |
| **2,211 KiB** of image bloat (2000px JPEGs shown at 353px, PNG logos) | All images resized & converted to WebP — **~1.1 MB for the entire page, all 15 assets** |
| Images without explicit `width`/`height` (layout shift) | `next/image` static imports — dimensions are intrinsic, zero CLS |
| 3 Google font families × every weight (~94 KB + render delay) | 2 self-hosted families, 6 latin-only woff2 files (~112 KB), loaded via `next/font/local` with `display: swap` |
| Unminified plugin JavaScript (PowerPack etc.) | Production Next.js build — minified by default |
| **No HSTS header** | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` + `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy` |
| `llms.txt` broken / timed out | Valid [llms.txt](public/llms.txt) served at `/llms.txt`, plus `robots.txt`, `sitemap.xml` and `GeneralContractor` JSON-LD |
| Broken stat counters (“0 Finished Projects”) | Honest, verifiable badges: 100% Black Owned · 6 core services · 2 provinces |
| Empty Projects grid (filters with zero items) | Photo gallery built from the site’s own photography |
| Careers page with no listings and no way to apply | Honest careers card — email/WhatsApp a CV using the real contact details |
| Typos (“5;00 PM”, “Copy right”) | Copy-proofed throughout |
| Contact form that only works with JS + plugins | WhatsApp deep links, `tel:` and `mailto:` — works everywhere, zero backend |

## The smart feature: Instant Estimate → WhatsApp

A quote calculator (`#calculator`) built for how South African customers actually buy construction:

1. Pick a service (Building, Formwork, Renovations, Plumbing, Civil Works, Property Developers)
2. Enter size (with one-tap presets), finish level, timeline and area
3. See an **indicative ZAR range instantly** (computed live, announced via `aria-live`)
4. **“Send This Estimate on WhatsApp”** opens `wa.me/27822916151` with a structured message (service, size, finish, timeline, area, estimate, name, cell) so the office gets a ready-to-quote enquiry
5. Optional **Copy Summary** (with toast feedback) and Call buttons

- Service cards anywhere on the page preselect that service in the calculator and scroll to it.
- Rates are **indicative market ranges for planning only** — clearly labelled in the UI. To tune them for the business, edit the single `RATE_TABLE` in [`src/lib/quote.ts`](src/lib/quote.ts).
- A floating WhatsApp button is always one tap away.

## Quick start

```bash
npm install     # or: bun install / pnpm install
npm run dev     # http://localhost:3000
npm run build && npm start   # production
npm run lint
```

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # fonts, metadata, header/footer, skip link
│   ├── page.tsx          # one-page composition + JSON-LD
│   ├── robots.ts         # /robots.txt
│   ├── sitemap.ts        # /sitemap.xml
│   ├── globals.css       # brand theme (green #299A00 from the logo), Tailwind 4
│   └── icon.png          # favicon from the real site icon
├── assets/
│   ├── images/           # real photos/logos, optimised to WebP
│   └── fonts/            # self-hosted Poppins + Roboto (latin)
├── components/site/      # hero, about, services, gallery, calculator, contact…
├── components/ui/        # shadcn/ui toast (the only primitives used)
├── hooks/use-toast.ts
└── lib/
    ├── site-data.ts      # ALL real content in one place
    ├── quote.ts          # estimate engine + RATE_TABLE + WhatsApp message builder
    └── quote-store.ts    # zustand store for service preselection
public/
├── llms.txt              # LLM/agent-readable business summary
└── og-image.jpg          # social share card
```

## Customising

- **Text, contacts, services, gallery** → [`src/lib/site-data.ts`](src/lib/site-data.ts)
- **Estimate rates, presets, areas** → `RATE_TABLE` in [`src/lib/quote.ts`](src/lib/quote.ts)
- **WhatsApp number & greeting** → `COMPANY` in `site-data.ts` (currently the live site’s 082 291 6151 / +27 82 291 6151)
- **Brand colours** → the `--color-brand-*` scale in `globals.css`

## Deployment

Any Node host works (`npm run build && npm start`). On Vercel, deploy as-is — the security headers in `next.config.ts` (including HSTS) are applied automatically. The metadata uses `https://www.amozecksprojects.co.za` as its canonical base; update `SITE_URL` in `layout.tsx`/`page.tsx` when the demo gets its own domain.

## Credits

- Content, photography and logos © [Amozecks Projects](https://www.amozecksprojects.co.za/) — used here for demonstration purposes at the owner’s request.
- Original site design by Brandway SA.
- Demo built by [Business Hustle](https://businesshustle.co.za).
