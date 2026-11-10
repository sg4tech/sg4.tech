import { buildBlogFeed } from "../../../../lib/blog/feed";
import { blogIndexContent } from "../content";

export const dynamic = "force-static";

export function GET(): Response {
  return new Response(
    buildBlogFeed("ru", { title: blogIndexContent.meta.socialTitle, description: blogIndexContent.meta.description }),
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } }
  );
}
