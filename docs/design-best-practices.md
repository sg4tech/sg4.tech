# Design Best Practices

Reference for landing-page and product UI work in this repo. Compiled from primary sources (W3C, Nielsen Norman Group, web.dev, MDN, Baymard, Smashing) — full source list at the bottom.

Use as a checklist during design and review. Numbers in *italics* are verified against primary sources; numbers without provenance are intentionally omitted.

---

## 1. Conversion (landing pages)

### Core levers
- **One page, one goal.** Strip non-essential navigation. *Yuppiechef A/B test: removing the menu lifted conversion 3% → 6% (+100%) on a Wedding Registry landing — but VWO's case study reports no sample size, duration, or p-value, so treat it as suggestive, not definitive. HubSpot's multi-page test was more modest: +16–28% lift on MoF pages, ~0–4% on ToF pages.* Treat removing nav as a hypothesis to test, not a guaranteed double.
- **Mobile-first, not "responsive-adjusted".** *StatCounter, April 2026: mobile 52.8% / desktop 45.61% / tablet 1.59% globally — with strong regional skew (Africa 79% mobile, Japan ~37%, US ~54%).* Design and review on a 375–390px viewport before desktop.
- **Speed is conversion.** Track Core Web Vitals (see §6).
- **Message-match.** The page headline must mirror the inbound ad/link/source promise. Mismatch is a top driver of bounce.
- **Reduce form fields.** *MarketingExperiments: dropping from 11 fields to 4 lifted conversion 13.4% → ~12% became ~17% in some tests; reducing perceived form length lifted conversion 77% in another test; reducing checkout from 9 pages to 3 yielded +300%. Direction is consistent: fewer fields wins.*
- **Social proof above the fold.** Logos, hard numbers, short quotes near the primary CTA. Stripe's hero pairs the headline with quantified proof ("$1.9T processed in 2025", "50% of Fortune 100").
- **One primary CTA per section.** Repeat the same CTA down the page. Do not introduce competing actions.

### Copy patterns (NN/g microcontent rules)
- **Page titles**: 40–60 chars, front-load keywords, drop "the/a".
- **Headlines work standalone** (they appear in feeds, OG cards, search results). Specific over clever. No puns.
- **Buttons describe the action**: "Book a diagnostic call" not "Submit". "Create account" not "Continue".
- **Front-load each line.** Scanners read the first 2 words; put the verb or noun there.

---

## 2. UX heuristics — Nielsen Norman, exact wording

These are the canonical 10. Do not paraphrase the names; review against them by name.

1. **Visibility of system status** — keep users informed via timely feedback.
2. **Match between system and the real world** — speak the user's language, not internal jargon.
3. **User control and freedom** — clearly marked emergency exit; undo, cancel, back, close.
4. **Consistency and standards** — follow platform conventions; same words mean the same things.
5. **Error prevention** — design out the error before designing its message.
6. **Recognition rather than recall** — make options visible; don't require memory.
7. **Flexibility and efficiency of use** — shortcuts for experts that don't burden novices.
8. **Aesthetic and minimalist design** — every extra element competes for attention.
9. **Help users recognize, diagnose, and recover from errors** — plain language, no codes, suggest a fix.
10. **Help and documentation** — ideally not needed; if needed, task-oriented, easy to search.

**Validation rule**: 5 users uncover ~85% of usability issues (Nielsen). Run a quick test before polishing.

---

## 3. Information architecture & navigation

- **Pick the navigation pattern at launch** that fits the *expected* growth. Retrofitting nav is one of the most expensive redesigns.
- **Vertical or hybrid nav** for B2B / docs / multi-service. **Horizontal minimal** for single-purpose landing.
- **The 4 IA components** (Rosenfeld): organization, labeling, navigation, search. Audit each separately.
- **Section anchors must use stable IDs and `scroll-margin-top`** so anchored landings don't hide under sticky headers (this repo already does this — see `globals.css`).
- **Breadcrumbs** for hierarchies > 2 levels deep; not needed on flat landing pages.
- **One sticky element max** (header *or* CTA, not both, on mobile).

---

## 4. Typography & spacing

