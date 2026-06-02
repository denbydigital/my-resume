# Design

Laura Denby — personal brand and resume site.
Direction: **Ink & Leaf** — deep forest green authority, warm amber warmth, pure white ground.
Mood: "A well-designed architecture monograph — confident serif, one precise green rule, the one warm note."

---

## Colors

### Strategy

Committed. The forest green primary carries identity and authority; amber accent does the emotional work. Background is pure white — the brand lives in the color, not the surface.

### Core Palette (OKLCH)

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(1.000 0.000 0)` | Page background — pure white |
| `--surface` | `oklch(0.970 0.000 0)` | Cards, panels, raised surfaces |
| `--surface-2` | `oklch(0.955 0.008 152)` | Recessed sections — faint green tint |
| `--ink` | `oklch(0.150 0.020 152)` | Body text — near-black with green trace |
| `--muted` | `oklch(0.480 0.012 152)` | Secondary text (≥4.5:1 vs white) |
| `--fg-3` | `oklch(0.580 0.010 152)` | Captions, placeholders |
| `--border` | `oklch(0.880 0.008 152)` | Default hairline |
| `--border-strong` | `oklch(0.800 0.012 152)` | Emphasized divider |

### Primary — Forest Green (hue 152)

| Token | Value | Use |
|---|---|---|
| `--primary-50` | `oklch(0.970 0.015 152)` | Soft tinted fills |
| `--primary-100` | `oklch(0.930 0.030 152)` | Hover fills, backgrounds |
| `--primary-200` | `oklch(0.860 0.055 152)` | Active tints |
| `--primary-300` | `oklch(0.760 0.090 152)` | Decorative |
| `--primary-400` | `oklch(0.640 0.115 152)` | |
| `--primary-500` | `oklch(0.520 0.128 152)` | Mid weight |
| `--primary-600` | `oklch(0.380 0.130 152)` | **Base — buttons, links, logo tile** |
| `--primary-700` | `oklch(0.310 0.115 152)` | Hover state |
| `--primary-800` | `oklch(0.240 0.090 152)` | Press state |
| `--primary-900` | `oklch(0.170 0.060 152)` | Dark sections, ink heading on dark |

Semantic aliases:
```css
--primary:        var(--primary-600);
--primary-hover:  var(--primary-700);
--primary-press:  var(--primary-800);
--primary-soft:   var(--primary-50);
--on-primary:     oklch(1.000 0.000 0);   /* white text on primary fill */
```

### Accent — Amber Gold (hue 55)

| Token | Value | Use |
|---|---|---|
| `--accent-50` | `oklch(0.970 0.020 55)` | Soft fills |
| `--accent-100` | `oklch(0.930 0.045 55)` | Tinted backgrounds |
| `--accent-200` | `oklch(0.870 0.075 55)` | Selection highlight |
| `--accent-400` | `oklch(0.750 0.120 55)` | Decorative |
| `--accent-500` | `oklch(0.680 0.130 55)` | **Base — eyebrows, highlights, rules** |
| `--accent-600` | `oklch(0.580 0.125 55)` | Hover |
| `--accent-700` | `oklch(0.460 0.110 55)` | Press / dark-context |
| `--accent-800` | `oklch(0.340 0.085 55)` | |
| `--accent-900` | `oklch(0.220 0.060 55)` | |

Semantic aliases:
```css
--accent:         var(--accent-500);
--accent-hover:   var(--accent-600);
--accent-soft:    var(--accent-50);
--on-accent:      oklch(1.000 0.000 0);
```

### Neutral — Stone (warm grey, hue 90)

Used for structural elements — borders, dividers, muted containers — not for color identity.

| Token | Value |
|---|---|
| `--stone-50` | `oklch(0.980 0.005 90)` |
| `--stone-100` | `oklch(0.950 0.008 90)` |
| `--stone-200` | `oklch(0.900 0.010 90)` |
| `--stone-300` | `oklch(0.830 0.012 90)` |
| `--stone-500` | `oklch(0.680 0.012 90)` |
| `--stone-600` | `oklch(0.550 0.010 90)` |
| `--stone-700` | `oklch(0.420 0.010 90)` |
| `--stone-900` | `oklch(0.200 0.008 90)` |

### Semantic States

```css
--success:    oklch(0.42 0.130 145);   /* forest-adjacent */
--success-bg: oklch(0.95 0.030 145);
--warning:    oklch(0.58 0.140 65);    /* amber-adjacent */
--warning-bg: oklch(0.95 0.035 65);
--error:      oklch(0.48 0.150 22);    /* warm red */
--error-bg:   oklch(0.96 0.025 22);
--info:       oklch(0.45 0.100 220);   /* cool blue, distinct */
--info-bg:    oklch(0.95 0.025 220);
```

---

## Typography

Three families, each with a distinct role. Cap at three — no additions.

### Families

| Family | Variable | Role |
|---|---|---|
| Newsreader | `--font-serif` | Display, h1, h2, editorial pull quotes |
| Hanken Grotesk | `--font-sans` | Body, UI, h3–h4, nav, buttons |
| IBM Plex Mono | `--font-mono` | Eyebrows/kickers, metadata, code |

Google Fonts import (all weights in use):
```css
@import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Hanken+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
```

### Scale

| Token | Size | Use |
|---|---|---|
| `--fs-display` | `64px` | Hero name, one-off large text |
| `--fs-h1` | `44px` | Page titles |
| `--fs-h2` | `32px` | Section headings |
| `--fs-h3` | `24px` | Sub-headings (sans) |
| `--fs-h4` | `19px` | Card headings, list items |
| `--fs-body-lg` | `19px` | Intro paragraphs |
| `--fs-body` | `16px` | Body copy |
| `--fs-small` | `14px` | UI labels, nav |
| `--fs-caption` | `13px` | Metadata, timestamps |
| `--fs-eyebrow` | `12.5px` | Kickers (uppercase + tracked) |

### Key Rules

- Hero display: `clamp(52px, 11vw, 96px)` — never above 96px (6rem)
- Heading letter-spacing: `-0.02em` (display/h1), `-0.01em` (h2)
- Eyebrow tracking: `0.14em`, uppercase, IBM Plex Mono, `--accent` color
- Body line-height: `1.65` (relaxed editorial read)
- Body measure: max `65ch`
- `text-wrap: balance` on h1–h3; `text-wrap: pretty` on long paragraphs
- Pairing axis: serif (warm, literary) + humanist sans (friendly, legible) — contrast, not competition

---

## Spacing

4px base scale. Layouts are generous — the whitespace is part of the brand signal.

| Token | Value | Common use |
|---|---|---|
| `--sp-1` | `4px` | Icon gap, micro padding |
| `--sp-2` | `8px` | Tight inline spacing |
| `--sp-3` | `12px` | Form element padding |
| `--sp-4` | `16px` | Card padding (compact) |
| `--sp-5` | `24px` | Default component gap |
| `--sp-6` | `32px` | Card padding (generous) |
| `--sp-7` | `48px` | Section sub-divisions |
| `--sp-8` | `64px` | Between major blocks |
| `--sp-9` | `96px` | Section vertical padding |
| `--sp-10` | `128px` | Hero vertical rhythm |

Content max-width: `1120px`. Text measure: `64ch`.

---

## Radii

Friendly but grounded — not bubbly. Consistent rounding is part of the calm.

```css
--r-xs:   6px;
--r-sm:   8px;    /* buttons, inputs */
--r-md:   12px;
--r-lg:   16px;   /* cards */
--r-xl:   22px;
--r-pill: 999px;  /* tags, pills */
```

---

## Shadows

Soft, low, warm-tinted. Elevation suggested, not shouted.

```css
--shadow-xs:    0 1px 2px oklch(0.150 0.020 152 / 0.06);
--shadow-sm:    0 1px 2px oklch(0.150 0.020 152 / 0.05), 0 2px 6px oklch(0.150 0.020 152 / 0.05);
--shadow-md:    0 2px 4px oklch(0.150 0.020 152 / 0.05), 0 8px 20px oklch(0.150 0.020 152 / 0.07);
--shadow-lg:    0 4px 8px oklch(0.150 0.020 152 / 0.05), 0 18px 40px oklch(0.150 0.020 152 / 0.10);
--shadow-focus: 0 0 0 3px oklch(0.380 0.130 152 / 0.30);
```

---

## Motion

Quiet and deliberate. Motion should feel like a calm exhale.

```css
--ease-out:    cubic-bezier(0.22, 0.61, 0.36, 1);
--ease-in-out: cubic-bezier(0.65, 0.05, 0.36, 1);
--dur-fast:    120ms;
--dur:         200ms;
--dur-slow:    360ms;
```

Rules:
- Entrance reveals: `translateY(12–16px)` + opacity, `--ease-out`, staggered 80–120ms per item
- Hover states: `--dur` (200ms)
- Page transitions: `--dur-slow` (360ms)
- No bounce, no elastic, no parallax
- `@media (prefers-reduced-motion: reduce)`: crossfade or instant — never gate content visibility on animation

---

## Components

### Buttons

Three variants, all white text on filled backgrounds (Helmholtz rule: white text on saturated mid-L fills):
- **Primary**: `--primary-600` fill, white text. Hover: `--primary-700`.
- **Accent**: `--accent-500` fill, white text. Hover: `--accent-600`. Use for one CTA per view.
- **Ghost**: transparent, `--primary-700` text, `--border-strong` border. Hover: `--primary-50` bg.

Press state: `scale(0.985)`. Border-radius: `--r-sm` (standard), `--r-pill` (pill CTA).

### Cards

White (`--surface`) on `--bg`, `--r-lg`, 1px `--border`, `--shadow-sm`. On hover: `--shadow-md` + `--border-strong`. No colored left-border accents.

### Navigation

Sticky header: `oklch(1.000 0.000 0 / 0.85)` + `backdrop-filter: blur(12px)`. Border appears on scroll. Active link: `--primary-700` color + 2px `--accent-500` underline rule below.

### Eyebrow / Kicker

IBM Plex Mono, 12.5px, `0.14em` tracking, uppercase, `--accent-500` color. Used sparingly — one per section maximum, and only when the label carries information the heading doesn't.

### Selection

```css
::selection { background: oklch(0.930 0.045 55); color: oklch(0.220 0.060 55); }
```

---

## Iconography

Lucide icons. Stroke `1.75`, `currentColor`, sizes 18/20/24px. Functional, not decorative — always paired with labels. No emoji, no unicode substitutes.
