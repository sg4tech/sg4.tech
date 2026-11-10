// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_vibecoding";

// Post cards come from the post registry so their title/description never
// drift from the articles' own metadata.
const pillarPost = getPostBySlug("diagnosticar-gargalos-na-entrega");
const finishingPost = getPostBySlug("ia-comecar-e-barato-terminar-e-caro");
const entropyPost = getPostBySlug("entropia-do-codigo-verificacoes-de-ci");

const relatedLinks = [
  {
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "MVP de vibecoding de volta aos trilhos",
    description:
      "A versão em serviço deste ensaio: as camadas do sistema de entrega que a IA não gera, quanto custa cada fase e o que ela rende."
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
    <BlogCta post="mvp-de-vibecoding-parou-de-entregar" heading="O MVP travou, e cada correção quebra outra coisa" href={CTA_HREF}>
      A primeira conversa de diagnóstico leva 30 minutos no Telegram. Conte o que parou de sair, e eu
      mostro qual camada está faltando e o que adicionar primeiro.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="mvp-de-vibecoding-parou-de-entregar" links={relatedLinks} />;
}
