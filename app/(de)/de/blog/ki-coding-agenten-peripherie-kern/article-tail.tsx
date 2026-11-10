// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position); the founder mention in the body
// stays a soft internal link, not a second CTA. Related links run across the AI
// cluster and up to the delivery pillar — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_periphery";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const finishingPost = getPostBySlug("ki-anfangen-billig-fertigstellen-teuer");
const vibecodingPost = getPostBySlug("vibecoding-mvp-keine-releases-mehr");
const entropyPost = getPostBySlug("code-entropie-ci-checks-ki-altlasten");

const relatedLinks = [
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(entropyPost.slug),
    title: entropyPost.title,
    description: entropyPost.description
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
    <BlogCta post="ki-coding-agenten-peripherie-kern" heading="Für Teams, die Agenten an echter Arbeit einsetzen" href={CTA_HREF}>
      Das erste Gespräch dauert 30 Minuten per Telegram. Erzählen Sie mir, wie Ihr Team und Ihre
      Agenten heute arbeiten, und ich helfe Ihnen, die Grenze zu ziehen zwischen dem, was Sie dem
      Agenten übergeben, und dem, was beim Kern bleibt.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ki-coding-agenten-peripherie-kern" links={relatedLinks} />;
}
