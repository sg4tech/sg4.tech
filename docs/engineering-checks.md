# Engineering Checks

This project uses a mandatory automated verification flow.

The current product shape is intentionally small: two public landing pages in `app/page.tsx` and `app/yii2/page.tsx`.

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
- `security:audit`: dependency vulnerability audit via `npm audit`
- `security:code`: static security linting via `eslint-plugin-security`
- `typecheck`: standalone TypeScript verification
- `test`: automated tests via `vitest`
- `knip`: unused files, exports, and dependency detection
- `depcruise`: dependency graph rules and cycle detection
- `build`: production build verification

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
