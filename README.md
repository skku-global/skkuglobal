# skkuglobal.com

Portfolio and company site for **Abdulkabir Adekunle** — full-stack developer, trader, and founder of SKKU Global Technologies Limited.

Live at **[skkuglobal.com](https://skkuglobal.com)**.

## Stack

React 19 · Vite 8 · plain CSS (no framework) · deployed on Vercel.

## Getting started

```bash
npm install
npm run dev      # dev server with HMR
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Structure

```
src/
├── App.jsx                  section order lives here
├── main.jsx
├── components/              one .jsx + matching .css per section
│   ├── Navbar   Hero   Stats   About
│   ├── Projects Skills Trading Vision
│   └── Footer
├── data/projects.js         project cards — edit this to add work
├── hooks/useScrollAnimation.js
└── styles/globals.css       design tokens, shared primitives, breakpoints
```

### Conventions

- **Design tokens** (colors, radii, spacing, `--shell` width) are all in `styles/globals.css` under `:root`. Change them there, not in component files.
- **Shared primitives** — `.btn-primary`, `.btn-secondary`, `.card`, `.tag`, `.section-header`, `.shell` — also live in `globals.css`. Don't redefine them in component CSS; they'll collide across the global cascade.
- **Scroll reveal**: add `animate` to any element, plus `animate-delay-1` … `animate-delay-6` to stagger. The hook falls back to showing everything if `IntersectionObserver` is missing or the user prefers reduced motion.
- **Adding a project**: append to `src/data/projects.js`. `detail` is optional; `liveUrl` and `githubUrl` each render only when present.

## Email capture

The early-access form in `Vision.jsx` posts to `VITE_SUBSCRIBE_ENDPOINT` when it's set:

```bash
# .env.local
VITE_SUBSCRIBE_ENDPOINT=https://your-form-backend.example/subscribe
```

It expects a `POST` of `{ "email": "..." }` and treats any non-2xx as an error. Formspree, Buttondown, ConvertKit, or a small serverless function all work.

**Without that variable set, the form falls back to opening the visitor's mail client** with a prefilled message to `admin@skkuglobal.com`. Nothing breaks, but signups arrive as email rather than into a list — set the endpoint when you want them captured automatically.

## Still to do

- Add a resume PDF to `public/` and link it from the footer.
- Consider retuning `--green` in `globals.css` to match the logo — the mark samples at `#206040` (hsl 150, 50%, 25%) while the site accent `#10b981` is hsl(160, 84%, 39%). Nearly the same hue; the clash is saturation and lightness.

## Social preview

`public/og-image.png` (1200×630) is the share card used by the Open Graph and
Twitter meta tags in `index.html`. Regenerate it if the tagline or brand colour
changes.
