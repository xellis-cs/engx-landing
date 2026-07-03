# EngX Website — Project Context

Marketing site for **EngX**, a South African-founded consulting firm. Read
`docs/DOMAIN.md` (who EngX is, what it sells, who it sells to) and
`docs/BRAND.md` (visual identity rules) before changing copy or styling —
the theme and domain knowledge in those files are binding, not suggestions.

## What EngX is (one paragraph)

EngX gives businesses fast access to squads of senior specialists — strategy,
process, data & AI, transformation, people, advisory, and forensics — assembled
per engagement and accountable for measurable outcomes. Founding partner
**George Ellis** (ex-Director, Financial Services at Forvis Mazars; ex-Deloitte
Analytics). Tagline: *"Your Partner for Intelligent Transformation."* Motto:
*"Human-Centric. AI-Powered. Outcome-Driven."* Target audience: C-suite and
senior executives at mid-to-large organisations, plus senior specialists who
may join the network. Tone: confident, precise, premium — never salesy.

## Stack & architecture

- **Next.js (App Router) + TypeScript + Tailwind CSS v4**, static export
  (`output: "export"` → `/out`), deployed to **Azure Static Web Apps** via
  GitHub Actions on `main`. Decision record and integration roadmap
  (chatbot, payments, CV-upload portal): `docs/ARCHITECTURE.md`.
- Fonts: Playfair Display (display serif) + Source Sans 3 (UI/body) via
  `next/font/google`. The font variable classes MUST stay on `<html>` in
  `app/layout.tsx` — Tailwind's `@theme` font tokens resolve `var(--font-*)`
  at `:root`, so moving them to `<body>` silently breaks all fonts.
- Design tokens live in `app/globals.css` (`@theme`); change colours there only.
- All page content (services, squad roles, bios, publications, stats) lives in
  `lib/data.ts`; site-wide constants (email, taglines) in `lib/site.ts`.
  Components render from data — don't hardcode copy in components.
- Forms are client-side demos (success state only). Real submission wiring is
  a roadmap item (Azure Functions) — see `docs/ARCHITECTURE.md`.

## Commands

```bash
npm run dev      # local dev server
npm run build    # static export to /out (also the CI build)
npm run lint     # eslint
npx serve out    # preview the production build
```

## Conventions

- Mobile-first; every change must hold up at 390px, 768px, and 1440px.
- British/South African English in user-facing copy (optimisation, programme).
- Currency in ZAR (R) where prices appear.
- Never claim specific client relationships for the *firm*; partner experience
  at named institutions (see `lib/data.ts` `leadership.clients`) is the agreed
  wording — "partner-led engagement experience".
- No fake payment/checkout forms; payment integration is a roadmap item.
- `legacy/` holds the original designer HTML for reference — don't extend it.
- Deploys: PRs get a staging URL from Azure SWA; merge to `main` goes to
  production (see `CONTRIBUTING.md`).
