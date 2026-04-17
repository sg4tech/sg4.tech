# Engineering Checks

This project uses a mandatory automated verification flow.

The current product shape is intentionally small: one public landing page in `app/page.tsx`.

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
- `knip` treats only `app/**/*.tsx` as entrypoints because the site is currently a single-page landing page.
- `depcruise` validates the active app graph only, which keeps the check aligned with the live code path.
- ESLint enforces:
  - `complexity`
  - `max-depth`
  - `max-lines-per-function`

## CI

The same gates run in GitHub Actions:

- workflow: `.github/workflows/ci.yml`
