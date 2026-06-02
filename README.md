# Avery Sloane — Brand System

> **A note on the name.** `Avery Sloane` is a **placeholder** for the brand owner's
> real name. It stands in for an independent software-industry consultant with a
> *corporate-but-friendly* personal brand. Swap the name, tagline, and the `AS`
> monogram for the real identity — everything is centralized so this is a quick
> find-and-replace. See **Caveats** at the bottom.

This repository is a **design system**: the typography, color, spacing, voice,
assets, and reusable UI components that let a design agent (or a human) produce
on-brand work for Avery Sloane — websites, decks, one-pagers, social, email.

---

## Who this brand is for

Avery Sloane is an **independent software consultant** — strategy, architecture,
and delivery for growing engineering teams. The brand has to do two things at
once, which is the whole design challenge:

- **Earn trust like a firm** — feel established, credible, and calm. This is
  someone you'd hand a six-figure engagement to.
- **Feel like a person** — warm, approachable, a little playful. Not a faceless
  consultancy; a human who is genuinely easy to work with.

The five traits chosen for the brand, in priority order:
**Trustworthy & established · Warm & approachable · Calm & understated ·
Modern & technical · with playful touches.**

The system resolves this tension with **deep, grounded color** (Pine green ink),
**warm paper neutrals** (Stone), a **single human accent** (Clay terracotta), and
a **humanist serif + sans pairing** that reads as editorial and credible without
being stiff.

### Primary surface
The first and most important deliverable is the **personal website / landing
page**. The UI kit in `ui_kits/website/` is a full, interactive recreation of
that site (hero, services, case studies, testimonial, contact). Build new
marketing pages from those components.

---

## Sources

This system was **created from scratch** for a personal brand — there was no
existing codebase, Figma file, or brand guide to import. All decisions
(palette, type pairing, voice, components) are original to this system. If you
later have real assets — a headshot, a finalized name, client logos, a Figma —
drop them in and update the relevant files noted in the index.

---

## CONTENT FUNDAMENTALS — how Avery Sloane writes

The voice is **the warm-but-credible expert**: plain-spoken, confident, never
hypey. It sounds like a senior engineer who has also sat in the boardroom.

**Person & address.** Write in **first person singular** ("I work with…",
"Here's how I think about it"), and address the reader as **"you"** / **"your
team"**. It's a personal brand — never the royal "we" of a faceless agency. The
occasional "we" only appears meaning *you and me, together on the engagement*.

**Tone.** Calm, direct, generous. Lead with the client's problem, not Avery's
résumé. Short declarative sentences. A dry, understated wit is welcome; jokes
and hype are not.

**Casing.** **Sentence case everywhere** — headlines, buttons, nav, section
titles. No Title Case Marketing Headlines. The only uppercase is the **mono
eyebrow/kicker** (e.g. `WHAT I DO`, `CASE STUDY`), used sparingly as a label.

**Sentence length & rhythm.** Vary it. A punchy opener, then a longer
explanatory line. Em dashes for asides — used, but not overused.

**Numbers & claims.** Specific and honest. "Cut deploy time from 40 min to 6"
beats "dramatically faster." Never invent stats. If there's no number, describe
the outcome plainly.

**Emoji & exclamation.** **No emoji.** Exclamation points are rationed to ~zero.
Warmth comes from word choice and rhythm, not punctuation.

**Jargon.** Technical when talking to engineers, plain when talking to founders.
Define-by-context rather than buzzword-stacking. Avoid "synergy," "leverage" (as
a verb), "best-in-class," "10x."

**Example copy in-voice:**

- Hero: *"I help growing engineering teams ship the right thing, faster."*
- Sub: *"Strategy, architecture, and hands-on delivery — for the messy middle
  between a working prototype and a platform you can bet the company on."*
- Service card: *"Architecture reviews — A clear-eyed read on what's holding
  your system back, and a sequenced plan to fix it without stopping the line."*
- CTA: *"Book an intro call"* · *"See how I work"*
- Testimonial framing: *"What it's like to work together"*
- About opener: *"Fifteen years building and rescuing software platforms.
  These days I help teams skip the mistakes I already made."*

---

## VISUAL FOUNDATIONS

**Overall feel.** Warm editorial calm. Think a well-made print report or a
boutique studio site — generous whitespace, confident serif headlines, a single
warm accent doing the emotional work, everything else quiet.

**Color.** A three-part system (full tokens in `colors_and_type.css`):
- **Stone** — warm neutral scale, the backbone. Backgrounds are warm off-white
  (`--stone-50 #FBF9F5`), text is warm near-black (`--stone-900 #211E18`). Nothing
  is pure white or pure black; everything is slightly warm.
- **Pine** — the primary. A deep evergreen (`--pine-600 #185849`) used for
  primary buttons, links, dark "ink" sections, and the logo tile. Reads
  established, calm, trustworthy.
- **Clay** — the single accent (`--clay-500 #BD5B3D`), a warm terracotta. Used
  for the eyebrow labels, small highlights, underlines, and the destination node
  in the mark. This is where the *warmth and playfulness* live. Use it
  sparingly — one or two clay moments per view.
- **Semantic** colors (success/warning/error/info) are hue-tuned to sit beside
  Pine and Clay rather than screaming primary red/green.

**Type.** A humanist pairing (see `colors_and_type.css`):
- **Newsreader** (serif) — display and headlines. Warm, literary, a touch of
  personality in its italics. Weight 500 for headers, 400 italic for editorial
  emphasis.
- **Hanken Grotesk** (sans) — all body, UI, and sub-headings. Humanist, friendly,
  highly legible. Weights 400/500/600/700.
- **IBM Plex Mono** — eyebrows/kickers, metadata labels, and code. The
  "modern & technical" signal. Always uppercase + letter-spaced when used as a
  label.
