import { join } from "node:path";
import { getPostBySlug, type PostSlug } from "@/app/lib/blog/posts";
import { getLocaleConfig } from "@/app/lib/i18n/locales";

/** The route folder of a post: app/(<locale>)/<prefix>/blog/<slug>/. */
export function postRouteDir(slug: PostSlug): string {
  const { locale } = getPostBySlug(slug);
  const prefix = getLocaleConfig(locale).pathPrefix.split("/").filter(Boolean);
  return join(process.cwd(), "app", `(${locale})`, ...prefix, "blog", slug);
}
