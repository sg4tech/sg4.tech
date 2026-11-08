import type { ImageResponse } from "next/og";
import { getPostBySlug, type PostSlug } from "../lib/blog/posts";
import { VICTOR_NAME } from "../lib/brand";
import { getDictionary } from "../lib/i18n/dictionary";
import type { OgCardProps } from "./Card";
import { renderOgCard } from "./render";

// A post's link-preview card. The footer (author · reading time) comes from the
// post registry in the post's own language, so it cannot drift from the post.
export function renderPostOgCard(
  slug: PostSlug,
  card: Pick<OgCardProps, "eyebrow" | "title" | "subtitle">
): Promise<ImageResponse> {
  const post = getPostBySlug(slug);
  const readingTime = getDictionary(post.locale).blog.readingTime(post.readingMinutes);
  return renderOgCard({ ...card, footer: `${VICTOR_NAME} · ${readingTime}` });
}
