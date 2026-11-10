// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position); the founder mention in the body
// stays a soft internal link, not a second CTA. Related links run across the AI
// cluster and up to the delivery pillar — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_periphery";

const entropyPost = getPostBySlug("entropie-code-controles-ci-ia");

const relatedLinks = [
  {
    href: getPostPathInLocale("ai-made-starting-free-finishing-expensive", "fr"),
    title: "L’IA a rendu le démarrage presque gratuit. Finir coûte toujours cher.",
    description:
      "Pourquoi des démarrages bon marché remplissent le tableau sans remplir la production : le WIP et la loi de Little, appliqués aux agents comme aux humains."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "fr"),
    title: "Votre MVP en vibe coding est à l’arrêt",
    description:
      "Quand un code construit par des agents atteint le stade où l’on « n’ose plus rien toucher », et les pratiques d’encadrement des juniors qui règlent le problème."
  },
  {
    href: getPostPath(entropyPost.slug),
    title: entropyPost.title,
    description: entropyPost.description
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
    <BlogCta post="agents-ia-code-peripherie-coeur" heading="Des agents sur de vrais projets : parlons-en" href={CTA_HREF}>
      Le premier échange dure 30 minutes sur Telegram. Racontez-moi comment votre équipe et vos
      agents travaillent aujourd’hui, et je vous aide à tracer la frontière entre ce qu’on confie à
      l’agent et ce qu’on garde au cœur.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="agents-ia-code-peripherie-coeur" links={relatedLinks} />;
}
