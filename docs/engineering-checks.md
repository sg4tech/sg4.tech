# Engineering Checks

This project uses a mandatory automated verification flow.

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
- `mdx.d.ts` provides stable MDX module typing for standalone type checks.
- `knip` treats only `app/**` as entrypoints so unused code in `components` and `lib` remains detectable.
- ESLint enforces:
  - `complexity`
  - `max-depth`
  - `max-lines-per-function`

## CI

The same gates run in GitHub Actions:

- workflow: `.github/workflows/ci.yml`

