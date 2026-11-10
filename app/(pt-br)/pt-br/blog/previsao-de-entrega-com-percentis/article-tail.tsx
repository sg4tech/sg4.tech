// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_forecast";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const pillarPost = getPostBySlug("diagnosticar-gargalos-na-entrega");
const finishingPost = getPostBySlug("ia-comecar-e-barato-terminar-e-caro");

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
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "O serviço de resgate: MVP de vibecoding de volta aos trilhos",
    description:
      "As camadas do sistema de entrega que a IA não gerou: regras de arquitetura, verificações no pipeline, cobertura de testes."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="previsao-de-entrega-com-percentis" heading="Os prazos escorregam, e ninguém sabe dizer por quê" href={CTA_HREF}>
      A primeira conversa de diagnóstico leva 30 minutos no Telegram. Descreva os sintomas, e eu ajudo
      você a encontrar onde a distribuição, e o sistema, estão quebrando.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="previsao-de-entrega-com-percentis" links={relatedLinks} />;
}
