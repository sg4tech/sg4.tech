import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";
import { buildPostMetadata } from "@/app/lib/blog/post-metadata";
import { getPostBySlug, POST_SLUGS } from "@/app/lib/blog/posts";
import { SITE_URL } from "@/app/lib/brand";

describe("sitemap", () => {
  it("lists every live public route on the canonical domain", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining([
        "https://sg4.tech/",
        "https://sg4.tech/yii2/",
        "https://sg4.tech/ai-vibecoding/",
        "https://sg4.tech/blog/",
        "https://sg4.tech/blog/diagnose-broken-engineering-delivery/",
        "https://sg4.tech/blog/forecast-delivery-with-percentiles/",
        "https://sg4.tech/blog/ai-made-starting-free-finishing-expensive/"
      ])
    );
  });

  // next.config.mjs sets trailingSlash: true, so every page is served at its
  // trailing-slash URL and the slash-less variant is a 301 redirect. A sitemap
  // must list final URLs, not redirects — otherwise every entry wastes a crawl
  // hop and contradicts the on-page canonical.
  it("lists only trailing-slash URLs (the served form under trailingSlash: true)", () => {
    const entries = sitemap();

    for (const entry of entries) {
      expect(entry.url).toMatch(/\/$/);
    }
  });

  it("does not advertise routes that have no built page", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const placeholderRoutes = [
      "https://sg4.tech/about/",
      "https://sg4.tech/why-engineering-is-slow/",
      "https://sg4.tech/why-hiring-more-engineers-doesnt-help/",
      "https://sg4.tech/why-nothing-ships/"
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

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/yii2\/"/);
  });

  it("declares the ai-vibecoding page canonical relative to metadataBase", () => {
    const filePath = join(process.cwd(), "app", "ai-vibecoding", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/ai-vibecoding\/"/);
  });

  it("declares the blog index canonical", () => {
    const filePath = join(process.cwd(), "app", "blog", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/blog\/"/);
  });

  // Every post page takes its metadata from the shared builder, so the checks
  // on buildPostMetadata below cover each post, including ones added later.
  for (const slug of POST_SLUGS) {
    it(`builds the "${slug}" metadata with buildPostMetadata`, () => {
      const filePath = join(process.cwd(), "app", "blog", slug, "page.tsx");
      const content = readFileSync(filePath, "utf8");

      expect(content).toContain("export const metadata: Metadata = buildPostMetadata(SLUG);");
    });
  }
});

describe("buildPostMetadata", () => {
  for (const slug of POST_SLUGS) {
    it(`gives "${slug}" a trailing-slash canonical and a suffix-free search title`, () => {
      const post = getPostBySlug(slug);
      const metadata = buildPostMetadata(slug);

      expect(metadata.alternates?.canonical).toBe(`/blog/${slug}/`);
      expect(metadata.title).toEqual({ absolute: post.seoTitle ?? post.title });
      expect(metadata.openGraph?.title).toBe(post.title);
      expect(metadata.openGraph?.url).toBe(`${SITE_URL}/blog/${slug}/`);
    });
  }
});

describe("llms.txt", () => {
  it("ships from public/ with canonical site links and contact", () => {
    const filePath = join(process.cwd(), "public", "llms.txt");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain("Victor Demin");
    expect(content).toContain("https://sg4.tech/");
    expect(content).toContain("https://sg4.tech/yii2/");
    expect(content).toContain("https://t.me/sg4tech");
  });

  it("advertises the blog index and the cornerstone article", () => {
    const filePath = join(process.cwd(), "public", "llms.txt");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain("https://sg4.tech/blog/");
    expect(content).toContain(
      "https://sg4.tech/blog/diagnose-broken-engineering-delivery/"
    );
    expect(content).toContain(
      "https://sg4.tech/blog/forecast-delivery-with-percentiles/"
    );
    expect(content).toContain(
      "https://sg4.tech/blog/vibecoded-mvp-stopped-shipping/"
    );
    expect(content).toContain(
      "https://sg4.tech/blog/ai-made-starting-free-finishing-expensive/"
    );
  });
});

describe("landing schema", () => {
  // Both landings render a visible FaqSection; the FAQPage JSON-LD must ship
  // with it (Q&A markup is among the most-cited structures for AI engines).
  // The founder edge links the page's ProfessionalService node to the shared
  // Person @id — without it the two nodes sit in the same graph unconnected.
  for (const landing of ["yii2", "ai-vibecoding"] as const) {
    it(`/${landing} renders FAQPage JSON-LD and links the service to the Person via founder`, () => {
      const filePath = join(process.cwd(), "app", landing, "page.tsx");
      const content = readFileSync(filePath, "utf8");

      expect(content).toContain('"@type": "FAQPage"');
      expect(content).toMatch(
        /founder:\s*{\s*"@id":\s*`\$\{SITE_URL\}\/#person`\s*}/
      );
    });
  }
});

describe("article schema", () => {
  // Every post renders through BlogPostLayout, which emits the JSON-LD graph
  // built by buildPostStructuredData (covered in post-schema.test.ts).
  for (const slug of POST_SLUGS) {
    it(`renders "${slug}" through BlogPostLayout`, () => {
      const filePath = join(process.cwd(), "app", "blog", slug, "page.tsx");
      const content = readFileSync(filePath, "utf8");

      expect(content).toContain("<BlogPostLayout");
      expect(content).toContain("slug={SLUG}");
    });
  }

  it("emits the post's JSON-LD graph from BlogPostLayout", () => {
    const filePath = join(process.cwd(), "app", "components", "BlogPostLayout.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain('type="application/ld+json"');
    expect(content).toContain("buildPostStructuredData(");
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
