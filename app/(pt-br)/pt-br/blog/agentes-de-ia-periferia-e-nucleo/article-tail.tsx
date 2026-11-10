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

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_periphery";

const finishingPost = getPostBySlug("ia-comecar-e-barato-terminar-e-caro");
const vibecodingPost = getPostBySlug("mvp-de-vibecoding-parou-de-entregar");
const entropyPost = getPostBySlug("entropia-do-codigo-verificacoes-de-ci");

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
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "O serviço de resgate: MVP de vibecoding de volta aos trilhos",
    description:
      "As camadas do sistema de entrega que a IA não gerou: regras de arquitetura, verificações no pipeline, cobertura de testes."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="agentes-de-ia-periferia-e-nucleo" heading="Agentes no trabalho real: onde fica a linha" href={CTA_HREF}>
      A primeira conversa leva 30 minutos no Telegram. Conte como sua equipe e seus agentes trabalham
      hoje, e eu ajudo você a traçar a linha entre o que entregar ao agente e o que manter no núcleo.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="agentes-de-ia-periferia-e-nucleo" links={relatedLinks} />;
}