| Property | Value | Source |
|---|---|---|
| Body baseline | ≥ 16px on every device; 17–18px on desktop for long-form | Industry consensus / WCAG |
| Heading scale (desktop) | H1 44–56px · H2 34–44px · H3 24–28px (~–25% on mobile) | USWDS / common practice |
| Line-height body | 1.4–1.6 | Industry consensus (WCAG 1.4.12 only requires the layout *survive* a user override to LH 1.5, not that LH must be 1.5) |
| Line-height headings | 1.05–1.25 | Industry consensus |
| Line length | 45–80 characters; ~66 ideal | Bringhurst / WAI |
| Spacing rhythm | 8px scale: 8 / 16 / 24 / 32 / 40 / 48 / 64 / 96 | Material / common practice |
| Section spacing | 64–96px vertical | Common practice |
| Card padding | 24–32px | Common practice |
| Container max-width | 1200–1400px | Common practice |
| Units | `rem` / `em` (respect user font-size) | WCAG 1.4.4 |
| Responsive font | `clamp(min, fluid, max)` | Modern CSS |
| Component breakpoints | CSS Container Queries (`@container`) for true component-level responsiveness | MDN |

---

## 5. Color (OKLCH-first)

- **Use OKLCH for tokens, not HSL/RGB.** OKLCH is perceptually uniform: equal `L` shifts produce equal perceived lightness shifts across hues. HSL has "dead grey zones" in gradients and inconsistent lightness across hues. OKLCH is Baseline Widely Available since May 2023.
- **Tokens shape**: `oklch(L C H)` with L in 0–100%, C in 0–0.4, H in 0–360°.
- **Generate variants relatively**: `oklch(from var(--brand) calc(l + 0.15) c h)` for hover/active/disabled states.
- **Wider gamut**: OKLCH covers the Display P3 gamut, ~50% more colors than sRGB on capable displays.
- **Dark mode**: derive by flipping `L` semantically (e.g. surface 98% → 8%), not by inverting RGB.
- **Test for color blindness**: never rely on hue alone for state (error/success). Pair with icon + text.

---

## 6. Performance (Core Web Vitals — verified thresholds)

Measured at the **75th percentile** across mobile and desktop, per web.dev.

| Metric | Good | What it measures |
|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | When the main content first renders |
| **INP** (Interaction to Next Paint) | ≤ 200ms | Responsiveness across all interactions; replaced FID in 2024 |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | Unexpected visual movement |

