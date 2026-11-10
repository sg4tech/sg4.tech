// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_forecast";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ia-demarrer-gratuit-finir-cher");

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "fr"),
    title: "Où vos livraisons bloquent vraiment",
    description:
      "Le guide des métriques sur lequel s’appuie cet article : découper le T2M en Lead Time et Cycle Time, le WIP et la loi de Little."
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: pagePath("fr", "ai-vibecoding"),
    title: "Le service de remise en ordre de MVP en vibe coding",
    description:
      "Ajouter les couches du système de livraison que l’IA n’a pas générées : règles d’architecture, contrôles dans le pipeline, couverture de tests."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="prevoir-livraisons-percentiles" heading="Vos dates glissent sans que vous sachiez pourquoi" href={CTA_HREF}>
      Le premier appel de diagnostic dure 30 minutes sur Telegram. Décrivez les symptômes, et je vous
      aide à trouver où la distribution, et le système avec elle, se dérègle.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="prevoir-livraisons-percentiles" links={relatedLinks} />;
}
