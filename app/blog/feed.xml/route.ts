import { buildBlogFeed } from "../../lib/blog/feed";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(buildBlogFeed(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" }
  });
}
