// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_forecast";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const pillarPost = getPostBySlug("engpaesse-in-der-entwicklung-finden");
const finishingPost = getPostBySlug("ki-anfangen-billig-fertigstellen-teuer");

const relatedLinks = [
  {
    href: getPostPath(pillarPost.slug),
    title: pillarPost.title,
    description: pillarPost.description
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
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
    <BlogCta post="lieferprognose-mit-perzentilen" heading="Termine rutschen, und der Grund ist unklar" href={CTA_HREF}>
      Das erste Diagnosegespräch dauert 30 Minuten per Telegram. Beschreiben Sie die Symptome, und ich
      helfe Ihnen zu finden, wo die Verteilung und mit ihr das System aus dem Ruder läuft.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="lieferprognose-mit-perzentilen" links={relatedLinks} />;
}
