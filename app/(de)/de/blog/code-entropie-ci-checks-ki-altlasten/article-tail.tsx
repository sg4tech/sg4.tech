// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_entropy";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const vibecodingPost = getPostBySlug("vibecoding-mvp-keine-releases-mehr");
const peripheryPost = getPostBySlug("ki-coding-agenten-peripherie-kern");

const relatedLinks = [
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(peripheryPost.slug),
    title: peripheryPost.title,
    description: peripheryPost.description
  },
  {
    href: pagePath("de", "ai-vibecoding"),
    title: "Vibecoding-MVP in Ordnung bringen",
    description: "Die Checks und Architekturregeln, die einer Codebasis beim Wachsen gefehlt haben."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="code-entropie-ci-checks-ki-altlasten" heading="Wenn Agenten schneller Code schreiben, als Sie ihn prüfen können" href={CTA_HREF}>
      Das erste Gespräch dauert 30 Minuten per Telegram. Erzählen Sie mir, was Ihre CI heute prüft,
      und ich helfe Ihnen herauszufinden, welche Ebenen fehlen und in welcher Reihenfolge Sie sie
      ergänzen.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="code-entropie-ci-checks-ki-altlasten" links={relatedLinks} />;
}
