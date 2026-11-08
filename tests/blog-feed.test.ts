import { describe, expect, it } from "vitest";

import { BLOG_FEED_PATH, buildBlogFeed, escapeXml } from "@/app/lib/blog/feed";
import { buildPostMetadata } from "@/app/lib/blog/post-metadata";
import { getLatestPosts, POST_SLUGS } from "@/app/lib/blog/posts";
import { SITE_URL } from "@/app/lib/brand";

const feedUrl = `${SITE_URL}${BLOG_FEED_PATH}`;

describe("blog RSS feed", () => {
  const feed = buildBlogFeed();

  it("is an RSS 2.0 channel for the blog index that names its own URL", () => {
    expect(feed.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(feed).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
    expect(feed).toContain(`<link>${SITE_URL}/blog/</link>`);
    expect(feed).toContain(`<atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>`);
  });

  it("has one item per post, newest first, linking the trailing-slash URL", () => {
    const links = [...feed.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => m[1]);
    const expected = getLatestPosts().map((post) => `${SITE_URL}/blog/${post.slug}/`);

    expect(links).toEqual(expected);
    expect(links).toHaveLength(POST_SLUGS.length);
  });

  it("dates items in RFC 822 form from the publish date", () => {
    expect(feed).toContain("<pubDate>Fri, 22 May 2026 00:00:00 GMT</pubDate>");
  });

  it("escapes XML special characters in text", () => {
    expect(escapeXml(`a & b < c > d " e ' f`)).toBe("a &amp; b &lt; c &gt; d &quot; e &apos; f");
  });
});

describe("blog RSS feed discovery", () => {
  it("is advertised from every post", () => {
    for (const slug of POST_SLUGS) {
      expect(buildPostMetadata(slug).alternates?.types).toEqual({ "application/rss+xml": feedUrl });
    }
  });

  it("is advertised from the blog index", async () => {
    const { metadata } = await import("@/app/blog/page");

    expect(metadata.alternates?.types).toEqual({ "application/rss+xml": feedUrl });
  });
});
