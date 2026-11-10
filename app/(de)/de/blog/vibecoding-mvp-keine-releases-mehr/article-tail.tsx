// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_de_blog_vibecoding";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const pillarPost = getPostBySlug("engpaesse-in-der-entwicklung-finden");
const finishingPost = getPostBySlug("ki-anfangen-billig-fertigstellen-teuer");
const entropyPost = getPostBySlug("code-entropie-ci-checks-ki-altlasten");

const relatedLinks = [
  {
    href: pagePath("de", "ai-vibecoding"),
    title: "Vibecoding-MVP in Ordnung bringen",
    description:
      "Dieser Essay als Leistung: die Ebenen des Entwicklungsprozesses, die KI nicht mitliefert, was jede Phase kostet und was sie bringt."
  },
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
    href: getPostPath(entropyPost.slug),
    title: entropyPost.title,
    description: entropyPost.description
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="vibecoding-mvp-keine-releases-mehr" heading="Das MVP steht still, und jeder Fix macht etwas anderes kaputt" href={CTA_HREF}>
      Das erste Diagnosegespräch dauert 30 Minuten per Telegram. Beschreiben Sie, was nicht mehr
      ausgeliefert wird, und ich zeige Ihnen, welche Ebene fehlt und womit Sie anfangen sollten.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="vibecoding-mvp-keine-releases-mehr" links={relatedLinks} />;
}
