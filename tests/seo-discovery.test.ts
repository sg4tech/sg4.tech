import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { getPostBySlug, POST_SLUGS } from "@/app/lib/blog/posts";

describe("sitemap", () => {
  it("lists every live public route on the canonical domain", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://sg4.tech/",
        "https://sg4.tech/yii2",
        "https://sg4.tech/ai-vibecoding",
        "https://sg4.tech/blog",
        "https://sg4.tech/blog/diagnose-broken-engineering-delivery"
      ])
    );
  });

  it("does not advertise routes that have no built page", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const placeholderRoutes = [
      "https://sg4.tech/about",
      "https://sg4.tech/why-engineering-is-slow",
      "https://sg4.tech/why-hiring-more-engineers-doesnt-help",
      "https://sg4.tech/why-nothing-ships"
    ];

    for (const url of placeholderRoutes) {
      expect(urls).not.toContain(url);
    }
  });
});

describe("canonical metadata", () => {
  it("declares the home page canonical relative to metadataBase", () => {
    const filePath = join(process.cwd(), "app", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/"/);
  });

  it("declares the yii2 page canonical relative to metadataBase", () => {
    const filePath = join(process.cwd(), "app", "yii2", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/yii2"/);
  });

  it("declares the blog index canonical", () => {
    const filePath = join(process.cwd(), "app", "blog", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/blog\/"/);
  });

  it("declares the cornerstone article canonical", () => {
    const filePath = join(
      process.cwd(),
      "app",
      "blog",
      "diagnose-broken-engineering-delivery",
      "page.tsx"
    );
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(
      /alternates:\s*{\s*canonical:\s*`\/blog\/\$\{SLUG\}\/`/
    );
  });
});

describe("llms.txt", () => {
  it("ships from public/ with canonical site links and contact", () => {
    const filePath = join(process.cwd(), "public", "llms.txt");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain("Victor Demin");
    expect(content).toContain("https://sg4.tech/");
    expect(content).toContain("https://sg4.tech/yii2");
    expect(content).toContain("https://t.me/sg4tech");
  });

  it("advertises the blog index and the cornerstone article", () => {
    const filePath = join(process.cwd(), "public", "llms.txt");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain("https://sg4.tech/blog/");
    expect(content).toContain(
      "https://sg4.tech/blog/diagnose-broken-engineering-delivery/"
    );
  });
});

describe("article schema", () => {
  it("renders Article, FAQPage, and BreadcrumbList JSON-LD", () => {
    const filePath = join(
      process.cwd(),
      "app",
      "blog",
      "diagnose-broken-engineering-delivery",
      "page.tsx"
    );
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain('"@type": "Article"');
    expect(content).toContain('"@type": "FAQPage"');
    expect(content).toContain('"@type": "BreadcrumbList"');
  });
});

describe("blog post metadata", () => {
  // Per-post sanity: every slug in POST_SLUGS must resolve to a fully-formed
  // BlogPost. Without this, an empty/typo'd entry in blogPosts would only
  // surface as undefined-propagation through the Article JSON-LD (e.g.,
  // `"headline": undefined`), which the substring schema test above wouldn't
  // catch.
  for (const slug of POST_SLUGS) {
    it(`"${slug}" has complete required metadata`, () => {
      const post = getPostBySlug(slug);

      expect(post.title).toBeTruthy();
      expect(post.description).toBeTruthy();
      expect(post.publishedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.modifiedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.readingMinutes).toBeGreaterThan(0);
      expect(post.tags.length).toBeGreaterThan(0);
    });
  }
});
