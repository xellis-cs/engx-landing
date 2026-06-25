# Contributing

This site auto-deploys to **Azure Static Web Apps**. All changes reach production
through a reviewed pull request — direct pushes to `main` are blocked.

## Workflow

1. **Create a branch** off `main`:
   ```bash
   git checkout main && git pull
   git checkout -b my-change
   ```
2. **Make your edits.** The site is a single static page — `index.html` at the repo root.
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
- Keep `index.html` as the entry point; `staticwebapp.config.json` controls routing
  and security headers.
