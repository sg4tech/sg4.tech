# Victor Demin Landing Page

Minimal personal landing page for fractional CTO and engineering delivery consulting.

## Goal

The site is intentionally a single-page lead generation asset.

It should:

* communicate the consulting value proposition fast
* build trust through clear positioning, cases, and personal credibility
* drive visitors toward a low-friction contact action

## Current Product Shape

Only one public page matters right now:

```text
/
```

There are no secondary article or about routes in the current iteration. If content marketing returns later, add it back deliberately rather than keeping placeholder pages live.

## Stack

* Next.js App Router
* TypeScript
* CSS Modules

## Key Principles

* keep the page fast and readable
* optimize for conversion, not page count
* prefer one strong landing page over several weak supporting pages
* avoid placeholder content on public routes

## Verification

Run the strongest local checks before shipping:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## GitHub Pages

The repository includes a GitHub Pages workflow in `.github/workflows/pages.yml`.

To enable deployment:

1. Open repository settings in GitHub
2. Go to `Pages`
3. Set `Source` to `GitHub Actions`

The workflow builds a static export and deploys it automatically on pushes to `master`.

For a custom domain like `sg4.tech`, the site should be deployed from the root path with no `basePath`.
If you ever switch back to the default GitHub Pages project URL (`username.github.io/repo-name`), set `PAGES_BASE_PATH=/repo-name` in the workflow before building.
