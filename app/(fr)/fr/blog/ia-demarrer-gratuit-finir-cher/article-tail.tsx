// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_finishing";

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "fr"),
    title: "Où vos livraisons bloquent vraiment",
    description:
      "Le guide des métriques sur lequel s’appuie cet article : découper le T2M en Lead Time et Cycle Time, le WIP et la loi de Little."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "fr"),
    title: "Votre MVP en vibe coding est à l’arrêt",
    description:
      "L’autre moitié de la discipline de livraison avec l’IA : encadrer les agents de code avec les pratiques qui marchent déjà pour les développeurs juniors."
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
    <BlogCta post="ia-demarrer-gratuit-finir-cher" heading="Beaucoup de démarrages, peu de livraisons" href={CTA_HREF}>
      Le premier appel de diagnostic dure 30 minutes sur Telegram. Décrivez comment votre équipe et
      vos agents travaillent aujourd’hui, et je vous aide à trouver où le travail terminé vous
      échappe.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ia-demarrer-gratuit-finir-cher" links={relatedLinks} />;
}
