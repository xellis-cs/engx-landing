# EngX Website

Marketing site for **EngX — Your Partner for Intelligent Transformation**:
senior specialist squads for strategy, data & AI, transformation, and
forensics, assembled around client outcomes.

Built with **Next.js + TypeScript + Tailwind CSS v4**, statically exported and
deployed to **Azure Static Web Apps**.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to /out
npx serve out      # preview the production build
```

## Project map

| Path | Purpose |
| --- | --- |
| `app/` | Next.js App Router — layout, page, design tokens (`globals.css`) |
| `components/` | Page sections (interactive ones are client components) |
| `lib/data.ts` | All page content: services, roles, bios, publications |
| `lib/site.ts` | Site constants (email, taglines) |
| `docs/` | **Read before contributing:** brand, domain, architecture |
| `legacy/` | Original designer HTML page, kept for reference |
| `staticwebapp.config.json` | Azure SWA routing, caching, security headers |

## Documentation

- `CLAUDE.md` — project context and conventions (also read by AI tooling)
- `docs/DOMAIN.md` — who EngX is, what it sells, audience, vocabulary
- `docs/BRAND.md` — palette, typography, voice, layout rules
- `docs/ARCHITECTURE.md` — framework decision record + integration roadmap
  (forms → CV portal → payments → chatbot)

## Deployment

GitHub Actions deploys to Azure Static Web Apps: every PR gets an isolated
staging URL; merging to `main` releases to production. See `CONTRIBUTING.md`.
