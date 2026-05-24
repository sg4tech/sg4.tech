# Retro: h2 margin missing on prod, present in dev (2026-05-24)

## Situation

On `https://sg4.tech/blog/diagnose-broken-engineering-delivery/` the section `<h2>` elements inside the article body had no top margin — they sat flush against the preceding paragraph. The same page in `next dev` rendered the expected `var(--space-4)` (32px) gap. User initially suspected the Next.js dev indicator overlay; that was a false lead.

## What happened

Two CSS rules competed for the same `<h2>` element with equal specificity `(0,1,1)`:

- `app/components/Section.module.css` — `.section h2 { margin: 0; color, font-size, line-height, letter-spacing, text-wrap }` (descendant selector).
- `app/blog/diagnose-broken-engineering-delivery/page.module.css` — `.body h2 { margin: var(--space-4) 0 0; ... }`.

The blog post wraps content in `<Section><div className={styles.body}>…</div></Section>`, so both rules matched. Equal specificity → cascade resolves by source order. Next.js bundles CSS modules differently in dev vs prod:

- **dev:** style tags injected per-component during HMR; page module ended up after Section module → `.body h2` won → margin visible.
- **prod (`output: export`):** CSS-module chunking placed `Section.module.css` (shared chunk) after `page.module.css` (route chunk) → `.section h2 { margin: 0 }` won → margin invisible.

The bug existed in both environments — only the cascade resolution differed.

## Root cause (5 whys)

1. **Why is there no margin on prod?** `.Section_section h2 { margin: 0 }` overrides `.page_body h2 { margin: var(--space-4) … }`.
2. **Why does it override?** Equal specificity → source order decides → prod bundle puts Section CSS last.
3. **Why do two rules fight over the same `<h2>`?** Section uses a descendant selector (`.section h2`), which leaks the reset into any nested `<h2>` — including the article body's prose headings.
4. **Why was a descendant selector chosen unnecessarily?** No rule or lint forbids shared layout components from styling arbitrarily nested semantic tags. The author of Section took the shorter path.
5. **Why does a layout component style the `h2` tag at all?** Two design-system concerns were conflated — tag-level typography defaults (which belong in `globals.css`) and layout composition (which belongs in wrapper components). Section absorbed responsibility for `h2` styling that wasn't its own.

**Root cause:** Layout components in the design system illegitimately styled semantic tags via descendant selectors, with no guardrail to catch it.

## Retrospective

Beyond the root cause itself, the investigation surfaced three process gaps worth naming:

- **Blast-radius audit was incomplete.** When choosing between a narrow fix (raise specificity in blog CSS) and a structural fix (remove Section's `.section h2`), the structural path was framed as "needs to check landing pages." The sub-agent audit covered FaqSection (h2 inside a wrapper div) but missed bare `<h2>` elements without className — because the audit prompt didn't name that second risk. After applying the fix, five bare h2s on `/`, `/yii2/` lost their baseline styling and the page heading hierarchy visually broke. Scope had to expand to replace them with `<SectionHeader>`.
- **Bare `<h2>` without className was a separate latent smell.** Five landing sections wrote `<h2>` directly rather than using `<SectionHeader>`. It worked only because `.section h2` silently styled them. The design system implicitly permitted this pattern by carrying the reset rule, without an explicit contract.
- **Computed-style numbers under-represented UX impact.** A 4px font-size delta and 20px added margin looked "small" in measurements. A screenshot showed the heading hierarchy actually broke — section titles split into two visual tiers, with "I don't optimize developers" reading as a subsection instead of a chapter. Visual evidence is non-negotiable for UI changes.

## Conclusions

1. **Layout/wrapper components style only themselves.** Tag-level typography defaults live in `globals.css`. Domain styling lives on a class owned by the element being styled.
2. **A bare `<h2>` (or any semantically-significant tag without className) inside a shared wrapper is an architectural smell.** It silently depends on cascade. Every heading should know explicitly which rule owns its appearance.
3. **Structural changes with cascade-conflict potential require auditing all call-sites, not just the obvious ones.** "I think I checked" is insufficient — every risk must be named explicitly before delegating.
4. **For UI bugs framed as "small style differences," visual verification is mandatory.** Computed-style numbers can mislead about perceived impact.
5. **`dev ≠ prod` bugs almost always trace to silent resolution of an implicit conflict** (cascade order, race condition, environment-specific resolver). The fix must remove the conflict, not align to one of its resolutions.

## Permanent changes

| Change | Where | What it prevents |
|---|---|---|
| Design Principles rule | `AGENTS.md` | Forbids descendant selectors with bare tag names in shared CSS modules; explains the dev≠prod cascade mechanism so future authors understand why |
| Section ↔ SectionHeader split | `app/components/Section.module.css`, `app/components/SectionHeader.{module.css,tsx}` | Removes the source of the cascade conflict; SectionHeader owns its own h2 baseline (via `.h2` modifier class on the element) |
| Landings migrated to SectionHeader | `app/page.tsx`, `app/yii2/page.tsx` | Closes the "bare h2 without className" debt across landing pages |
| This retro | `docs/retros/2026-05-24-h2-margin-prod-dev.md` | Turns a one-off lesson into institutional memory |

## Follow-ups (not in this PR)

- **Stylelint rule** to forbid `.localClass tag` descendant selectors in CSS modules, allowing only `.localClass > tag` or chained-class patterns. Machine guardrail against regression. Deferred because picking the right plugin and not breaking existing modules is its own scoped piece of work.
- **Local prod-build smoke** (`npm run preview` = `next build && npx serve out`) so the whole class of dev≠prod bugs is caught before push, not just this one. Small follow-up PR.
- **Visual regression snapshots in CI** — the most expensive but the broadest safety net. Deferred until a second incident of similar shape justifies the infra cost.