Operational rules:
- Always set explicit `width`/`height` on `<img>` / `next/image` to reserve space → CLS stays low.
- Self-host fonts or use `font-display: swap`; subset to needed glyphs.
- Defer or async non-critical scripts (this repo's analytics already loads with `defer`).
- For Next.js static export: avoid client-side JS for content that can be static.
- Run Lighthouse on every UI change. Target Performance / Accessibility / Best Practices / SEO ≥ 95.

---

## 7. Accessibility — WCAG 2.2 AA target

Four principles: **P**erceivable, **O**perable, **U**nderstandable, **R**obust.

### Always-on rules
- **Contrast**: 4.5:1 normal text · 3:1 large text (≥18px or ≥14px bold) · 3:1 UI components & graphical objects.
- **Keyboard** for all interactive elements. Visible `:focus-visible` with ≥3:1 contrast vs adjacent.
- **Semantic HTML first** (`<button>`, `<nav>`, `<main>`, ordered headings). ARIA only where native semantics fall short.
- **`<html lang="…">`** with a BCP 47 tag; keep it as short as possible (`en`, not `en-US`, unless the distinction matters).
- **One `h1` per page**, no skipped levels.
- **`prefers-reduced-motion`** disables non-essential animation (WCAG 2.3.3 — vestibular safety).
- **Alt text** on meaningful images; `alt=""` on purely decorative ones.
- **Captions / transcripts** for video/audio.

### New in WCAG 2.2 (verified from W3C)
- **2.4.11 Focus Not Obscured (AA)** — focused element must be at least partially visible (no full coverage by sticky headers).
- **2.5.7 Dragging Movements (AA)** — provide a non-drag alternative for any drag interaction.
- **2.5.8 Target Size (AA)** — interactive targets ≥ **24×24 CSS px**, or have adequate spacing equivalent.
- **3.2.6 Consistent Help (A)** — help links/widgets in the same place across pages.
- **3.3.7 Redundant Entry (A)** — don't ask for the same info twice in one session.
- **3.3.8 Accessible Authentication (AA)** — no cognitive-function tests (puzzle CAPTCHAs etc.) without an alternative.

### Treat a11y as product quality
Bake into design tokens, components, and code review. Patches at the end of a project never cover the structural issues.

---

## 8. Forms

Adapted from Baymard Institute, NN/g, Smashing/Wroblewski.

### Structure
- **Single column.** Multi-column forms slow completion (Smashing cites CXL: ~15s per form penalty).
- **Logical grouping** with whitespace; no more than ~6 fields per group.
- **Steps with progress indicator** for long flows ("Step 2 of 4").

### Fields
- **Single name field**. Baymard: 89% of sites still split first/last; 42% of users put their full name in the first-name field anyway.
- **Hide Address Line 2** behind a link. Baymard: 30% of users stop and second-guess prior input when they see it.
- **Default to single billing+shipping**. 24% of sites show duplicate address fields by default.
- **Don't slice phone/date** into multiple inputs.
- **Use the right `type=` and `inputmode=`** so mobile keyboards match (`email`, `tel`, `url`, `numeric`, `decimal`).
- **Autocomplete attributes** (`autocomplete="email"`, `"given-name"`, `"address-line1"`) — Google: autofill makes form completion ~30% faster.
- **Show password toggle** instead of a "confirm password" field.

### Labels & errors
- **Top-aligned labels** (Google eye-tracking: fewer fixations, faster).
- **Visible labels** — no placeholder-only fields.
- **Inline validation after blur or 500–1000ms idle** — *Wroblewski + Etre, n=22, A List Apart 2009: +22% success rate, –22% errors, +31% satisfaction, –42% completion time, –47% eye fixations vs. submit-only validation.* Never validate on focus or per-keystroke.
- **Error message format**: plain language, name the problem, suggest the fix.
- **Required vs optional** — mark optional, not required, when most fields are required (and vice versa).

### Buttons
- **Action-specific labels** ("Create account", "Get a delivery diagnosis"), not "Submit".
- **Disable on submit** to prevent duplicates; show a loading indicator.
- **Target size**: WCAG 2.2 floor is **24×24 CSS px**. Apple HIG: **44×44 pt** for iOS/iPadOS/watchOS. Microsoft (Windows touch): **9 mm / 34px** recommended, **7 mm / 26px** minimum, **2 mm / 8px** spacing. Material/Android: **48 dp**. Pick the strictest applicable to your audience — for general web, treat 44px as the default with WCAG's 24px as a hard floor.

---

## 9. States: empty, loading, error, success

- **Empty state ≠ blank space.** Explain what would be here, why it's empty, and the next action ("Add your first project" + button).
- **Loading**: real progress indicators when system is working. Never show a "no records" message before data arrives — NN/g flags this as a trust-killer.
- **Error**: mirror NN/g heuristic 9 — plain language, point at what's wrong, suggest what to do. Never "Error 0x80004005".
- **Success**: confirm what just happened, what to do next. Don't disappear silently.
- **Skeleton screens** > spinners for predictable layouts; spinners only when the layout is unknown.

---

## 10. Microcopy (NN/g rules, condensed)

- **Front-load.** First two words carry the line for scanners.
- **Concrete > clever.** "Post-traumatic stress disorder healed by birds" beats "Alternative treatment for PTSD" (NN/g example).
- **No clickbait.** Tease only what the content actually delivers.
- **Voice = same writer everywhere.** Buttons, errors, empty states, confirmations should sound like one person.
- **Read every CTA out loud.** If it could be on any page, rewrite it.

---

## 11. Motion & animation

Use a token scale, not magic numbers. The Material 3 motion spec (verified from `material-foundation/material-tokens`) is a sane default — copy or adapt it.

### Duration tokens (Material 3, ms)
| Bucket | Tokens | When to use |
|---|---|---|
| Short | 50 / 100 / 150 / 200 | Selection, toggle, small state change (chip select, checkbox) |
| Medium | 250 / 300 / 350 / 400 | Standard transitions (sheet open, dialog enter) |
| Long | 450 / 500 / 550 / 600 | Larger surface transitions (page change, hero swap) |
| Extra-long | 700 / 800 / 900 / 1000 | Reserved for ambient / decorative motion only |

### Easing (Material 3 cubic-bezier, verified)
| Curve | `cubic-bezier(...)` | Use |
|---|---|---|
| Standard | `0.2, 0, 0, 1` | Default for most UI motion |
| Standard accelerate | `0.3, 0, 1, 1` | Element exits |
| Standard decelerate | `0, 0, 0, 1` | Element enters |
| Emphasized accelerate | `0.3, 0, 0.8, 0.15` | Strong exit (modal close) |
| Emphasized decelerate | `0.05, 0.7, 0.1, 1` | Strong enter (modal open) |
| Linear | `0, 0, 1, 1` | Progress, scrubbing, only when constant velocity matters |

### Rules
- **Respect `prefers-reduced-motion`**: drop or substantially reduce non-essential motion. WCAG 2.3.3 (AAA) requires it for interaction-triggered animation.
- **Animate cheap properties** (`transform`, `opacity`); avoid layout-triggering properties (`width`, `top`, `margin`).
- **Don't animate to confirm actions a button label already confirms.** Motion supplements clarity, never replaces it.

---

## 12. SEO basics (verified Lighthouse audits)

- `<meta name="description">` non-empty, ~150–160 chars.
- Canonical tag (`<link rel="canonical">`) on every page.
- `hreflang` tags for multi-language sites.
- Structured data (JSON-LD `@type` matching the page: `Person`, `ProfessionalService`, `FAQPage`, etc.) — this repo already does this in both landings.
- Descriptive link text — never "click here" / "read more" alone.
- Successful HTTP status; valid `robots.txt`; tap targets adequately sized.
- Open Graph + Twitter card metadata for share previews (already wired in this repo's `metadata` exports).

---

## 13. Internationalization (when adding RU/other locales)

- `<html lang="…">` per W3C — keep BCP 47 tag minimal: `ru`, not `ru-RU`, unless dialect matters.
- Plan for longer translated strings (commonly cited rule of thumb: ~30–40% expansion EN → RU/DE/FR — directional, not from a primary source). Hero/CTA layouts must not break on overflow.
- Use **logical CSS properties** (`padding-inline-start`, `margin-block-end`) so the same stylesheet supports RTL languages.
- Don't concatenate translated strings; use full sentences in source.
- Locale-specific number/date formatting via `Intl.NumberFormat` / `Intl.DateTimeFormat`.

### Cyrillic font choice (per Habr 1027874, 2026)
For Russian-language projects in 2026, prefer SIL Open Font License 1.1 fonts to sidestep Monotype-style geo restrictions and licensing risk:
- **Inter** — purpose-built for screens; broad Cyrillic coverage; safe for UI.
- **Manrope** — modern sans, similar use case.
- **Golos Text** — built specifically for Russian, tuned for long-form reading on screen.

Use system fonts (Arial, Verdana, Tahoma) only as **fallbacks** in the `font-family` stack, not as self-hosted webfonts (no separate license to redistribute them). Recommended stacks: `"Golos Text", Arial, sans-serif` or `Inter, Arial, sans-serif`.

---

## 14. Reference sites (look at these, don't reinvent)

| Site | What to study |
|---|---|
| [stripe.com](https://stripe.com) | Quantified proof in hero, layered IA, precise typography hierarchy |
| [linear.app](https://linear.app) | Dark-palette restraint, motion as product demo, dense-but-readable copy |
| [vercel.com](https://vercel.com) | Developer-funnel CTA ladder, performance as marketing |
| [resend.com](https://resend.com) | Single-purpose landing, monospace accents, code-as-hero |
| [anthropic.com](https://anthropic.com) | Editorial typography, generous whitespace, narrative pacing |
| [github.com](https://github.com) | Mature dark/light theming, tokenized at scale |
| [apple.com](https://apple.com) | Scroll-driven storytelling, restrained motion, headline rhythm |
| [tailwindcss.com](https://tailwindcss.com) | Documentation-as-marketing, in-page code demos |
| [supabase.com](https://supabase.com) | Open-source landing structure, technical proof points |
| [shopify.com](https://shopify.com) | Multi-segment IA on one site (merchants / partners / developers) |
| [Material 3](https://m3.material.io) | Design-system reference: tokens, components, accessibility built-in |
| [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/) | Platform conventions and target-size rules |
| [Shopify Polaris](https://polaris.shopify.com) | Open design system: tokens, content guidelines |
| [IBM Carbon](https://carbondesignsystem.com) | Enterprise design system; thorough a11y patterns |
| [USWDS](https://designsystem.digital.gov) | Government design system: typography and spacing scales worth borrowing |

---

## 15. Audit of this repo (state at writing — `codex/yii2` branch)

Files reviewed: [`app/page.tsx`](../app/page.tsx), [`app/yii2/page.tsx`](../app/yii2/page.tsx), [`app/globals.css`](../app/globals.css), [`app/layout.tsx`](../app/layout.tsx), `app/page.module.css`, `app/yii2/page.module.css`.

### Already strong
- ✅ `<html lang="en">` set ([`app/layout.tsx:22`](../app/layout.tsx)).
- ✅ Body 16px baseline, smooth scroll, `:focus-visible` outline with offset ([`app/globals.css:21,44`](../app/globals.css)).
- ✅ Container `min(--max-width, calc(100% - 2rem))` — sane responsive container ([`app/globals.css:55`](../app/globals.css)).
- ✅ Fluid typography via `clamp()` for hero headings — both pages.
- ✅ Single primary CTA per section, repeated; secondary CTA goes to `#process`.
- ✅ Structured data (JSON-LD `Person`, `ProfessionalService`, `FAQPage`) on both pages.
- ✅ Open Graph + Twitter metadata via Next `metadata` export.
- ✅ Analytics deferred (`<Script defer …>`).
- ✅ `aria-label` on `<nav>`, `<footer>`, `<ul aria-label="Key outcomes">`. Decorative SVGs marked `aria-hidden`.
- ✅ Each page has one `h1`; section anchors use stable ids.

### Gaps / improvements

1. **Design tokens are minimal and ad-hoc.** `globals.css` defines ~10 CSS variables; both `page.module.css` files use raw `rem`/`px`/colors directly (`0.95rem`, `0.85rem`, `0.78rem`, `1.18rem`, `1.65`, `1.75`, etc.). Promote a typed scale (`--fs-xs/sm/md/lg/xl`, `--lh-tight/normal/loose`, `--space-1/2/4/6/8`) and replace literals. Reduces drift between pages and makes the 8px rhythm enforceable.
2. **Color tokens are hex, not OKLCH.** `--text: #202124`, `--muted: #555a61` etc. Migrate to OKLCH so future palette/dark-mode work uses relative-color math.
3. **No dark mode.** Single light palette only. If on the roadmap, plan tokens around `light-dark()` or `prefers-color-scheme` now (cheap) rather than retrofit later.
4. **No `prefers-reduced-motion` block.** `html { scroll-behavior: smooth; }` will animate anchor jumps for users who opted out. Wrap in `@media (prefers-reduced-motion: no-preference)`.
5. **Missing `<meta name="viewport">` / theme-color override.** Next 15 sets viewport via `viewport` export — verify it's set; consider adding `themeColor` in metadata.
6. **No skip link.** Add `<a href="#main" class="skip-link">Skip to main content</a>` as the first body element. Required for keyboard users.
7. **Section anchors and sticky nav.** If/when the top nav becomes sticky, add `scroll-margin-top` to all `id`-bearing sections so WCAG 2.4.11 (focus not obscured) holds. Currently nav is non-sticky — fine, but document the constraint.
8. **CTA target size on mobile — verify, don't assume.** `.primaryButton`/`.secondaryButton` padding `0.8rem 1.15rem` plus `~1rem` font-size and `~1.4` line-height computes to ~48 CSS px height — comfortably above WCAG 2.5.8 (24px) and Apple HIG (44pt). But the secondary button on the FAQ link block, footer link rows, and inline anchors should be measured directly in DevTools at 375px viewport. Lock the rule: every interactive target in CSS modules must compose to ≥44px tall.
9. **Hero copy is dense.** Both pages have hero lead + hero text + hero credibility + metric list + dual CTAs in one viewport. Consider promoting outcome metrics above the fold and demoting credibility paragraphs to a tighter line.
10. **Inline SVG icons are unlabelled when used as links.** Footer link `<a>` elements get visible label text alongside the icon — good. But verify every icon-only interactive element has an accessible name (none found in current code, but lock the rule for future work).
11. **`scroll-margin-top: 5.5rem` on sections** — magic number. Tie it to the actual nav height variable so the two stay in sync.
12. **No `lang` switching infra** — fine for now (English-only), but if RU is added per business plan, retrofit will touch `metadata`, JSON-LD, and `Intl.*` formatting. Plan once, not twice.
13. **No automated a11y/Lighthouse gate.** `npm run check` covers lint/types/tests/build but not Lighthouse / axe. Adding `lhci` or `@axe-core/cli` to CI would catch contrast and tap-target regressions automatically.
14. **Stale article routes.** `app/why-engineering-is-slow/`, `app/why-hiring-more-engineers-doesnt-help/`, `app/why-nothing-ships/`, `app/about/` exist but aren't in either landing's nav. Either link them (insights/blog index) or delete — invisible pages dilute SEO.

### Concrete next changes (ordered by leverage)
1. Add skip link + `prefers-reduced-motion` block to `globals.css`.
2. Extract spacing/type tokens; replace literal `rem` values in module CSS.
3. Migrate color tokens to OKLCH; add dark-mode tokens.
4. Add Lighthouse CI gate to `npm run check`.
5. Decide stale article routes: link or delete.

### Sample token migration (drop-in for `globals.css`)

```css
:root {
  /* Color — OKLCH, derived from current --text/--muted/--surface */
  --color-text:           oklch(20% 0.01 270);   /* was #202124 */
  --color-text-strong:    oklch(12% 0.01 270);   /* was #111111 */
  --color-muted:          oklch(42% 0.01 260);   /* was #555a61 */
  --color-border:         oklch(91% 0.005 260);  /* was #e3e5e8 */
  --color-border-strong:  oklch(82% 0.01 260);   /* was #c9ced6 */
  --color-surface:        oklch(100% 0 0);
  --color-surface-alt:    oklch(97% 0.003 90);
  --color-surface-strong: oklch(95% 0.005 90);
  --color-bg:             oklch(100% 0 0);

  /* Spacing — 8px rhythm (1 unit = 0.5rem = 8px) */
  --space-1: 0.5rem;   --space-2: 1rem;     --space-3: 1.5rem;
  --space-4: 2rem;     --space-6: 3rem;     --space-8: 4rem;
  --space-12: 6rem;

  /* Type scale */
  --fs-xs:  0.85rem;   --fs-sm:  0.95rem;   --fs-md:  1rem;
  --fs-lg:  1.18rem;   --fs-xl:  1.5rem;
  --fs-h3:  clamp(1.4rem, 2.5vw, 1.8rem);
  --fs-h2:  clamp(1.7rem, 5vw,   2.6rem);
  --fs-h1:  clamp(2.5rem, 8vw,   4.8rem);

  --lh-tight:  1.1;
  --lh-normal: 1.5;
  --lh-loose:  1.7;

  /* Motion (Material 3 subset) */
  --dur-short:    150ms;
  --dur-medium:   300ms;
  --dur-long:     500ms;
  --ease-standard:           cubic-bezier(0.2, 0, 0, 1);
  --ease-emphasized-enter:   cubic-bezier(0.05, 0.7, 0.1, 1);
  --ease-emphasized-exit:    cubic-bezier(0.3, 0, 0.8, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Skip link — first child of <body>, see audit gap #6 */
.skip-link {
  position: absolute; top: -40px; left: 0;
  background: var(--color-text-strong); color: var(--color-surface);
  padding: var(--space-1) var(--space-2);
  z-index: 100;
}
.skip-link:focus-visible { top: 0; }
```

OKLCH values above are conservative conversions from the existing hex tokens; tune `L` and `C` once you have a target dark-mode pair.

---

## How to apply this in this repo

- Both landing pages must satisfy §1, §4, §6, §7 before any visual change is merged.
- New components encode tokens (spacing, type scale, color) instead of literals — see audit gap #1.
- Every UI task ends with: `npm run check` (see [`engineering-checks.md`](./engineering-checks.md)) + a Lighthouse pass.
- New copy passes the §10 microcopy rules; new forms pass §8.

---

## Sources (primary first)

### Primary specs
- [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/)
- [What's New in WCAG 2.2 — W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [WCAG 2.3.3 Animation from Interactions — W3C](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions)
- [W3C language tags guide](https://www.w3.org/International/articles/language-tags/)
- [Core Web Vitals — web.dev](https://web.dev/articles/vitals)
- [OKLCH on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch)
- [Lighthouse SEO checks — Chrome for Developers](https://developer.chrome.com/docs/lighthouse/seo/)

### NN/g (UX research)
- [10 Usability Heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Microcontent: Headlines, Page Titles, Subject Lines](https://www.nngroup.com/articles/microcontent-how-to-write-headlines-page-titles-and-subject-lines/)
- [Empty State Interface Design](https://www.nngroup.com/articles/empty-state-interface-design/)
- [State of UX 2026](https://www.nngroup.com/articles/state-of-ux-2026/)

### Forms / conversion (verified case studies)
- [Baymard — Checkout flow average form fields](https://baymard.com/blog/checkout-flow-average-form-fields)
- [Wroblewski — Inline Validation in Web Forms (A List Apart, original research)](https://alistapart.com/article/inline-validation-in-web-forms/)
- [Wroblewski — Touch Target Sizes (LukeW research roundup)](https://www.lukew.com/ff/entry.asp?1085=)
- [Smashing Magazine — Mobile form design best practices](https://www.smashingmagazine.com/2018/08/best-practices-for-mobile-form-design/)
- [VWO — Yuppiechef A/B test, removing nav menu](https://vwo.com/blog/a-b-testing-case-study-navigation-menu/)
- [HubSpot — Should you remove navigation from landing pages?](https://blog.hubspot.com/marketing/landing-page-navigation-ht)
- [MarketingExperiments — Form field length / cost-per-lead](https://marketingexperiments.com/lead-generation/lead-generation-testing-form-field-length-reduces-cost-per-lead-by-10-66)
- [CXL — Should you use navigation on landing pages?](https://cxl.com/blog/use-navigation-landing-pages-data-driven-consideration/)

### Statistics / market data
- [StatCounter — Desktop vs Mobile vs Tablet, global](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet)

### Motion / design tokens
- [Material Foundation — motion tokens JSON (verified durations + easings)](https://github.com/material-foundation/material-tokens/blob/json/json/motion.json)
- [Material Design 3 — Easing & duration overview](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs)

### Russian-language sources
- [Habr 1027874 — Шрифты для сайтов в России в 2026](https://habr.com/ru/articles/1027874/)
- [Habr 958610 — Лендинги с высокой конверсией: от теории к практике](https://habr.com/ru/articles/958610/)
- [Habr 1011210 — Дизайн в 2026: скорость без смысла не работает](https://habr.com/ru/articles/1011210/)

### Color
- [Smashing — OKLCH color spaces and gamuts](https://www.smashingmagazine.com/2023/08/oklch-color-spaces-gamuts-css/)

### Design systems & references
- [Material 3](https://m3.material.io)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Shopify Polaris](https://polaris.shopify.com)
- [IBM Carbon](https://carbondesignsystem.com)
- [USWDS — Typography](https://designsystem.digital.gov/components/typography/)

### Secondary / overview
- [UX Design Institute — 7 UX design principles 2026](https://www.uxdesigninstitute.com/blog/ux-design-principles-2026/)
- [Slickplan — IA trends 2026](https://slickplan.com/blog/information-architecture-trends)
- [Lovable — Website navigation best practices](https://lovable.dev/guides/website-navigation-best-practices-that-convert)
