# Architecture

## Decision record: framework

**Date:** July 2026 · **Status:** adopted

**Context.** The site began as a single hand-written 383KB HTML file. The
business roadmap includes a chatbot, "Build Your Squad" workflows, payment
integration for publications, and CV-upload automation with a partner review
portal — beyond what a hand-maintained HTML page can grow into.

**Options considered.**

| Option | Verdict |
| --- | --- |
| Keep single static HTML | Rejected — no componentisation, no type safety, every feature is manual DOM code; already at its limits. |
| Astro | Strong for pure content sites (least JS shipped), but weaker fit for the app-like roadmap (auth'd portal, payments, chat), and Azure Static Web Apps has no first-class Astro pipeline. |
| **Next.js (static export)** | **Adopted.** First-class Azure SWA support, React ecosystem for every roadmap feature (chat SDKs, payment SDKs, form/upload libraries), TypeScript throughout, and a no-rewrite growth path from static export → hybrid SSR if ever needed. |

**Consequences.** The marketing site stays fully static (fast, CDN-served,
nothing to operate). Interactivity is client components. Server-side needs are
met by Azure Functions added alongside (SWA "managed API"), not by rewriting.

## Current shape

```
app/            Next.js App Router (layout, page, globals.css with @theme tokens)
components/     Section components; interactive ones are "use client"
lib/            data.ts (all page content) · site.ts (site constants)
public/         logo.png, world-map.png (extracted from the legacy page)
legacy/         Original designer HTML, reference only
docs/           This file, BRAND.md, DOMAIN.md
```

- `next.config.ts`: `output: "export"` → build emits static site to `/out`.
- `staticwebapp.config.json`: SWA routing, caching, security headers.
- `.github/workflows/`: Azure SWA CI/CD — Oryx runs `npm run build`,
  publishes `/out`. PRs get isolated staging URLs; `main` → production.
- Fonts are self-hosted at build time via `next/font/google`.
  ⚠️ Font variable classes must remain on `<html>` (see CLAUDE.md).

## Integration roadmap

Each feature slots in without changing the architecture:

1. **Form submissions (first).** Add an `api/` folder of Azure Functions
   (SWA managed API) receiving contact / squad / network forms; store to
   Azure Table Storage or forward to email (Communication Services). Swap the
   demo `onSubmit` handlers in `Contact.tsx` / `SquadBuilder.tsx` for `fetch`.
2. **CV upload + partner review.** Function issues a SAS URL for direct
   upload to **Azure Blob Storage** (private container); metadata to a table.
   Partner review page protected by **SWA built-in auth** (Entra ID) with a
   `partner` role. POPIA: consent checkbox + retention policy before launch.
3. **Payments for publications.** ZAR-first gateway — PayFast or Yoco
   (Stripe if international cards dominate). Checkout via gateway-hosted page
   from a Function-created session; webhook Function fulfils (emails the
   PDF/EPUB link). No card data ever touches the site.
4. **Chatbot.** Client widget backed by a Function calling the Claude API
   (grounded on `docs/DOMAIN.md` + site content), with handoff to the contact
   form. Rate-limit at the Function; keep keys server-side.
5. **If SSR ever needed** (personalisation, previews): SWA supports hybrid
   Next.js — drop `output: "export"`; components are unchanged.

## Operational notes

- Node 20+ (`engines` in package.json). Build: `npm run build`; local
  preview: `npx serve out`.
- Playwright is used ad-hoc for visual review; screenshots at 390 / 768 /
  1440 px are the review gate before merging UI changes.
- Azure SWA Free tier allows 3 staging environments — close stale PRs.
