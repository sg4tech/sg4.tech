# AGENTS.md

## Decision and Thinking

- Before implementing, ensure the task itself makes sense.
- If the request is ambiguous, incomplete, or potentially suboptimal, clarify or challenge it.
- Prefer the highest-leverage solution, not the most obvious one.
- Identify constraints and bottlenecks before optimizing.
- For non-trivial tasks, outline a short approach before implementation.
- Do not proceed with irreversible or high-risk changes under uncertainty.

## Core Standard

- First understand what actually works now, not what should work in theory.
- Treat assumptions as risks until verified.
- Prefer small, reversible, observable changes over clever rewrites.
- Preserve the working path until the replacement is proven.

## Content Language

- All public-facing project content must be in English.
- Do not add Russian copy to routes, metadata, CTAs, structured data, or public UI text unless the user explicitly approves a bilingual or non-English exception.
- Treat language choice as a product decision: default to English across pages, docs that describe the public site, and marketing assets in this repo.

## Project Conventions (sg4tech)

### Design tokens — CSS literals are blocked in CI

- All `color`, `fill`, `stroke`, `font-size`, `line-height`, and `border-radius` values must reference a `var(--*)` token defined in `app/globals.css`.
- Stylelint (`npm run lint:css`) fails CI on raw hex / rem / unitless literals on these properties. Do NOT disable the rule to bypass — extend the token set in `app/globals.css` instead.
- Before introducing a new token, scan `app/globals.css`. The vocabulary covers a 7-step typography scale, leading scale, 8px spacing scale, radii, motion, and a Yii2 visualization sub-palette. Reuse what exists.
- The exception file is `app/globals.css` itself — token definitions live there as literals (hex, rem) by design. Stylelint overrides exempt that file only.
- See `docs/design-best-practices.md` for the design theory backing the token choices.

### Where shared code lives

- `app/components/` — reusable UI components (JSX). Extract a component here when the same JSX appears in more than one page.
- `app/lib/` — pure data and utilities, no JSX (e.g., shared SVG path constants, formatters, type definitions).
- Layout primitives — `Page`, `Section`, `SectionHeader`, `Eyebrow`, `Icon`, `TopNavigation`, `FooterSection`, `BrandIcon`, `TrackedLink` — live in `app/components/`. New landing pages should compose these rather than re-implementing `.page` / `.section` / `.eyebrow` classes locally.
- UI icons come from `lucide-react` via `<Icon icon={LucideIcon}>` from `app/components/Icon.tsx`, which forwards `strokeWidth=1.6` and `aria-hidden`. Don't inline raw SVG path strings for UI icons — pick a lucide icon by name. Brand/social logos are the exception: they come from `simple-icons` or the named constants in `app/lib/social-icons.ts`, rendered via `<BrandIcon>`.
- Brand and social-network SVG paths must live as named constants in `app/lib/social-icons.ts`. Never inline a brand icon path inside a page or component file.
- Page-specific data arrays (case studies, FAQ, nav items) stay inside the page TSX. Only promote them to `app/content/` if multiple pages start sharing the same content.
- Do not create empty placeholder directories under `app/`. A directory without a `page.tsx` produces no route and just clutters the tree — leave a TODO in `docs/` instead if a future route is planned.

### Pre-commit local checks

- `npm run lint` — ESLint + Stylelint, both must pass.
- `npm run typecheck` — TypeScript strict.
- `npm run test` — Vitest.
- `npm run check` runs the full pre-commit chain (lint, security, typecheck, test, knip, depcruise, build). Use this before any non-trivial PR.
- `npm run lighthouse` runs Lighthouse CI against the static export with 0.95 thresholds (performance / accessibility / best-practices / SEO). It is excluded from `check` because it takes ~3 minutes; CI runs it on every PR.
- For UI changes, verify in the dev preview at both 375px and 1280px viewports before considering the change complete.

### Reference docs

- `docs/design-best-practices.md` — 16-section design theory (typography, hierarchy, persuasion, motion, a11y, color, performance, etc.). Consult before introducing new typography scales, color usage, motion durations, or interaction patterns.
- `docs/engineering-checks.md` — what each `npm run` check covers and the mobile QA expectations.

