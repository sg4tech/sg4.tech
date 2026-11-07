import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { blogPosts, getLatestPosts } from "@/app/lib/blog/posts";

const read = (...parts: string[]) => readFileSync(join(process.cwd(), ...parts), "utf8");

describe("getLatestPosts", () => {
  it("returns posts newest first", () => {
    const dates = getLatestPosts().map((p) => p.publishedAt);
    expect(dates).toEqual([...dates].sort().reverse());
    expect(dates).toHaveLength(blogPosts.length);
  });

  it("limits to the requested count", () => {
    expect(getLatestPosts(3)).toHaveLength(Math.min(3, blogPosts.length));
  });
});

// The homepage Insights block was six layers deep. It now shows the latest
// posts (so it never goes stale), one link to the blog, and the writing
// channels as compact pills.
describe("homepage Insights block", () => {
  const page = read("app", "page.tsx");
  const section = page.split("function InsightsSection() {")[1]?.split("\n}\n")[0] ?? "";

  it("lists the latest posts from the blog data", () => {
    expect(section).toContain("getLatestPosts(3)");
    expect(section).toContain("formatPostDate(post.publishedAt)");
  });

  it("links to the blog index with the approved label", () => {
    expect(section).toMatch(/<Link href="\/blog\/"[^>]*>\s*All posts/);
  });

  it("drops the removed copy and the featured-essay card", () => {
    for (const gone of ["Not theory", "Or browse the full collection", "featuredEssay", "insightDescription"]) {
      expect(page).not.toContain(gone);
    }
  });

  it("keeps every channel, as pills without descriptions", () => {
    const links = page.split("const insightLinks = [")[1]?.split("\n];")[0] ?? "";
    for (const url of ["habr.com/users/sg4tech", "t.me/cto_lifehacks", "medium.com/@sg4tech", "linkedin"]) {
      expect(links.toLowerCase()).toContain(url.toLowerCase());
    }
    expect(links).not.toContain("description:");
    expect(section).toContain("className={styles.channelPill}");
  });
});

describe("blog index", () => {
  it("orders posts through the shared accessor", () => {
    expect(read("app", "blog", "page.tsx")).toContain("getLatestPosts()");
  });
});
