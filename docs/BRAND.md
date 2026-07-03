# EngX Brand & Design System

The visual identity is derived from the EngX logo (navy "ENG", red X swoosh,
cream ground) and tuned for a premium professional-services audience.
Tokens live in `app/globals.css` under `@theme` — change them there only.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| `navy` | `#1a2540` | Brand core; headings, primary surfaces |
| `navy-deep` | `#101a30` | Dark section backgrounds |
| `navy-night` | `#0b1222` | Hero / footer, deepest ground |
| `navy-soft` | `#24345c` | Glows, hover accents on dark |
| `crimson` | `#9a2939` | Primary CTA, emphasis (use sparingly) |
| `crimson-bright` | `#b03346` | CTA hover, accents on dark |
| `crimson-deep` | `#6e2a35` | Rarely; deep accents |
| `cream` | `#f7f3ee` | Page background |
| `cream-light` | `#fbf8f3` | Header, alternate light sections |
| `sand` | `#eae2d6` | Contact-section tint, subtle fills |
| `ink` | `#1f1f1d` | Body text on light |
| `body` | `#4c4a45` | Secondary text on light |
| `tan` | `#b09372` | Numbering, quiet metadata on light |
| `gold` | `#c9a86a` | Accent on dark (eyebrows, highlights) |

Rules: crimson is for action and emphasis only — if everything is red,
nothing is. On dark surfaces use gold, not crimson, for fine text accents
(contrast). Alternate light (cream) and dark (navy) sections for rhythm.

## Typography

- **Display / headings:** Playfair Display (500–700, italic for the one
  emphasised phrase per heading — house style: `<em>` in crimson on light,
  gold on dark).
- **UI / body:** Source Sans 3 (400/600/700).
- Fluid sizes via utilities in `globals.css`: `.text-display`, `.text-headline`,
  `.text-title`. Eyebrow labels: `.eyebrow` (12px, 0.22em tracking, uppercase,
  bold).
- British/South African spelling in all copy.

## Voice & tone

Confident, senior, precise. Short declarative sentences. Outcomes over
adjectives ("accountable for measurable results", not "world-class solutions").
No exclamation marks, no buzzword chains, no "synergy". Forensics content is
sober and discreet.

## Layout & components

- Max content width `max-w-7xl`; horizontal padding `px-5 sm:px-8`.
- Section rhythm via `.section-pad` (clamp 4–7.5rem vertical).
- Editorial hairlines (`.rule-top`) + two-digit serif numbering (`01`…) for
  list grids — this replaces icon soup.
- Corners: `rounded-sm` (2px) — sharp and editorial, never pill cards.
  Pills are reserved for filter chips and count badges.
- Hover: subtle lift (`-translate-y-0.5`/`-1`) + soft shadow; 200–300ms with
  `--ease-out-soft`.
- Scroll reveal: wrap in `components/Reveal.tsx` (fade-up, no JS = visible).
- Imagery: NO stock photography, no hotlinked images. Atmosphere comes from
  gradients, fine grids, and the abstract X-sweep motif (see `Hero.tsx`,
  `Insights.tsx` book cover).

## Accessibility

- Respect `prefers-reduced-motion` (already global in `globals.css`).
- Interactive targets ≥ 40px on touch; labelled inputs (`sr-only` if hidden);
  `aria-expanded`/`aria-selected` on disclosure/tab controls.
- Maintain WCAG AA contrast: cream-on-navy and ink-on-cream pass; avoid
  tan/gold for long text.
