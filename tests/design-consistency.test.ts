import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();
const read = (...parts: string[]) => readFileSync(join(root, ...parts), "utf8");

const blogPostSlugs = readdirSync(join(root, "app", "blog"), { withFileTypes: true })
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
    const css = read("app", "blog", slug, "page.module.css");
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
    const tsx = read("app", page, "page.tsx");

    expect(tsx).toContain('from "../components/Steps"');
    // Carded steps keep the landing's visual anchor while sharing the pattern.
    expect(tsx).toContain('<Steps\n        variant="card"');
    expect(tsx).not.toContain("processVisual");
    expect(tsx).not.toContain("processWrapper");
  });

  // Bare browser disc bullets read as unstyled; MarkList carries the DS marker.
  it.each(landingPages)("/%s uses MarkList instead of bare bullet lists", (page) => {
    const tsx = read("app", page, "page.tsx");

    expect(tsx).toContain('from "../components/MarkList"');
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
  const tsx = read("app", "page.tsx");
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

  // The horizontal pill row clips its last items; Contact is the conversion
  // link, so it stays pinned to the right edge while the rest scroll under it.
  it.each(["page.tsx", join("yii2", "page.tsx"), join("ai-vibecoding", "page.tsx")])(
    "%s pins Contact in the mobile nav",
    (file) => {
      expect(read("app", file)).toContain('label: "Contact", mobileNav: "primary", mobilePinned: true');
    }
  );

  it("renders pinned nav items as sticky on phones", () => {
    const tsx = read("app", "components", "TopNavigation.tsx");
    const css = read("app", "components", "TopNavigation.module.css");
    expect(tsx).toContain("data-mobile-pinned={item.mobilePinned ? \"\" : undefined}");
    expect(block(mobile(css), ".navLinks a[data-mobile-pinned]")).toContain("position: sticky;");
  });
});

describe("contrast of secondary graphics", () => {
  it("gives the ghost CTA button a solid ink outline on the ember block", () => {
    const css = read("app", "components", "Button.module.css");
    expect(css.split(".ghost {")[1]?.split("}")[0]).toContain("border-color: var(--gray-900);");
  });

  it("draws the lead-time histogram bars visibly against the card", () => {
    const css = read("app", "blog", "forecast-delivery-with-percentiles", "page.module.css");
    expect(css.split(".distChart .dcBar {")[1]?.split("}")[0]).toContain("fill: var(--gray-400);");
  });
});

describe("homepage hero layout", () => {
  const css = read("app", "page.module.css");
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
    const tsx = read("app", "page.tsx");
    const cards = tsx.match(/className=\{styles\.specializationCard\}/g) ?? [];
    const arrows = tsx.match(/<Icon icon=\{ArrowRight\} className=\{styles\.specializationArrow\} \/>/g) ?? [];
    expect(cards.length).toBeGreaterThan(0);
    expect(arrows).toHaveLength(cards.length);
  });
});

describe("mobile nav pinned item", () => {
  it("fades scrolled pills out before the pinned item", () => {
    const css = read("app", "components", "TopNavigation.module.css");
    const rule = css.split(".navLinks a[data-mobile-pinned]::before {")[1]?.split("}")[0] ?? "";
    expect(rule).toContain("linear-gradient(");
  });
});

describe("layout batch: tap targets and alignment", () => {
  const rule = (css: string, selector: string) => css.split(`${selector} {`)[1]?.split("}")[0] ?? "";
  const landing = read("app", "styles", "landing.module.css");
  const blog = read("app", "components", "BlogPostLayout.module.css");
  const privacy = read("app", "privacy", "page.module.css");

  // Small text links get a 44px-tall hit area through padding, cancelled by a
  // matching negative margin, so the visible layout does not move.
  it.each([
    ["landing back link", landing, ".backLink"],
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

  it("starts quality and speed card text level with its icon", () => {
    expect(rule(landing, ".cardGridQuality .card p,\n.cardGridSpeed .card p")).toContain("margin-top: 0;");
  });

  it("sets the Stat note in the readable secondary text colour", () => {
    expect(rule(read("app", "components", "Stat.module.css"), ".note")).toContain("color: var(--text-3);");
  });
});

describe("homepage navigation", () => {
  it("links to the blog index rather than an in-page anchor", () => {
    const tsx = read("app", "page.tsx");

    expect(tsx).toContain('{ href: "/blog/", label: "Blog"');
    expect(tsx).not.toContain('href: "#insights"');
  });
});
