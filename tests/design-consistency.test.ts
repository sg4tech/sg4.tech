import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const read = (...parts: string[]) => readFileSync(join(root, ...parts), "utf8");

const blogPostSlugs = readdirSync(join(root, "app", "(en)", "blog"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

const landingPages = ["yii2", "ai-vibecoding"] as const;

describe("blog article headings", () => {
  it("finds the blog posts", () => {
    expect(blogPostSlugs.length).toBeGreaterThan(0);
  });

  // `balance` splits a two-line h2 into two half-width lines, leaving the
  // heading visibly narrower than the reading column. `pretty` fills the first
  // line and only guards against a lone last word.
  it.each(blogPostSlugs)("%s body h2 fills the reading column", (slug) => {
    const css = read("app", "(en)", "blog", slug, "page.module.css");
    const h2Rule = css.split(".body h2 {")[1]?.split("}")[0] ?? "";

    expect(h2Rule).toContain("text-wrap: pretty;");
    expect(h2Rule).not.toContain("text-wrap: balance;");
  });
});

describe("landing 'How I work' section", () => {
  // One numbered row, rendered by the shared Steps component — the same
  // pattern as the homepage — instead of a summary strip followed by cards
  // that repeat the same step titles.
  it.each(landingPages)("/%s renders its process steps once, via Steps", (page) => {
    const tsx = read("app", "(en)", page, "page.tsx");

    expect(tsx).toMatch(/from "(\.\.\/)+components\/Steps"/);
    // Carded steps keep the landing's visual anchor while sharing the pattern.
    expect(tsx).toContain('<Steps\n        variant="card"');
    expect(tsx).not.toContain("processVisual");
    expect(tsx).not.toContain("processWrapper");
  });

  // Bare browser disc bullets read as unstyled; MarkList carries the DS marker.
  it.each(landingPages)("/%s uses MarkList instead of bare bullet lists", (page) => {
    const tsx = read("app", "(en)", page, "page.tsx");

    expect(tsx).toMatch(/from "(\.\.\/)+components\/MarkList"/);
    expect(tsx).not.toContain("landing.problemList");
  });
});

describe("Steps component", () => {
  it("offers a card variant and keeps the plain layout as the default", () => {
    const tsx = read("app", "components", "Steps.tsx");
    const css = read("app", "components", "Steps.module.css");

    expect(tsx).toContain('variant = "plain"');
    expect(tsx).toContain('variant === "card"');
    expect(css).toMatch(/\.card \.step[,\s{]/);
  });
});

describe("homepage case studies", () => {
  const tsx = read("app", "(en)", "page.tsx");
  const caseStudies = tsx.split("const caseStudies = [")[1]?.split("\n];")[0] ?? "";
  const resultsSection = tsx.split("function ResultsSection() {")[1]?.split("\n}\n")[0] ?? "";

  // The numbers are the proof: they lead each case as Stat figures instead of
  // sitting third in a checklist next to qualitative outcomes.
  it("leads each case with Stat headline metrics", () => {
    expect(caseStudies.match(/metrics: \[/g)).toHaveLength(3);
    expect(resultsSection).toContain("<Stat figure={metric.figure}");
  });

  // Qualitative outcomes join the same row as icon-led Stats, so there is no
  // separate Result column left holding a single line.
  // Two bulleted lists under every case made the cards tall and heavy. The
  // same phrases now sit as two muted lines, so the numbers lead and the
  // detail reads as a footnote, at every width.
  it("sets Problem and What I did as two muted lines, not lists", () => {
    expect(resultsSection).not.toContain("<MarkList");
    expect(resultsSection).toContain("<dl className={styles.caseDetails}>");
    expect(resultsSection).toContain('{study.problem.join(" · ")}');
    expect(resultsSection).toContain('{study.work.join(" · ")}');
    const css = read("app", "(en)", "page.module.css");
    expect(css).toMatch(/\.caseDetails dd \{[^}]*color: var\(--muted\);/);
    expect(css).not.toContain(".caseGrid");
  });

  // Full-width cards left half of each frame empty on desktop. From 1100px the
  // three cases sit side by side with outcomes stacked, and subgrid lines up
  // header, outcomes and details across the row even when a title wraps.
  it("lays the cases out in three aligned columns on wide screens", () => {
    const wide = read("app", "(en)", "page.module.css").split("@media (min-width: 1100px)").slice(1).join("");
    expect(wide).toMatch(/\.stack \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
    expect(wide).toMatch(/\.caseStudy \{[^}]*grid-template-rows: subgrid;/);
    expect(wide).toMatch(/\.caseMetrics \{[^}]*flex-direction: column;/);
    // A stretched header row must not spread title and company apart.
    expect(wide).toMatch(/\.caseHeader \{[^}]*align-content: start;/);
  });

  it("keeps every outcome in the metrics row, with no separate Result column", () => {
    expect(caseStudies).not.toContain("result: [");
    expect(resultsSection).not.toContain("<h4>Result</h4>");
    expect(resultsSection).toContain("icon={metric.icon}");
  });
});

describe("mobile layout", () => {
  const block = (css: string, selector: string) => css.split(`${selector} {`)[1]?.split("}")[0] ?? "";
  const mobile = (css: string) => css.split("@media (max-width: 640px)")[1] ?? "";

  it("keeps a 16px page gutter on phones", () => {
    const css = read("app", "components", "Page.module.css");
    expect(block(mobile(css), ".page")).toContain("width: min(100% - 2rem, var(--page-width));");
  });

});

describe("contrast of secondary graphics", () => {
  it("gives the ghost CTA button a solid ink outline on the ember block", () => {
    const css = read("app", "components", "Button.module.css");
    expect(css.split(".ghost {")[1]?.split("}")[0]).toContain("border-color: var(--gray-900);");
  });

  it("draws the lead-time histogram bars visibly against the card", () => {
    const css = read("app", "(en)", "blog", "forecast-delivery-with-percentiles", "page.module.css");
    expect(css.split(".distChart .dcBar {")[1]?.split("}")[0]).toContain("fill: var(--gray-400);");
  });
});

describe("homepage hero layout", () => {
  const css = read("app", "(en)", "page.module.css");
  const wide = css.split("@media (min-width: 1100px)").slice(1).join("");

  // The one-line headline left the left column mostly empty. On wide screens
  // the proof row fills it; on narrow screens the DOM order (CTA before
  // stats) is kept, so the button stays in the first screen.
  it("places the proof row in the left column on wide screens only", () => {
    expect(wide).toMatch(/\.heroLayout \{\s*display: contents;/);
    expect(wide).toMatch(/\.heroProof \{[^}]*grid-column: 1;/);
    expect(wide).toMatch(/\.heroSecondary \{[^}]*grid-column: 2;/);
    const narrow = css.split("@media (min-width: 1100px)")[0] ?? "";
    expect(narrow).not.toContain("display: contents;");
  });
});

describe("Stat note placement", () => {
  // A note stacked above one figure ("Up to") pushed that figure below its
  // neighbours. Inline before the figure, every figure shares one line.
  it("renders the note inline in the figure row", () => {
    const tsx = read("app", "components", "Stat.tsx");
    const header = tsx.split("className={styles.header}>")[1]?.split("</span>\n")[0] ?? "";
    expect(header).toContain("styles.note");
    expect(header.indexOf("className={styles.note}")).toBeLessThan(header.indexOf("className={styles.figure}"));
  });
});

describe("homepage link cards", () => {
  // Offer and featured-essay cards are links; an arrow says so at a glance.
  it("marks every specialization card with an arrow", () => {
    const tsx = read("app", "(en)", "page.tsx");
    const cards = tsx.match(/className=\{styles\.specializationCard\}/g) ?? [];
    const arrows = tsx.match(/<Icon icon=\{ArrowRight\} className=\{styles\.specializationArrow\} \/>/g) ?? [];
    expect(cards.length).toBeGreaterThan(0);
    expect(arrows).toHaveLength(cards.length);
  });
});

describe("layout batch: tap targets and alignment", () => {
  const rule = (css: string, selector: string) => css.split(`${selector} {`)[1]?.split("}")[0] ?? "";
  const landing = read("app", "styles", "landing.module.css");
  const blog = read("app", "components", "BlogPostLayout.module.css");
  const privacy = read("app", "(en)", "privacy", "page.module.css");

  // Small text links get a 44px-tall hit area through padding, cancelled by a
  // matching negative margin, so the visible layout does not move.
  it.each([
    ["blog back link", blog, ".backLink"],
    ["privacy back link", privacy, ".backLink"],
    ["footer legal link", read("app", "components", "FooterSection.module.css"), ".footerLegalLink"]
  ])("%s has a 44px hit area without shifting layout", (_name, css, selector) => {
    const r = rule(css, selector);
    expect(r).toContain("padding-block: var(--tap-pad);");
    expect(r).toContain("margin-block: calc(-1 * var(--tap-pad))");
  });

  it("gives the phone text-style secondary button the same hit area", () => {
    const css = read("app", "components", "Button.module.css");
    const mobile = css.split("@media (max-width: 640px)")[1] ?? "";
    const r = rule(mobile, ".secondary");
    expect(r).toContain("padding: var(--tap-pad) 0;");
    expect(r).toContain("margin-block: calc(-1 * var(--tap-pad));");
  });

  // inline-flex ignores margin-inline: auto, so the back link stuck to the
  // page edge instead of the 42rem reading column's left edge.
  it.each([["blog", blog], ["privacy", privacy]])("%s back link sits on the reading column", (_name, css) => {
    const r = rule(css, ".backLink");
    expect(r).toContain("width: fit-content;");
    expect(r).toContain("margin-inline: max(0px, (100% - 42rem) / 2) auto;");
  });

  it("does not draw a section divider directly under the nav", () => {
    const css = read("app", "components", "Section.module.css");
    expect(rule(css, "nav + .section")).toContain("border-top: 0;");
  });

  it("keeps proof card headers on one line across a row", () => {
    expect(landing).toMatch(/\.linkCard \{[^}]*align-content: start;/);
  });

  it("sets the Stat note in the readable secondary text colour", () => {
    expect(rule(read("app", "components", "Stat.module.css"), ".note")).toContain("color: var(--text-3);");
  });
});

describe("blog figure captions", () => {
  const localCaption = /\.(figureCaption|timelineCaption|distCaption|ladderCaption)\s*\{/;

  // Captions were styled per post: two greys (one below AA), two alignments.
  // One shared component keeps them identical and readable.
  it.each(blogPostSlugs)("%s uses the shared FigureCaption", (slug) => {
    const dir = join(root, "app", "(en)", "blog", slug);
    const tsx = readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => readFileSync(join(dir, f), "utf8")).join("\n");
    expect(tsx).not.toMatch(/<figcaption\b/);
    expect(read("app", "(en)", "blog", slug, "page.module.css")).not.toMatch(localCaption);
  });

  // Charts draw their frame on the whole figure, so the caption sits inside
  // it; image figures framed only the image, leaving the caption outside.
  it.each(["ai-made-starting-free-finishing-expensive", "ai-coding-agent-periphery-core", "diagnose-broken-engineering-delivery"])(
    "%s frames the whole image figure, caption included",
    (slug) => {
      const css = read("app", "(en)", "blog", slug, "page.module.css");
      const figure = css.split(".figure {")[1]?.split("}")[0] ?? "";
      const image = css.split(".figureImage {")[1]?.split("}")[0] ?? "";
      expect(figure).toContain("border: 1px solid var(--border);");
      expect(image).not.toContain("border");
    }
  );

  it("sets captions in the readable muted grey", () => {
    const css = read("app", "components", "FigureCaption.module.css");
    expect(css).toContain("color: var(--muted);");
    expect(css).not.toContain("--text-4");
  });
});

describe("/ai-vibecoding who-not-for list", () => {
  it("carries the same cross marker as the homepage 'Not a good fit'", () => {
    const tsx = read("app", "(en)", "ai-vibecoding", "page.tsx");
    expect(tsx).toContain('<MarkList items={whoNotForItems} kind="x" />');
    expect(tsx).not.toContain("styles.whoNotForItem");
  });
});

describe("homepage specialized offers", () => {
  // Two full-width cards left most of each frame empty on desktop; side by
  // side they fill the row, on the same breakpoint as Who I work with.
  it("sets the offer cards in two columns on wide screens", () => {
    const wide = read("app", "(en)", "page.module.css").split("@media (min-width: 1100px)").slice(1).join("");
    expect(wide).toMatch(/\.specializationGrid \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  });
});

describe("no duplicate navigation on the landings", () => {
  // The shared menu has Home on every page, so a "Back to main page" link
  // under it on the landings only repeated it.
  it.each([["yii2"], ["ai-vibecoding"]])("/%s drops the back link", (page) => {
    expect(read("app", "(en)", page, "page.tsx")).not.toContain("Back to main page");
  });

  it("removes the back-link styles from the shared landing stylesheet", () => {
    expect(read("app", "styles", "landing.module.css")).not.toContain(".backLink");
  });

  it("drops the repeated 'Dedicated page' label from the offer cards", () => {
    const page = read("app", "(en)", "page.tsx");
    expect(page).not.toContain("Dedicated page");
    expect(read("app", "(en)", "page.module.css")).not.toContain(".specializationLabel");
  });
});

describe("landing layout", () => {
  const yii2 = read("app", "(en)", "yii2", "page.tsx");
  const ai = read("app", "(en)", "ai-vibecoding", "page.tsx");
  const order = (src: string, names: string[]) => names.map((n) => src.indexOf(`<${n}`));

  // Quality and Speed were two identical 2x2 card grids back to back. One
  // section with two columns shows them as two stages of one plan.
  it("/yii2 shows Quality and Speed as two columns of one section", () => {
    const block = yii2.split("function LeversSection() {")[1]?.split("\n}\n")[0] ?? "";
    expect(block).toContain('id="quality"');
    expect(block).toContain('id="speed"');
    expect(block).toContain("className={landing.stageColumns}");
    // Heading, intro and list line up across the two columns even when one
    // heading wraps.
    const wide = read("app", "styles", "landing.module.css").split("@media (min-width: 1100px)").slice(1).join("");
    expect(wide).toMatch(/\.stageColumn \{[^}]*grid-template-rows: subgrid;/);
    expect(yii2).not.toContain("cardGridQuality");
    expect(yii2).not.toContain("cardGridSpeed");
  });

  // FAQ is secondary: proof and fit come first, FAQ last before the CTA.
  it.each([
    ["yii2", yii2, ["ProcessSection", "ProofSection", "FaqSection", "FinalCtaSection"]],
    ["ai-vibecoding", ai, ["ProcessSection", "WhoNotForSection", "FeaturedEssaySection", "FaqSection", "FinalCtaSection"]]
  ])("/%s puts FAQ right before the final CTA", (_name, src, names) => {
    const idx = order(src, names);
    expect(idx.every((i) => i > 0)).toBe(true);
    expect([...idx].sort((x, y) => x - y)).toEqual(idx);
  });

  it("/ai-vibecoding's featured essay card shows a link arrow", () => {
    const block = ai.split("function FeaturedEssaySection() {")[1]?.split("\n}\n")[0] ?? "";
    expect(block).toContain("<Icon icon={ArrowRight} className={styles.featuredEssayArrow} />");
  });
});

describe("channel links", () => {
  const home = read("app", "(en)", "page.tsx");
  const yii2 = read("app", "(en)", "yii2", "page.tsx");

  // One quiet channel line, shared, so it looks the same wherever it appears.
  it.each([["home", home], ["yii2", yii2]])("%s renders the shared ChannelLinks", (_name, src) => {
    expect(src).toMatch(/<ChannelLinks items=\{\w+\} ariaLabel="[^"]+" \/>/);
  });

  it.each([["home", home, "insightLinks"], ["yii2", yii2, "writingLinks"]])(
    "%s channel data carries no descriptions",
    (_name, src, list) => {
      const block = src.split(`const ${list} = [`)[1]?.split("\n];")[0] ?? "";
      expect(block).toContain("href:");
      expect(block).not.toContain("description:");
    }
  );

  // Proof: the Yii2 talk is the evidence, so only it gets cards; the
  // channels drop to the quiet line under it.
  it("/yii2 Proof shows only the talk as cards, in two columns", () => {
    const proof = yii2.split("function ProofSection() {")[1]?.split("\n}\n")[0] ?? "";
    expect(proof).toContain("talkLinks.map(");
    expect(proof).not.toContain("...writingLinks");
    const wide = read("app", "styles", "landing.module.css").split("@media (min-width: 1100px)").slice(1).join("");
    expect(wide).toMatch(/\.proofGrid \{[^}]*grid-template-columns: repeat\(2, minmax\(0, 1fr\)\);/);
  });
});

describe("one site menu", () => {
  const nav = read("app", "lib", "navigation.ts");
  const items = nav.split("export const siteNavigationItems")[1]?.split("];")[0] ?? "";
  const tsx = read("app", "components", "TopNavigation.tsx");
  const css = read("app", "components", "TopNavigation.module.css");

  // Every page shows the same menu from one list, so it cannot drift apart.
  it.each([
    ["home", ["page.tsx"]],
    ["yii2", ["yii2", "page.tsx"]],
    ["ai-vibecoding", ["ai-vibecoding", "page.tsx"]],
    ["blog index", ["blog", "page.tsx"]]
  ])("%s renders the shared SiteNav", (_name, parts) => {
    const page = read("app", "(en)", ...parts);
    expect(page).toMatch(/<SiteNav locale="en" current="\/[^"]*" \/>/);
    expect(page).not.toContain("<TopNavigation");
    expect(page).not.toContain("navigationItems");
  });

  it("is navigation only: pages, no in-page anchors, no Contact", () => {
    expect(items).not.toMatch(/href: "#/);
    expect(items).not.toContain("Contact");
    expect(nav).not.toContain("mobilePinned");
  });

  it("marks the current page", () => {
    expect(tsx).toContain('aria-current={item.href === current ? "page" : undefined}');
    expect(css).toMatch(/\.navLinks a\[aria-current="page"\] \{[^}]*color: var\(--text-strong\);/);
  });

  // Four pages fit one row on a tablet; only phones drop the secondary ones.
  it("hides secondary items on phones only", () => {
    const tablet = css.split("@media (max-width: 860px)")[1]?.split("@media")[0] ?? "";
    const phone = css.split("@media (max-width: 640px)")[1]?.split("@media")[0] ?? "";
    expect(tablet).not.toContain('data-mobile-nav="secondary"');
    expect(phone).toContain('.navLinks a[data-mobile-nav="secondary"]');
  });
});
