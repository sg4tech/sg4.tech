import { SITE_URL } from "../brand";
import { BLOG_DESCRIPTION, BLOG_TITLE, blogPosts, getLatestPosts } from "./posts";

// RSS 2.0 feed for the blog. Served at BLOG_FEED_PATH by app/blog/feed.xml/route.ts
// and advertised via <link rel="alternate"> from the blog index and every post.
export const BLOG_FEED_PATH = "/blog/feed.xml";

// Value for Next.js metadata `alternates.types` on pages that advertise the feed.
export const BLOG_FEED_ALTERNATE = { "application/rss+xml": `${SITE_URL}${BLOG_FEED_PATH}` };

// "&" goes first so the entities added by the later steps are not escaped again.
export function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

// Post dates are calendar days (YYYY-MM-DD); RSS wants RFC 822, so pin them to UTC midnight.
function toRfc822(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

function buildItem(post: (typeof blogPosts)[number]): string {
  const url = `${SITE_URL}/blog/${post.slug}/`;

  return [
    "    <item>",
    `      <title>${escapeXml(post.title)}</title>`,
    `      <link>${url}</link>`,
    `      <guid isPermaLink="true">${url}</guid>`,
    `      <pubDate>${toRfc822(post.publishedAt)}</pubDate>`,
    `      <description>${escapeXml(post.description)}</description>`,
    "    </item>"
  ].join("\n");
}

export function buildBlogFeed(): string {
  const posts = getLatestPosts();
  // Deterministic build date: the newest content change, not the time of the build.
  const lastChange = blogPosts.map((post) => post.modifiedAt).sort().at(-1);

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(BLOG_TITLE)}</title>`,
    `    <link>${SITE_URL}/blog/</link>`,
    `    <description>${escapeXml(BLOG_DESCRIPTION)}</description>`,
    "    <language>en</language>",
    ...(lastChange ? [`    <lastBuildDate>${toRfc822(lastChange)}</lastBuildDate>`] : []),
    `    <atom:link href="${SITE_URL}${BLOG_FEED_PATH}" rel="self" type="application/rss+xml"/>`,
    ...posts.map(buildItem),
    "  </channel>",
    "</rss>",
    ""
  ].join("\n");
}
