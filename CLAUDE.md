# Restogo

Five-page B2B marketing site for Restogo, the restaurant-supply arm of Ray's Produce (Salem, OR). Its job is to make Restogo look like the operator Victor actually is, and to route buyers into the existing Ray's Produce ordering app. Not e-commerce.

## Critical Rules

1. Never invent a fact about the client. No testimonials, statistics, certifications, customer names, dates, or credentials unless they appear in `../clients/victor-restogo-context.xml`. Omit the section instead of filling it.
2. Verify deploy config against the actual host before shipping. Confirm every route returns HTTP 200 on a direct request. Ray's shipped with four of five pages 404ing and it went unnoticed for eleven days.
3. The page set is contractual: Home, Products, Service Areas, About, Contact. Never add, rename, or drop a page.
4. Lead with the generic high-volume line. Custom branding gets one soft mention and no more — it is paid phase-2 work and it attracts the low-volume orders Victor wants filtered out.
5. Treat raysproduce.com, the old restogo.com, and the `main` branch as references, never as sources of truth. Service area is Oregon, Washington, and Idaho. Never California.

Every line in this file prevents a specific mistake. Cut any line that does not.

## Stack

- React 19, TypeScript, Vite, Tailwind v4, React Router
- vite-react-ssg — static pre-render; every route emits real HTML
- npm
- Production: Cloudflare Pages. Previews: GitHub Pages.

## Architecture

- Define brand tokens only in the `@theme` block of `src/index.css`. Never hardcode a hex value in a component.
- Brand primary `#0C36C7` and the logo are fixed. The hallmark skill governs structure, craft, and typography — never brand color or logo.
- `src/components/layout/` — nav, footer, page shells
- `src/components/ui/` — reusable primitives
- `src/pages/` — one file per route
- `src/assets/brands/` — logos of companies Restogo supplies packaging to. Never label them partners, sponsors, or manufacturers.
- Give every page its own title, meta description, and Open Graph tags.
- Put a persistent ordering-app CTA in the header on every page, linking both iOS and Android.
- Match Karat Packaging and Monvic in density and restraint. Utilitarian reads as established; over-designed reads as an agency.

## Content

- Write all copy from scratch. Never reuse copy from the old restogo.com or the `main` branch — Victor rejected it.
- Log every unverified claim in `ASSUMPTIONS.md` with its file and line, so client review is a checklist.
- Write eco claims as "compostable, plant-based fiber". Never write "certified" without documentation in hand.
- No prices, no checkout, no logins anywhere on the site.
- Leave contact details bracketed until Victor supplies them: `[phone]`, `[email]`, `[address]`.

## Deployment

- Build with `npm run build`. Output to `dist/`.
- Commit only to the `enrique` branch. Never commit to `main`.
- Set the base path for GitHub Pages preview builds; production builds at the domain root use no base path. Mismatching these is what broke Ray's.
- Ship `public/_redirects` containing `/*  /index.html  200` as a fallback for unmatched routes.
- Never commit files from outside the repo. Client context and revenue data live in the parent folder and stay there.

## Reminders

- Never invent a fact about the client. Omit instead.
- Verify every route returns 200 on the actual host before calling a build done.
- The page set is contractual: Home, Products, Service Areas, About, Contact.
