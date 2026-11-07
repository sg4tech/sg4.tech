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

  it.each(["2–3x", "10x", "2x", "~1.5x"])("does not repeat %s in the result checklist", (figure) => {
    const resultLists = [...caseStudies.matchAll(/result: \[([^\]]*)\]/g)].map((m) => m[1]).join(" ");
    expect(resultLists).not.toContain(`"${figure} `);
  });
});

describe("homepage navigation", () => {
  it("links to the blog index rather than an in-page anchor", () => {
    const tsx = read("app", "page.tsx");

    expect(tsx).toContain('{ href: "/blog/", label: "Blog"');
    expect(tsx).not.toContain('href: "#insights"');
  });
});
