// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_finishing";

const pillarPost = getPostBySlug("diagnosticar-gargalos-na-entrega");
const vibecodingPost = getPostBySlug("mvp-de-vibecoding-parou-de-entregar");

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
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "O serviço de resgate: MVP de vibecoding de volta aos trilhos",
    description:
      "As camadas do sistema de entrega que a IA não gerou: regras de arquitetura, verificações no pipeline, cobertura de testes."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="ia-comecar-e-barato-terminar-e-caro" heading="Muita coisa começada, pouca coisa entregue" href={CTA_HREF}>
      A primeira conversa de diagnóstico leva 30 minutos no Telegram. Descreva como sua equipe e seus
      agentes trabalham hoje, e eu ajudo você a encontrar onde o trabalho concluído está vazando.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ia-comecar-e-barato-terminar-e-caro" links={relatedLinks} />;
}
