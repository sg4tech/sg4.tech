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

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_periphery";

const entropyPost = getPostBySlug("entropia-del-codigo-controles-ci");

const relatedLinks = [
  {
    href: getPostPathInLocale("ai-made-starting-free-finishing-expensive", "es"),
    title: "Con la IA, empezar es casi gratis. Terminar sigue siendo caro.",
    description:
      "Por qué los arranques baratos llenan el tablero y no producción: el WIP y la ley de Little, aplicados tanto a personas como a agentes."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "es"),
    title: "Cuando el MVP de vibecoding deja de salir a producción",
    description:
      "Cuando el código escrito por agentes llega a la fase de «mejor no tocar nada», y las prácticas para juniors que lo arreglan."
  },
  {
    href: getPostPath(entropyPost.slug),
    title: entropyPost.title,
    description: entropyPost.description
  },
  {
    href: pagePath("es", "ai-vibecoding"),
    title: "El servicio: poner orden en un MVP de vibecoding",
    description:
      "Añadir las capas del proceso de entrega que la IA no generó: reglas de arquitectura, controles en el pipeline, cobertura de tests."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="agentes-de-ia-periferia-y-nucleo" heading="Para equipos que ya usan agentes en trabajo real" href={CTA_HREF}>
      La primera llamada dura 30 minutos, por Telegram. Cuéntame cómo trabajan hoy tu equipo y tus
      agentes, y te ayudo a trazar la frontera entre lo que puedes darle al agente y lo que debe
      quedarse en el núcleo.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="agentes-de-ia-periferia-y-nucleo" links={relatedLinks} />;
}