## Engineering Quality

- Default to test-first development and move as close to TDD as practical.
- Add or update automated tests together with behavior changes.
- Do not ask the user to test manually until reasonable automated checks are exhausted.
- Use linters, type checks, and static analysis wherever the stack supports them.
- Prefer explicit schemas, contracts, and strict typing over hidden assumptions.

## Runtime Truth

- Treat built artifacts and real endpoints as the source of runtime truth.
- Verify real runtime behavior from the actual artifact and endpoint, not from assumptions or release metadata.
- If a real production artifact, export, or response is available, trust it above inferred structure from code or tests.

## Parser and Integration Rules

- Use real fixtures as the primary source for parser and integration work.
- Any parser behavior change should come with a fixture-based test.
- A passing fixture test does not guarantee live runtime behavior; verify the runtime layer separately.
- For browser extensions, a new supported page is not complete until both parser logic and content-script injection are verified.
- New backend response statuses are runtime contract changes; update all consumers and add consumer-side tests.

## Schema and Data Rules

- Treat live schema and stored data shape as product/data contracts.
- Do not add, remove, rename, or reorder schema elements without explicit approval.
- Keep schema migration separate from the normal write-path.
- Safe UI/validation refresh is allowed; silent schema migration is not.

## Required Checks

- Start with the smallest relevant test scope.
- Then run broader validation only after the local fix is stable.
- Distinguish clearly between lint, unit tests, integration checks, build, release, and live runtime verification.
- A successful build or deploy command does not prove the live system works.

## Layout and Visual QA Rules

- Default to visualization, not text. On landing and marketing pages, every list, card, and feature block must carry a visual anchor (icon, pictogram, or diagram) — humans skim first and read second, so the idea has to be recognisable at a glance.
- A bullet list with no visual anchor reads as agent output, not human-facing content. When converting prose into a public block, attach an icon or pictogram before each item or pair the block with a diagram.
- Text-only blocks are acceptable only where the content is intrinsically text-bound (Q&A, body paragraphs, captions, plain links).
- Do not constrain large headings with a rigid `max-width` without checking wide desktop rendering.
- If awkward wrapping appears in multiple sections, fix the typography rules rather than patching headings one by one.
- If the same visual defect appears more than once, stop patching individual components and define a system-level rule before continuing.
- Treat `hero h1`, section headings, and CTA headings as separate layout objects with separate wrapping and width rules.
- Do not reuse a single typography constraint across all major headings.
- Check not only the mobile breakpoint, but also the wide desktop layout.
- Evaluate any layout or typography change in at least 3 modes: `320–390px`, `~768px`, and `>=1200px`.
- Design mobile navigation as a first-screen UX element, not as a compressed desktop navigation.
- Secondary sections must not compete with the hero and final CTA for attention.
- FAQ, footer links, and insights should remain secondary in the visual hierarchy.
- If the same visual defect appears twice, stop and turn it into a design-system rule.
- For UI changes, rely on real rendered output and screenshots, not only on reading JSX or CSS.
- For UI work, code inspection is not sufficient evidence.
- Validate against rendered output before considering the change complete.
- When visual behavior is under discussion, screenshots outrank code assumptions.

## Retros Rules

- Log retros for live incidents, schema/data mistakes, and recurring failure modes.
- Each retro should include:
  - situation
  - what happened
  - root cause
  - retrospective
  - conclusions
  - permanent changes

## Token Discipline

- Keep answers short by default.
- Prefer action plus result over long explanation.
- Do not repeatedly restate saved context.
- Read files and fixtures narrowly instead of re-reading large files wholesale.
- For live-only bugs, move to a focused runtime probe sooner.

## Working Style

- Do as much of the work as possible without pushing avoidable effort onto the user.
- Separate verified facts, hypotheses, and guesses.
- Do not silently turn implementation convenience into a product decision.
- If a bug is fixed, add a guardrail: a test, check, script, or documented rule.
