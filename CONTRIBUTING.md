# Contributing

This site auto-deploys to **Azure Static Web Apps**. All changes reach production
through a reviewed pull request — direct pushes to `main` are blocked.

## Workflow

1. **Create a branch** off `main`:
   ```bash
   git checkout main && git pull
   git checkout -b my-change
   ```
2. **Make your edits.** The site is a Next.js app — content in `lib/data.ts`,
   sections in `components/`, design tokens in `app/globals.css`. Run
   `npm run dev` locally and check 390px / 768px / 1440px widths.
3. **Push and open a pull request** against `main`:
   ```bash
   git push -u origin my-change
   gh pr create --base main --fill   # or open the PR in the GitHub UI
   ```
4. **Review the staging preview.** GitHub Actions automatically builds your PR and
   posts a temporary **staging URL** as a comment on the PR. This is a live, isolated
   copy of your changes — share it for review.
5. **Merge.** Once approved, merge the PR. The change auto-deploys to **production**
   within a minute or two. Closing/merging the PR tears down its staging site.

## Notes

- Up to **3** staging environments can exist at once (Free tier) — close stale PRs.
- Production URL: https://purple-bush-0f28be003.7.azurestaticapps.net
- The CI build runs `npm run build` (static export to `/out`);
  `staticwebapp.config.json` controls routing and security headers.
