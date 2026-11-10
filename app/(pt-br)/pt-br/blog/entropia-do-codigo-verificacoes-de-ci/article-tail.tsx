// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ptbr_blog_entropy";

const vibecodingPost = getPostBySlug("mvp-de-vibecoding-parou-de-entregar");
const peripheryPost = getPostBySlug("agentes-de-ia-periferia-e-nucleo");

const relatedLinks = [
  {
    href: getPostPath(vibecodingPost.slug),
    title: vibecodingPost.title,
    description: vibecodingPost.description
  },
  {
    href: getPostPath(peripheryPost.slug),
    title: peripheryPost.title,
    description: peripheryPost.description
  },
  {
    href: pagePath("pt-br", "ai-vibecoding"),
    title: "O serviço de resgate: MVP de vibecoding de volta aos trilhos",
    description: "As verificações e as regras de arquitetura que faltaram enquanto o código crescia."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="entropia-do-codigo-verificacoes-de-ci" heading="Os agentes escrevem código mais rápido do que você revisa" href={CTA_HREF}>
      A primeira conversa leva 30 minutos no Telegram. Conte o que o seu CI verifica hoje, e eu ajudo
      você a descobrir quais níveis faltam e em que ordem adicioná-los.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="entropia-do-codigo-verificacoes-de-ci" links={relatedLinks} />;
}
