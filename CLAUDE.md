# Laura Denby — Resume & Brand Site

Personal website and resume for Laura Denby, IT Business Analyst based in Sydney.

## Design Context

See [PRODUCT.md](PRODUCT.md) for brand strategy, audience, and design principles.
See [DESIGN.md](DESIGN.md) for the full visual system (colors, typography, spacing, components).

**Direction: Ink & Leaf** — deep forest green (OKLCH hue 152) primary, warm amber gold (hue 55) accent, pure white background. Typography: Newsreader serif (display/headings) + Hanken Grotesk sans (body/UI) + IBM Plex Mono (eyebrows/code).

Token source of truth: [`resume/styles/tokens.css`](resume/styles/tokens.css). Always use CSS custom properties — never hardcode hex or rgb values.

## Site Structure

- `resume/index.html` — cover/landing page
- `resume/about.html`, `experience.html`, `credentials.html`, `portfolio.html`, `ai.html`, `contact.html`, `htc.html` — inner pages
- `resume/styles/tokens.css` — all design tokens
- `resume/styles/site.css` — shared layout and component styles
- `resume/site.js` — shared nav/scroll behaviour
- `preview/` — design system specimen cards
- `ui_kits/website/` — JSX component library

## Key Rules

- Name is **Laura Denby** (placeholder "Avery Sloane" in older files — update on sight)
- OKLCH throughout — no hex, no rgba with legacy values
- Eyebrow kickers are amber (`--accent`) — use sparingly, one per section max
- No colored left-border card accents, no gradient text, no cream/warm-tinted body background
- Icons: Lucide only, stroke 1.75, always paired with labels
