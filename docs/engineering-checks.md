# Engineering Checks

This project uses a mandatory automated verification flow.

The current product shape:

- Three public landing pages: `app/page.tsx` (`/`), `app/yii2/page.tsx` (`/yii2`), and `app/ai-vibecoding/page.tsx` (`/ai-vibecoding`).
- A `/blog` section: index at `app/blog/page.tsx` plus per-post routes under `app/blog/<slug>/page.tsx`. Post metadata is centralized in `app/lib/blog/posts.ts`.

When adding a new public route, also add it to `lighthouserc.json` so CI guards its performance, accessibility, best-practices, and SEO scores against the 0.95 threshold.

## Required checks

Run all checks:

```bash
npm run check
```

Individual gates:

```bash
npm run lint
npm run security:audit
npm run security:code
npm run typecheck
npm run test
npm run knip
npm run depcruise
npm run build
```

## What each check covers

- `lint`: ESLint rules for code quality and maintainability
- `security:audit`: dependency vulnerability audit via `npm audit --audit-level=high`. Fails CI only on `high` and `critical`. Currently 7 known `low`/`moderate` advisories remain because the only "fix" npm suggests is a destructive downgrade — see "Known acceptable npm audit advisories" below.
- `security:code`: static security linting via `eslint-plugin-security`
- `typecheck`: standalone TypeScript verification
- `test`: automated tests via `vitest`
- `knip`: unused files, exports, and dependency detection
- `depcruise`: dependency graph rules and cycle detection
- `build`: production build verification

## Local prod-build smoke

`npm run preview` runs `next build` (including the OG postbuild) and serves the static export on `http://localhost:3001` via `serve`. URL behavior matches `next.config.mjs`: `cleanUrls: false` and `trailingSlash: true` (see `serve.json`).

Use this when a change could be affected by anything that differs between `next dev` and the built artifact:

- CSS-module load order (which decides cascade for equal-specificity rules)
- Font preloading and `font-display` swap timing
- Hydration sequencing under production React
- Image optimization (none in this project's `output: export`, but worth knowing)
- Static asset hashing and chunk boundaries

The dev server uses port 3000; preview uses 3001, so both can run in parallel.

`preview` is intentionally separate from `npm run check` — it starts a long-running server, not a one-shot gate. Run it manually for UI/CSS-affecting changes. See `docs/retros/` for incident reports that motivated this workflow.

## Known acceptable npm audit advisories

`npm audit` reports 7 remaining advisories (3 low, 4 moderate) that are knowingly accepted. `security:audit` runs with `--audit-level=high`, so these surface as stderr warnings but do not fail the gate.

**All 7 advisories live in devDependencies that never run in production user requests** (Lighthouse CI's puppeteer-core stack, and a Next.js transitive dep). The static export served to users at `https://sg4.tech` does not include any of this code.

| Advisory chain | Severity | Why not fixed |
|---|---|---|
| `uuid` (via `@lhci/cli` → `puppeteer-core`) | moderate | `@lhci/cli` is already on `0.15.1`, the latest release. npm suggests downgrade to `0.1.0` (a 5+ year old breaking regression) which would lose every modern Lighthouse feature. Waiting for upstream patch. |
| `inquirer`, `external-editor`, `tmp` (via `@lhci/cli`) | low + moderate | Same root cause — fixes blocked behind `@lhci/cli` releasing a new version. |
| `postcss` (via `next` → `postcss@8.4.31`) | moderate | Every `next@15.x` locks `postcss@8.4.31`. The only "fix" npm offers is downgrade to `next@9.3.3` (2020-era). Real fix requires major upgrade to `next@16`, which is a separate scoped change. |

**Do NOT run `npm audit fix --force`** — it will downgrade `@lhci/cli` and/or `next` to ancient versions, breaking Lighthouse CI and the app respectively. If a `high` or `critical` advisory appears, `security:audit` will start failing and force an explicit triage.

When upstream packages release fixes, update accordingly and trim this table. When considering the Next 16 upgrade for the `postcss` advisory, run it in its own PR with the full `check` + `lighthouse` + `preview` verification suite.

## Important configuration decisions

- `typecheck` uses `tsconfig.typecheck.json`, not runtime-generated `.next` artifacts.
- `typecheck` only covers the current TypeScript app and test files; there is no MDX layer in the current project shape.
- `knip` treats `app/**/*.tsx` as entrypoints because the site is currently a very small multi-route landing setup.
- `depcruise` validates the active app graph only, which keeps the check aligned with the live code path.
- ESLint enforces:
  - `complexity`
  - `max-depth`
  - `max-lines-per-function`

## Mobile layout rules

The landing page must stay mobile-first and responsive by default.

When changing layout or styling:

- start from the smallest viewport first and add complexity as screens get wider
- keep one URL and one HTML structure across devices
- prefer one-column layouts on phones; only introduce multi-column layouts when the content clearly benefits
- use breakpoints where the content starts to feel broken, not based on device brand names
- keep touch targets comfortably tappable on mobile navigation and CTA elements
- avoid sticky navigation on mobile unless it clearly improves usability
- keep primary CTA elements easy to reach and visually dominant on narrow screens
- avoid long text lines on wide screens and avoid stretched single-column cards on desktop
- preserve readable spacing and text size on mobile without requiring zoom
- treat footer and secondary links as visually secondary to the main CTA flow

## Mobile QA checklist

Before shipping notable layout changes, verify:

- `320–390px`: navigation, CTA, and text remain readable and tappable
- `390–480px`: spacing feels intentional and sections do not collapse awkwardly
- `~768px`: tablet layout feels deliberate, not like an in-between accident
- `>=1200px`: sections do not become long empty strips; use denser desktop layouts where helpful

## CI

The same gates run in GitHub Actions:

- workflow: `.github/workflows/ci.yml`
