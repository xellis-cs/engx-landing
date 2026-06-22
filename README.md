# EngX Landing Page

Marketing landing page for **EngX — Your Partner for Intelligent Transformation**.

A single self-contained static HTML page (inline CSS/JS), deployed to **Azure Static Web Apps**.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | The deployed landing page (entry point). |
| `engx_website_v7_2.html` | Original source file (kept for reference). |
| `staticwebapp.config.json` | Azure SWA routing + security headers. |

## Deployment

Hosted on Azure Static Web Apps with continuous deployment from this repo's
`main` branch via GitHub Actions (`.github/workflows/`). Every push to `main`
builds and publishes automatically; the site is served from Azure's global CDN.

To work on the page locally, just open `index.html` in a browser.
