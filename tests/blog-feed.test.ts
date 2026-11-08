import { describe, expect, it } from "vitest";

import { BLOG_FEED_URL, buildBlogFeed } from "@/app/lib/blog/feed";
import { blogFeedAlternates, buildPostMetadata } from "@/app/lib/blog/post-metadata";
import {
  BLOG_INDEX_PATH,
  getBlogLastModifiedAt,
  getLatestPosts,
  getPostUrl,
  parsePostDate,
  POST_SLUGS
} from "@/app/lib/blog/posts";
import { absoluteUrl } from "@/app/lib/brand";
import { escapeXml, renderRss } from "@/app/lib/rss";

describe("RSS renderer", () => {
  const feed = renderRss(
    {
      title: "Title & co",
      link: "https://example.com/",
      description: "About <things>",
      language: "en",
      selfUrl: "https://example.com/feed.xml",
      lastBuildDate: new Date(Date.UTC(2026, 4, 22))
    },
    [
      {
        title: "Post",
        link: "https://example.com/post/",
        pubDate: new Date(Date.UTC(2026, 4, 22)),
        description: "Quote \"this\""
      }
    ]
  );

  it("renders an RSS 2.0 channel that names its own URL", () => {
    expect(feed.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
    expect(feed).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
    expect(feed).toContain(
      '<atom:link href="https://example.com/feed.xml" rel="self" type="application/rss+xml"/>'
    );
  });

  it("dates the channel and items in RFC 822 form", () => {
    expect(feed).toContain("<lastBuildDate>Fri, 22 May 2026 00:00:00 GMT</lastBuildDate>");
    expect(feed).toContain("<pubDate>Fri, 22 May 2026 00:00:00 GMT</pubDate>");
  });

  it("escapes text and uses the link as a permalink guid", () => {
    expect(feed).toContain("<title>Title &amp; co</title>");
    expect(feed).toContain("<description>About &lt;things&gt;</description>");
    expect(feed).toContain("<description>Quote &quot;this&quot;</description>");
    expect(feed).toContain('<guid isPermaLink="true">https://example.com/post/</guid>');
  });

  it("escapes every XML special character", () => {
    expect(escapeXml(`a & b < c > d " e ' f`)).toBe("a &amp; b &lt; c &gt; d &quot; e &apos; f");
  });
});

describe("blog RSS feed", () => {
  const feed = buildBlogFeed();

  it("is the blog index channel and points at its own published URL", () => {
    expect(feed).toContain(`<link>${absoluteUrl(BLOG_INDEX_PATH)}</link>`);
    expect(feed).toContain(`<atom:link href="${BLOG_FEED_URL}" rel="self"`);
  });

  it("has one item per post, newest first", () => {
    const links = [...feed.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => m[1]);

    expect(links).toEqual(getLatestPosts().map((post) => getPostUrl(post.slug)));
    expect(links).toHaveLength(POST_SLUGS.length);
  });

  it("is dated by the newest post change", () => {
    const lastModified = getBlogLastModifiedAt();
    if (lastModified === undefined) {
      throw new Error("the blog has posts, so it must have a last-modified date");
    }

    expect(feed).toContain(`<lastBuildDate>${parsePostDate(lastModified).toUTCString()}</lastBuildDate>`);
  });
});

describe("blog RSS feed discovery", () => {
  it("advertises the published feed URL", () => {
    expect(blogFeedAlternates).toEqual({ "application/rss+xml": BLOG_FEED_URL });
  });

  it("is advertised from every post", () => {
    for (const slug of POST_SLUGS) {
      expect(buildPostMetadata(slug).alternates?.types).toEqual(blogFeedAlternates);
    }
  });

  it("is advertised from the blog index", async () => {
    const { metadata } = await import("@/app/blog/page");

    expect(metadata.alternates?.types).toEqual(blogFeedAlternates);
  });
});
