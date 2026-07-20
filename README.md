# Restogo

Marketing website for Restogo (a division of Ray's Produce Inc.) — restaurant
packaging: cups, containers, boxes, and disposable cutlery.

## Stack

- React + Vite
- React Router
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

## Pages

- `/` — Home
- `/about` — About
- `/products` — Products (Cups, Containers, Disposable Cutlery + customization)
- `/our-process` — Our Process (Perfect Design + Sustainability)
- `/contact` — Contact / quote request form (UI only — not wired to a backend yet)

## Notes

- Brand palette and type derived from the logo + original proposal — see
  `style.txt` and `src/index.css` (`@theme` block).
- Placeholder content: company narrative copy on About, product category
  images, and contact details (`[phone number]`, `[email address]`,
  `[service area]`) should be replaced with real content before launch.
- The Contact form collects input locally but does not submit anywhere yet —
  needs a form service (e.g. Formspree) or backend endpoint wired up.
