# Design Best Practices

Reference for landing-page and product UI work. Compiled from primary sources (W3C, Nielsen Norman Group, web.dev, MDN, Baymard, Smashing) — full source list at the bottom.

Use as a checklist during design and review. Numbers in *italics* are verified against primary sources; numbers without provenance are intentionally omitted.

---

## 1. Conversion (landing pages)

### Core levers
- **One page, one goal.** Strip non-essential navigation. *Yuppiechef A/B test: removing the menu lifted conversion 3% → 6% (+100%) on a Wedding Registry landing — but VWO's case study reports no sample size, duration, or p-value, so treat it as suggestive, not definitive. HubSpot's multi-page test was more modest: +16–28% lift on MoF pages, ~0–4% on ToF pages.* Treat removing nav as a hypothesis to test, not a guaranteed double.
- **Mobile-first, not "responsive-adjusted".** *StatCounter, April 2026: mobile 52.8% / desktop 45.61% / tablet 1.59% globally — with strong regional skew (Africa 79% mobile, Japan ~37%, US ~54%).* Design and review on a 375–390px viewport before desktop.
- **Speed is conversion.** Track Core Web Vitals (see §8).
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

## 2. Persuasion psychology

Rules below are anchored to primary sources. Where a number is widely repeated but not traceable to a primary study, it is omitted or flagged.

### Cialdini's 7 principles (*Influence*, 1984; 7th in *Pre-Suasion*, 2016)
- **Reciprocity** — people repay what they receive. *Landing:* ungated tool, template, calculator, or audit before any ask. Free first, ask second.
- **Commitment & Consistency** — people honor prior small commitments. *Landing:* micro-yes ladder — newsletter → free tool → trial → paid. Multi-step forms with a trivial first step outperform single forms when the first step is the lowest-friction one (*suggestive — secondary case-study evidence; Cialdini, 1984, on the underlying mechanism*).
- **Social Proof** — under uncertainty, people copy similar others. *Landing:* show specific, named, role-matched proof ("CTO at [company you've heard of]") above generic logo walls. Vanity counts ("10,000+ users") are weakest; outcome quotes from a peer ICP are strongest.
- **Authority** — people defer to credible experts. *Landing:* surface credentials only when ICP recognizes them (certifications, named publications, conference talks). Generic "experts agree" badges read as noise.
- **Liking** — people say yes to those they like. *Landing:* founder photo + first-person story; voice that matches the ICP's vocabulary; avoid corporate third-person on founder-led products.
- **Scarcity** — people value what is rare. *Landing:* use only when genuine (seats in a cohort, fixed inventory, real deadline). Fabricated countdowns now fall under FTC and EDPB dark-pattern guidance — see below.
- **Unity (2016)** — shared identity, not similarity. *Landing:* "for [specific identity]" framing ("for technical founders", "for indie SaaS") beats "for everyone." *Cialdini, Pre-Suasion, 2016.*

### Fogg Behavior Model — B = MAP (BJ Fogg, *Tiny Habits*, 2019; behaviormodel.org)
- **Behavior happens when Motivation, Ability, and Prompt converge at the same moment.** A missing prompt is the most common failure mode on landing pages — users with high motivation and ability still don't act without a clear, present CTA.
- **Increase Ability before Motivation.** It is usually cheaper to reduce friction (autofill, SSO, fewer fields, no credit card) than to raise desire with more copy. The button people *can* click beats the button they *want* to click.
- **Place the prompt where motivation peaks** — directly after the value proposition, after the proof block, and after the FAQ that resolved the last objection. Three prompts on a long page is normal; same label, same style.

### Loss aversion & framing (Kahneman & Tversky, "Prospect Theory," *Econometrica* 47(2), 1979)
- **Losses weigh roughly 2× equivalent gains** in the value function. *CTA copy:* "Stop losing leads" / "Don't miss…" can outperform "Get more leads" when the audience already feels the loss; "Get…" wins when they don't. Test against your ICP, not in the abstract. *Note: Prospect Theory is about decisions under risk — applying it to marketing copy is extrapolation, not direct finding.*
- **Frame the cost of inaction concretely** — show what stays broken if they don't act, not abstract benefits if they do.