- Headlines use negative tracking (`-0.02em`) and tight leading; body runs
  relaxed (1.65) for an easy editorial read.

**Spacing.** 4px base scale (`--sp-1`…`--sp-10`). Layouts are generous — sections
breathe with 96–128px vertical rhythm on the web. Content max-width ~1100–1200px;
text measure capped ~68ch for readability.

**Backgrounds.** Mostly flat warm paper. **No heavy gradients.** Permitted
texture is *very* subtle: an optional faint warm grain or a hairline 1px rule to
separate sections. Dark sections use solid Pine-800/900 or Stone-900, never a
gradient wash. Imagery (when present) is warm-toned, natural light, slightly
muted — never cold, never high-saturation stock.

**Borders & dividers.** Hairlines in `--stone-200/300`. Borders do a lot of the
structural work so shadows can stay soft. 1px, never heavy.

**Corner radii.** Friendly but grounded — not bubbly. Cards `--r-lg 16px`,
buttons/inputs `--r-sm 8px`, tags/pills full. Consistent rounding is part of the
calm.

**Shadows / elevation.** Soft, low, and **warm-tinted** (built from warm ink
`rgba(33,30,24,…)`, not pure black). Three steps: `--shadow-sm/md/lg`. Cards rest
on `sm`–`md`; nothing floats dramatically. Elevation is suggested, not shouted.

**Hover states.** Buttons darken one step (Pine-600 → Pine-700); links gain a
clay underline or shift to Pine-700; cards lift from `shadow-sm` to `shadow-md`
and the border darkens one step. Subtle.

**Press states.** A gentle `scale(0.985)` plus a darker step (Pine-800). No big
bounces.

**Focus.** Always visible: a 3px Pine focus ring (`--shadow-focus`) — calm but
accessible.

**Motion.** Quiet and quick. `--dur 200ms` with `--ease-out` for most things;
`--dur-slow 360ms` for larger reveals. Fades and small (4–8px) translate-ups on
scroll. **No bounces, no spin, no parallax theatrics.** Motion should feel like
a calm exhale.

**Transparency & blur.** Used rarely — a sticky header may sit on
`rgba(251,249,245,0.8)` + `backdrop-filter: blur(10px)`. Otherwise surfaces are
opaque.

**Cards.** White (`--surface`) on warm-paper bg, `--r-lg` corners, `1px
--border`, `--shadow-sm`. On hover: `--shadow-md` + `--border-strong`. No
colored left-border accents (that pattern is banned here). Structure comes from
the hairline + soft shadow.

---

## ICONOGRAPHY

- **Icon set: [Lucide](https://lucide.dev).** Clean, open-source line icons with
  a consistent **1.5–2px stroke** and rounded caps/joins — exactly the calm,
  humanist, modern-technical register the brand wants. Loaded from CDN; see the
  UI kit `index.html` and `preview/` cards for the include.
  - Default stroke `1.75`, `currentColor`, sizes 18/20/24.
  - Icons are **functional, not decorative** — paired with labels, never used as
    confetti. Tint with `--fg-2` (default), `--primary` (active), or `--accent`
    (one highlight at a time).
- **No emoji.** Ever. The brand expresses warmth through type and color, not
  emoji.
- **No unicode glyph hacks** as icons (no `✓`/`→` substituting for real icons),
  except the typographic em dash and the occasional `→` inside running prose.
- **The brand mark** (`assets/mark.svg`, `assets/mark-mono.svg`) is a Pine
  rounded-square tile holding an upward "route" line that ends in a Clay
  destination node — *strategy → delivery → arrival*. `mark-mono.svg` uses
  `currentColor` for single-color / inverted contexts. The full logo lockup
  (mark + "Avery Sloane" wordmark in Newsreader) is built as a reusable
  component in the website UI kit (`Logo.jsx`) so it always renders in-font.

---

## Index — what's in this system

| Path | What it is |
|---|---|
| `README.md` | This file — context, voice, visual foundations, iconography. |
| `colors_and_type.css` | All design tokens: color scales, semantic roles, type classes, spacing, radii, shadows, motion. **Import this first.** |
| `assets/mark.svg` | Brand symbol (Pine tile, full color). |
| `assets/mark-mono.svg` | Brand symbol, single-color (`currentColor`) for inversion. |
| `preview/` | Small specimen cards that populate the Design System tab (type, color, spacing, components, brand). |
| `ui_kits/website/` | The personal landing-page UI kit — interactive recreation + reusable JSX components. Start here for any new page. |
| `SKILL.md` | Lets this system run as a downloadable Agent Skill in Claude Code. |
| `fonts/` | (Optional) self-hosted font files for offline builds. Currently fonts load from Google Fonts via `@import`. |

**Quickstart:** import `colors_and_type.css`, pull components from
`ui_kits/website/`, keep copy in the voice above, use Lucide for icons, and let
the warm paper + Pine + one Clay accent do the work.

---

## Caveats / help me make this perfect

- **The name is a placeholder.** `Avery Sloane`, the `AS` monogram, and all
  sample copy are stand-ins. Give me the real name + tagline and I'll thread it
  through every file and the mark.
- **Fonts load from Google Fonts CDN** (Newsreader, Hanken Grotesk, IBM Plex
  Mono) — all free and self-hostable. Say the word if you want them vendored
  into `fonts/` for a fully offline package.
- **Color is one committed direction** (Pine + Clay on Stone). You asked to
  *explore a few options* — I've included alternate accent pairings as a preview
  card (`preview/color-explore.html`). Tell me which way to lean and I'll make
  it the system default.
- **No real photography yet.** Imagery slots in the UI kit use neutral
  placeholders. Send a headshot + any client logos and I'll wire them in.
