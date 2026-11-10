// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_vibecoding";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ia-demarrer-gratuit-finir-cher");
const entropyPost = getPostBySlug("entropie-code-controles-ci-ia");

const relatedLinks = [
  {
    href: pagePath("fr", "ai-vibecoding"),
    title: "Remise en ordre de MVP en vibe coding",
    description:
      "La version service de cet article : les couches du système de livraison que l’IA ne génère pas, ce que coûte chaque phase et ce qu’elle rapporte."
  },
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "fr"),
    title: "Où vos livraisons bloquent vraiment",
    description:
      "Le guide des métriques : découper le T2M en Lead Time et Cycle Time, le WIP et la loi de Little, pour des équipes de toute taille."
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
    <BlogCta post="mvp-vibe-coding-bloque" heading="Votre MVP est à l’arrêt et chaque correction casse autre chose" href={CTA_HREF}>
      Le premier appel de diagnostic dure 30 minutes sur Telegram. Décrivez ce qui ne sort plus, et
      je vous indique quelle couche manque et quoi ajouter en premier.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="mvp-vibe-coding-bloque" links={relatedLinks} />;
}