### Anchoring (Tversky & Kahneman, "Judgment under Uncertainty," *Science* 185(4157), 1974)
- **First number seen sets the reference.** On a pricing page, show the highest tier first (left in LTR, or as the visually heaviest) so the middle tier reads as reasonable.
- **Decoy / asymmetric dominance:** an inferior third option near your target tier makes the target look better. *Huber, Payne & Puto, J. Consumer Research 9(1), 1982.* Use ethically — the decoy must be a real, available option.
- **Anchoring is robust even when users know about it** (Tversky & Kahneman, 1974) — which is exactly why the EDPB flags manipulative defaults.

### Social proof — what works
- **Specific > generic.** Named person + role + company + outcome > "great product!" > star ratings > follower counts.
- **Role-matched > prestigious.** A quote from a peer in the same ICP converts better than one from a famous name in a different segment (*suggestive — consistent with Cialdini's similarity finding, 1984*).
- **Hard numbers only when verifiable.** "Processed $X in payments," "Cut onboarding from 3 days to 2 hours at [Company]" — vague "thousands of happy customers" reads as filler.
- **Logo walls work only if the ICP recognizes the logos.** Otherwise they're decoration.

### Scarcity & urgency — when ethical, when dark pattern
- **Ethical:** real cohort size, real deadline, real inventory, real pricing change. State the reason ("12 seats per cohort so I can review each application").
- **Dark pattern under EU and US guidance:** fake countdown timers that reset, "only 2 left!" with unlimited inventory, false low-stock messaging, false urgency banners. *FTC, Bringing Dark Patterns to Light, Sept 2022* — flags these as deceptive; *EDPB, Guidelines 03/2022 on deceptive design patterns, final v2.0, Feb 2023* — categorizes them as manipulative interface design.
- **Test for dark-pattern risk:** if the scarcity claim would be false the moment a regulator measured it, remove it.

### Reciprocity in B2B / SaaS
- **Ungated > gated** for top-of-funnel content when the goal is trust. Gate only assets where the user's intent is already proven (templates that need integration, ROI calculators that need company data).
- **Free tools > whitepapers.** A working tool delivers value in seconds; a 30-page PDF asks for a 20-minute investment in exchange for nothing returned yet.

### Commitment & consistency — multi-step vs. single form
- **Split the form when the first step is genuinely the easiest** (email only, or a single choice). Splitting a form into 5 equally hard steps just adds friction.
- **Pre-fill what you can infer** (geo, currency, plan from the URL the user came from) so step 1 is review-and-confirm rather than entry.

### Authority
- **Credentials that match the buyer's vocabulary.** SOC 2 / ISO 27001 for security buyers; named conference talks for technical buyers; press logos only if the publication is one the ICP reads.
- **Expert quotes need a face and a title** — anonymous "experts say" reads as fabricated.

### Liking
- **Founder photo + first-person story** on founder-led products. Replace stock photography with real team photos; users detect stock imagery and discount everything around it (*suggestive — strong heuristic, weak primary evidence*).

### Peak–end rule (Kahneman, Fredrickson, Schreiber & Redelmeier, *Psychological Science* 4(6), 1993; Redelmeier & Kahneman, *Pain* 66(1), 1996)
- **Design the peak and the end of every flow.** Post-purchase confirmation, error recovery, and empty states disproportionately shape memory of the product. A delightful success screen offsets a mediocre middle.
- **End errors on a recovery action, not the apology.** "Couldn't save — [Retry] [Save as draft]" ends on capability, not failure.

### Cognitive load (Sweller, "Cognitive load during problem solving," *Cognitive Science* 12(2), 1988)
- **Reduce extraneous load:** remove decorative imagery near forms, collapse optional fields, use one column.
- **Chunk by meaning, not by count.** Group fields by what the user is thinking about (contact info, billing, shipping), not by a fixed number per group.
- **"Miller's 7±2" applied to nav is a misapplication** — Miller's 1956 paper was about working-memory span for digits/letters/words; Cowan (2001) revised the effective figure to ~4 chunks. Don't cite 7±2 to justify menu length. *Miller, Psychological Review 63(2), 1956; Cowan, Behavioral and Brain Sciences 24(1), 2001.*

### Goal-gradient effect (Hull, *Journal of Comparative Psychology* 14, 1932; Kivetz, Urminsky & Zheng, *Journal of Marketing Research* 43(1), 2006)
- **Effort accelerates near the goal.** Multi-step forms and onboarding should show progress and, where honest, start with the bar partially filled. Kivetz et al. (2006) showed coffee-card holders bought faster as they neared a reward, including with "endowed progress" (a card with 2-of-12 stamps pre-filled converted faster than a 0-of-10 card despite equal remaining work). *Transfer from loyalty cards to SaaS onboarding is plausible but not directly studied — treat as suggestive.*
- **Progress UI must be honest about remaining work.** Faking a near-complete bar to push submission falls under the same dark-pattern category as fake urgency.

---

## 3. UX heuristics — Nielsen Norman, exact wording

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

## 4. Information architecture & navigation

- **Pick the navigation pattern at launch** that fits the *expected* growth. Retrofitting nav is one of the most expensive redesigns.
- **Vertical or hybrid nav** for B2B / docs / multi-service. **Horizontal minimal** for single-purpose landing.
- **The 4 IA components** (Rosenfeld): organization, labeling, navigation, search. Audit each separately.
- **Section anchors must use stable IDs and `scroll-margin-top`** so anchored landings don't hide under sticky headers.
- **Breadcrumbs** for hierarchies > 2 levels deep; not needed on flat landing pages.
- **One sticky element max** (header *or* CTA, not both, on mobile).

---

## 5. Typography & spacing

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

## 6. Visual hierarchy

Beyond type scale, hierarchy is built from perceptual grouping, pre-attentive features, and reading-pattern fit. Use the strongest cue for the most important element, not several weak ones layered.

### Gestalt grouping (use on screen UI)
- **Proximity over boxes.** Group related controls by spacing them ~2× closer to each other than to neighbors; only add borders/cards if proximity is not enough. *Wertheimer, "Untersuchungen zur Lehre von der Gestalt II," Psychologische Forschung, 1923; Koffka, Principles of Gestalt Psychology, 1935.*
- **Similarity = same role.** Buttons that do the same job must share shape, color, and weight; differentiate visual style only when the action differs (primary vs. secondary vs. destructive). *Wertheimer, 1923.*
- **Common region.** Wrap related items in a shared background/card before you reach for dividers — enclosure groups more strongly than lines. *Palmer, "Common region: A new principle of perceptual grouping," Cognitive Psychology 24(3), 1992.*
- **Continuity.** Align CTAs, headings, and form fields on a small number of vertical axes; the eye follows the implied line and treats off-axis elements as a separate group. *Wertheimer, 1923.*
- **Closure.** Partial shapes (a card with one open side, an arrow with a missing stroke) are perceived as complete — use to suggest "more" without drawing the whole control.
- **Figure/ground.** Primary CTA must be unambiguous figure: solid fill, higher contrast, and no competing high-contrast element within the same viewport.
- **Common fate (motion variant).** Elements that animate together read as one group; do not animate unrelated UI on the same trigger.

### Pre-attentive features (processed in <250 ms, before conscious attention)
- **Use one pre-attentive cue per emphasis.** Stacking color + size + weight on one element is fine; using all of them on three elements destroys hierarchy. Confirmed pre-attentive features include hue, intensity, orientation, length/size, curvature, enclosure, motion, and flicker. *Treisman & Gelade, "A feature-integration theory of attention," Cognitive Psychology 12(1), 1980; Healey & Enns, "Attention and Visual Memory in Visualization and Computer Graphics," IEEE TVCG 18(7), 2012.*
- **Color hue is the strongest single emphasizer** on an otherwise neutral page — reserve one accent hue for the action you want taken. Adding a second accent halves its power.
- **Enclosure beats underline.** A pill or chip around a label pops harder than bold or color on the label alone (Healey & Enns, 2012).
- **Motion captures attention involuntarily** — use only for state changes the user needs to notice (errors, async completion). Idle animation near a CTA steals attention from it; respect `prefers-reduced-motion`.

### Reading-pattern fit
- **F-pattern applies to text-heavy, weakly-formatted pages** (blog, docs, long-form). Front-load the first 2–3 words of headings and paragraphs with the keyword. *Nielsen, "F-Shaped Pattern For Reading Web Content," NN/g, 2006; "How People Read Online: New and Old Findings," NN/g, 2019.*
- **Good formatting prevents F-scanning.** Headings, bold lead-ins, and bullets shift users to "layer-cake" or "spotted" scanning, both of which retain more content. *NN/g, 2019.*
- **Z-pattern is a design heuristic, not eye-tracking evidence.** Apply it only to sparse, single-screen layouts (hero + one CTA); do not cite it as research. *No primary eye-tracking source — suggestive, not definitive.*
- **Above the fold still concentrates attention,** but less than it used to: ~57% of viewing time above the fold, ~74% in the first two screenfuls (≤2160 px). Put the value proposition and primary CTA in the first screen; do not assume nothing below is seen. *Fessenden, "Scrolling and Attention," NN/g, 2018.*

### Fitts's Law (Fitts, "The information capacity of the human motor system," *Journal of Experimental Psychology* 47(6), 1954)
- **MT = a + b·log₂(D/W + 1).** Acquisition time falls with larger targets and shorter travel. For the primary CTA: make it the largest interactive element in the viewport and place it on the dominant reading axis, not in a corner the user must cross the page to reach.
- **Minimum target 24×24 CSS px (WCAG 2.2 AA, SC 2.5.8).** Aim 44×44 for primary touch targets (WCAG 2.5.5 AAA / Apple HIG). *W3C WCAG 2.2, 2023.*
- **Screen edges are infinite targets** on desktop (cursor stops). Sticky bottom CTAs on mobile exploit the same property.

### Hick's Law (Hick, "On the rate of gain of information," *QJEP* 4(1), 1952; Hyman, *JEP* 45(3), 1953)
- **RT = b·log₂(n+1)** for equally probable, unfamiliar choices. Decision time grows logarithmically, not linearly, so 10 options ≠ 5× worse than 2 — but the law breaks down for familiar/well-organized lists. *Suggestive when applied to nav menus: Hick's experiments used unfamiliar light-key mappings, not labeled menu items.*
- **Practical rule:** one primary CTA per viewport, ≤5 top-level nav items on a landing page, no parallel "or" choices in the hero. The constraint is attention budget more than literal reaction time.

### Visual weight — priority order in practice
When two elements compete, the higher-ranked wins. Order is a tie-breaker, not a law — context (idle dashboard vs. landing hero) can shift which cue dominates. Strongest first:
1. **Motion / flicker** (involuntary capture; use sparingly).
2. **Color contrast against the page** (hue + luminance vs. background).
3. **Size** (largest object in the viewport).
4. **Enclosure / solid fill** (pill, chip, filled button vs. ghost).
5. **Position** (top-left in LTR; centered hero axis).
6. **Whitespace around the element** (isolation = importance).
7. **Weight / boldness of type.**
8. **Underline / icon decoration.**

*Ranking derived from Healey & Enns (2012) feature-conjunction findings + Gestalt figure/ground.*

### Whitespace, alignment, grid
- **Whitespace around an element raises its perceived importance** — isolate the CTA with ≥1.5× the spacing of surrounding elements. Comprehension research is mostly indirect (legibility, reading speed); treat conversion-lift claims for "more whitespace" as *suggestive*.
- **Optical alignment beats mathematical alignment** for round shapes, triangles, and italic type — shift them ~1–2 px so they *look* aligned with rectangular neighbors.
- **Use a baseline grid only when type-density justifies it** (editorial, docs). On product UI, an 8 px (or 4 px) spacing scale plus consistent line-height usually delivers the same calm without baseline-snapping overhead.
- **Limit alignment axes.** A landing page should rarely use more than 2–3 vertical alignment lines; every extra axis is a new perceptual group.

### Color and contrast as hierarchy (beyond a11y minima)
- **WCAG 2.2 AA contrast is a floor, not a target:** 4.5:1 for body text, 3:1 for ≥24 px or ≥18.66 px bold, 3:1 for UI components and graphical objects. *W3C WCAG 2.2, SC 1.4.3 / 1.4.11.*
- **One accent hue, one neutral ramp.** A second accent splits attention; if you need a second, desaturate it so only the primary reads as "action."
- **Reserve maximum contrast for the primary CTA and critical errors.** Body text at maximum contrast competes with the CTA.

### Mobile vs. desktop scanning
- **Mobile readers spend more effort per word**: ~30 ms longer per word on difficult content than on desktop. Shorten sentences, front-load keywords, and chunk aggressively. *Pernice, "How People Read Online: The Eyetracking Evidence," NN/g, 2019 update.*
- **Design and review on a 375–390 px viewport first.** Single-column, sticky primary CTA, tap targets ≥44 px, no hover-only affordances.
- **Thumb zones matter more than visual centers** on mobile — keep primary action in the bottom third or as a sticky bar; relegate destructive actions away from the thumb arc.

---

## 7. Color (OKLCH-first)

- **Use OKLCH for tokens, not HSL/RGB.** OKLCH is perceptually uniform: equal `L` shifts produce equal perceived lightness shifts across hues. HSL has "dead grey zones" in gradients and inconsistent lightness across hues. OKLCH is Baseline Widely Available since May 2023.
- **Tokens shape**: `oklch(L C H)` with L in 0–100%, C in 0–0.4, H in 0–360°.
- **Generate variants relatively**: `oklch(from var(--brand) calc(l + 0.15) c h)` for hover/active/disabled states.
- **Wider gamut**: OKLCH covers the Display P3 gamut, ~50% more colors than sRGB on capable displays.
- **Dark mode**: derive by flipping `L` semantically (e.g. surface 98% → 8%), not by inverting RGB.
- **Test for color blindness**: never rely on hue alone for state (error/success). Pair with icon + text.

---

## 8. Performance (Core Web Vitals — verified thresholds)

Measured at the **75th percentile** across mobile and desktop, per web.dev.

| Metric | Good | What it measures |
|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | When the main content first renders |
| **INP** (Interaction to Next Paint) | ≤ 200ms | Responsiveness across all interactions; replaced FID in 2024 |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | Unexpected visual movement |

Operational rules:
- Always set explicit `width`/`height` on `<img>` / `next/image` to reserve space → CLS stays low.
- Self-host fonts or use `font-display: swap`; subset to needed glyphs.
- Defer or async non-critical scripts (analytics, marketing pixels, third-party widgets).
- For Next.js static export: avoid client-side JS for content that can be static.
- Run Lighthouse on every UI change. Target Performance / Accessibility / Best Practices / SEO ≥ 95.

---

## 9. Accessibility — WCAG 2.2 AA target

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

## 10. Forms

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

## 11. States: empty, loading, error, success

- **Empty state ≠ blank space.** Explain what would be here, why it's empty, and the next action ("Add your first project" + button).
- **Loading**: real progress indicators when system is working. Never show a "no records" message before data arrives — NN/g flags this as a trust-killer.
- **Error**: mirror NN/g heuristic 9 — plain language, point at what's wrong, suggest what to do. Never "Error 0x80004005".
- **Success**: confirm what just happened, what to do next. Don't disappear silently.
- **Skeleton screens** > spinners for predictable layouts; spinners only when the layout is unknown.

---

## 12. Microcopy (NN/g rules, condensed)

- **Front-load.** First two words carry the line for scanners.
- **Concrete > clever.** "Post-traumatic stress disorder healed by birds" beats "Alternative treatment for PTSD" (NN/g example).
- **No clickbait.** Tease only what the content actually delivers.
- **Voice = same writer everywhere.** Buttons, errors, empty states, confirmations should sound like one person.
- **Read every CTA out loud.** If it could be on any page, rewrite it.

---

## 13. Motion & animation

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

## 14. SEO basics (verified Lighthouse audits)

- `<meta name="description">` non-empty, ~150–160 chars.
- Canonical tag (`<link rel="canonical">`) on every page.
- `hreflang` tags for multi-language sites.
- Structured data (JSON-LD `@type` matching the page: `Person`, `ProfessionalService`, `FAQPage`, etc.).
- Descriptive link text — never "click here" / "read more" alone.
- Successful HTTP status; valid `robots.txt`; tap targets adequately sized.
- Open Graph + Twitter card metadata for share previews.

---

## 15. Internationalization (when adding RU/other locales)

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

## 16. Reference sites (look at these, don't reinvent)

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

## How to apply this

- Treat §1, §2, §5, §6, §8, §9 as gating: a page that fails any of these isn't ready to ship.
- Encode design decisions as tokens (spacing, type scale, color, motion); avoid literals in component CSS.
- Every UI change ends with a verification pass: lint, type-check, automated tests, build, and Lighthouse (Performance / Accessibility / Best Practices / SEO ≥ 95).
- Copy passes §12; forms pass §10; states pass §11.

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

### Persuasion psychology
- Cialdini, *Influence: The Psychology of Persuasion*, 1984.
- Cialdini, *Pre-Suasion: A Revolutionary Way to Influence and Persuade*, 2016.
- [BJ Fogg Behavior Model — behaviormodel.org](https://behaviormodel.org/); Fogg, *Tiny Habits*, 2019.
- Kahneman & Tversky, "Prospect Theory: An Analysis of Decision under Risk," *Econometrica* 47(2), 1979.
- Tversky & Kahneman, "Judgment under Uncertainty: Heuristics and Biases," *Science* 185(4157), 1974.
- Huber, Payne & Puto, "Adding Asymmetrically Dominated Alternatives," *Journal of Consumer Research* 9(1), 1982.
- Kahneman, Fredrickson, Schreiber & Redelmeier, "When More Pain Is Preferred to Less," *Psychological Science* 4(6), 1993.
- Redelmeier & Kahneman, "Patients' memories of painful medical treatments," *Pain* 66(1), 1996.
- Miller, "The Magical Number Seven, Plus or Minus Two," *Psychological Review* 63(2), 1956.
- Cowan, "The magical number 4 in short-term memory," *Behavioral and Brain Sciences* 24(1), 2001.
- Sweller, "Cognitive load during problem solving," *Cognitive Science* 12(2), 1988.
- Hull, "The goal-gradient hypothesis," *Journal of Comparative Psychology* 14, 1932.
- Kivetz, Urminsky & Zheng, "The Goal-Gradient Hypothesis Resurrected," *Journal of Marketing Research* 43(1), 2006.

### Visual hierarchy & perception
- Wertheimer, "Untersuchungen zur Lehre von der Gestalt II," *Psychologische Forschung*, 1923.
- Koffka, *Principles of Gestalt Psychology*, 1935.
- Palmer, "Common region: A new principle of perceptual grouping," *Cognitive Psychology* 24(3), 1992.
- Treisman & Gelade, "A feature-integration theory of attention," *Cognitive Psychology* 12(1), 1980.
- [Healey & Enns, "Attention and Visual Memory in Visualization and Computer Graphics," IEEE TVCG 18(7), 2012](https://www.csc2.ncsu.edu/faculty/healey/download/tvcg.11.pdf)
- Fitts, "The information capacity of the human motor system," *Journal of Experimental Psychology* 47(6), 1954.
- Hick, "On the rate of gain of information," *Quarterly Journal of Experimental Psychology* 4(1), 1952.
- Hyman, "Stimulus information as a determinant of reaction time," *Journal of Experimental Psychology* 45(3), 1953.
- NN/g — Nielsen, "F-Shaped Pattern For Reading Web Content," 2006.
- NN/g — "How People Read Online: New and Old Findings," 2019.
- NN/g — Fessenden, "Scrolling and Attention," 2018.
- NN/g — Pernice, "How People Read Online: The Eyetracking Evidence," 2019.

### Dark patterns guidance
- [FTC — Bringing Dark Patterns to Light, Sept 2022](https://www.ftc.gov/reports/bringing-dark-patterns-light)
- EDPB — *Guidelines 03/2022 on deceptive design patterns in social media platform interfaces*, final v2.0, Feb 2023.

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
