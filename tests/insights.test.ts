import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { formatPostDate, getLatestPosts } from "@/app/lib/blog/posts";
import { enPosts } from "@/app/lib/blog/registry/en";
import { writingChannelLinks } from "@/app/lib/brand";
import { englishLandings } from "./support/landings";

const read = (...parts: string[]) => readFileSync(join(process.cwd(), ...parts), "utf8");

describe("getLatestPosts", () => {
  it("returns posts newest first", () => {
    const dates = getLatestPosts("en").map((p) => p.publishedAt);
    expect(dates).toEqual([...dates].sort().reverse());
    expect(dates).toHaveLength(enPosts.length);
  });

  it("keeps each locale's posts apart", () => {
    expect(getLatestPosts("en").every((post) => post.locale === "en")).toBe(true);
  });

  it("limits to the requested count", () => {
    expect(getLatestPosts("en", 3)).toHaveLength(Math.min(3, enPosts.length));
  });
});

// The homepage Insights block was six layers deep. It now shows the latest
// posts (so it never goes stale), one link to the blog, and the writing
// channels as compact pills.
describe("homepage Insights block", () => {
  const { page: home, view, css } = englishLandings.home;
  const source = read(view.replace(`${process.cwd()}/`, ""));
  const section = source.split("function InsightsSection(")[1]?.split("\n}\n")[0] ?? "";
  const block = home.html.split('id="insights"')[1]?.split("</section>")[0] ?? "";

  it("lists the latest posts from the blog data", () => {
    expect(section).toContain("getLatestPostsOrDefault(locale, 3)");
    for (const post of getLatestPosts("en", 3)) {
      // next/link drops the trailing slash outside a Next build (no next.config).
      const href = `/blog/${post.slug}`;
      expect(block.includes(`href="${href}/"`) || block.includes(`href="${href}"`)).toBe(true);
      expect(block).toContain(formatPostDate(post.publishedAt, "en"));
    }
  });

  it("links to the blog index with the approved label", () => {
    expect(block).toMatch(/<a [^>]*href="\/blog\/?"[^>]*>All posts/);
  });

  it("drops the removed copy and the featured-essay card", () => {
    for (const gone of ["Not theory", "Or browse the full collection", "Featured essay"]) {
      expect(home.shows(gone), gone).toBe(false);
    }
    for (const gone of ["featuredEssay", "insightDescription"]) {
      expect(source).not.toContain(gone);
    }
  });

  it("keeps every channel, as pills without descriptions", () => {
    const channels = block.split('aria-label="Writing channels"')[1]?.split("</ul>")[0] ?? "";
    for (const url of ["habr.com/users/sg4tech", "t.me/cto_lifehacks", "medium.com/@sg4tech", "linkedin"]) {
      expect(channels.toLowerCase()).toContain(url.toLowerCase());
    }
    expect(writingChannelLinks.every((link) => !("description" in link))).toBe(true);
    expect(section).toContain("<ChannelLinks items={writingChannelLinks}");
  });

  // Editorial layout: one heading with the "All posts" link beside it, the
  // posts as a row of three typographic cards on wide screens, and the
  // channels as a quiet line of same-size monochrome icons.
  it("titles the block Writing with All posts beside the heading", () => {
    expect(block).toMatch(/<h2[^>]*>Writing<\/h2>/);
    expect(section).toMatch(/<div className=\{styles\.writingHeader\}>[\s\S]*?<SectionHeader[\s\S]*?allPostsLabel[\s\S]*?<\/div>/);
  });

  // The arrow rides at the end of the title, glued to its last word, instead
  // of hanging alone on its own line under every card.
  it("keeps the arrow on the title's last line", () => {
    expect(section).toMatch(/<span\s+className=\{styles\.latestPostTitle\}[\s\S]*?>[\s\S]*?<span className=\{styles\.titleTail\}>[\s\S]*?<Icon icon=\{ArrowRight\} className=\{styles\.latestPostArrow\} \/>[\s\S]*?<\/span>\s*<\/span>/);
  });

  it("sets the posts in three columns on wide screens", () => {
    const wide = read(css.replace(`${process.cwd()}/`, "")).split("@media (min-width: 1100px)").slice(1).join("");
    expect(wide).toMatch(/\.latestPosts \{[^}]*grid-template-columns: repeat\(3, minmax\(0, 1fr\)\);/);
  });

  it("keeps the channel links quiet: no pill border, muted icons", () => {
    const css = read("app", "components", "ChannelLinks.module.css");
    const link = css.split(".channelLink {")[1]?.split("}")[0] ?? "";
    expect(link).not.toContain("border:");
    expect(link).toContain("color: var(--muted);");
  });
});

describe("blog index", () => {
  it("orders posts through the shared accessor", () => {
    expect(read("app", "views", "blog-index", "BlogIndexView.tsx")).toContain("getLatestPosts(locale).map(");
  });
});
