// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_finishing";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const pillarPost = getPostBySlug("engpaesse-in-der-entwicklung-finden");
const vibecodingPost = getPostBySlug("vibecoding-mvp-keine-releases-mehr");

const relatedLinks = [
  {
    href: getPostPath(pillarPost.slug),
    title: pillarPost.title,
    description: pillarPost.description
  },
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: pagePath("de", "ai-vibecoding"),
    title: "Vibecoding-MVP in Ordnung bringen",
    description:
      "Die Ebenen des Entwicklungsprozesses, die KI nicht mitliefert: Architekturregeln, Prüfungen in der Pipeline, Testabdeckung."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="ki-anfangen-billig-fertigstellen-teuer" heading="Viel angefangen, wenig ausgeliefert" href={CTA_HREF}>
      Das erste Diagnosegespräch dauert 30 Minuten per Telegram. Beschreiben Sie, wie Ihr Team und
      Ihre Agenten heute arbeiten, und ich helfe Ihnen zu finden, wo Ihnen fertige Arbeit verloren
      geht.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ki-anfangen-billig-fertigstellen-teuer" links={relatedLinks} />;
}
