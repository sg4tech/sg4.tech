// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_fr_blog_entropy";

const relatedLinks = [
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "fr"),
    title: "Votre MVP en vibe coding est à l’arrêt",
    description:
      "Pourquoi le code écrit par des agents a besoin des mêmes garde-fous que celui d’un junior, et dans quel ordre les poser."
  },
  {
    href: getPostPathInLocale("ai-coding-agent-periphery-core", "fr"),
    title: "Agents IA de code : la périphérie pour eux, le cœur pour les humains",
    description: "Ce qu’on confie à un agent, et ce qu’on garde pour les humains."
  },
  {
    href: pagePath("fr", "ai-vibecoding"),
    title: "Le service de remise en ordre de MVP en vibe coding",
    description: "Ajouter les contrôles et les règles d’architecture qui ont manqué au code pendant sa croissance."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="entropie-code-controles-ci-ia" heading="Vos agents écrivent du code plus vite que vous ne pouvez le relire" href={CTA_HREF}>
      Le premier échange dure 30 minutes sur Telegram. Dites-moi ce que votre CI vérifie
      aujourd’hui, et je vous aide à repérer les niveaux qui manquent et l’ordre dans lequel les
      ajouter.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="entropie-code-controles-ci-ia" links={relatedLinks} />;
}
