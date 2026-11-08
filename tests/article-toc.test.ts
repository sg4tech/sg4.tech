import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getDictionary } from "@/app/lib/i18n/dictionary";

const dir = join(process.cwd(), "app", "(en)", "blog", "diagnose-broken-engineering-delivery");
const read = (file: string) => readFileSync(join(dir, file), "utf8");
const unescape = (s: string) => s.replace(/&apos;/g, "'").replace(/\s+/g, " ").trim();

const headings = [...(read("article-content.tsx") + read("article-tail.tsx")).matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map(
  ([, id, text]) => ({ id: id ?? "", text: unescape(text ?? "") })
);
const page = read("page.tsx");
const tocBlock = page.split("const tocItems = [")[1]?.split("];")[0] ?? "";
const tocItems = [...tocBlock.matchAll(/\{ id: "([^"]+)", title: "([^"]+)" \}/g)].map(([, id, title]) => ({
  id: id ?? "",
  text: unescape(title ?? "")
}));

// The longest post (~32 phone screens) needs a way to jump between sections.
// The contents list mirrors the real headings, so it cannot drift from them.
describe("diagnose post table of contents", () => {
  it("finds the post's section headings", () => {
    expect(headings.length).toBeGreaterThan(5);
  });

  it("lists every section heading, in order, with the same text", () => {
    expect(tocItems).toEqual(headings);
  });

  it("renders the contents after the intro", () => {
    expect(page).toMatch(/<IntroSection \/>\s*<ArticleToc post="diagnose-broken-engineering-delivery" items=\{tocItems\} \/>\s*<SectionSymptoms \/>/);
  });

  it("labels the list with the approved heading", () => {
    expect(getDictionary("en").blog.tocHeading).toBe("Contents");
    expect(readFileSync(join(process.cwd(), "app", "components", "ArticleToc.tsx"), "utf8")).toContain(">{getDictionary(getPostBySlug(post).locale).blog.tocHeading}<");
  });
});

// Anchor jumps (contents links, nav links) land with scroll-margin-top set to
// --scroll-offset. Blog h2s carry the margin themselves, so the offset must
// clear the sticky nav, which measures about 6.6rem tall on desktop.
describe("anchor scroll offset", () => {
  it("clears the sticky nav", () => {
    const css = readFileSync(join(process.cwd(), "app", "globals.css"), "utf8");
    const value = /--scroll-offset:\s*([\d.]+)rem;/.exec(css)?.[1];
    expect(Number(value)).toBeGreaterThanOrEqual(6.6);
  });
});
