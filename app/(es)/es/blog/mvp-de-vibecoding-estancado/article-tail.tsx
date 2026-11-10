// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_vibecoding";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ia-empezar-gratis-terminar-caro");
const entropyPost = getPostBySlug("entropia-del-codigo-controles-ci");

const relatedLinks = [
  {
    href: pagePath("es", "ai-vibecoding"),
    title: "Poner orden en tu MVP de vibecoding",
    description:
      "La versión de servicio de este artículo: las capas del proceso de entrega que la IA no genera, cuánto cuesta cada fase y qué aporta."
  },
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "es"),
    title: "Dónde falla de verdad la entrega de software",
    description:
      "La guía de métricas: dividir el T2M en Lead Time y Cycle Time, el WIP y la ley de Little, para equipos de cualquier tamaño."
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
    <BlogCta post="mvp-de-vibecoding-estancado" heading="El MVP está atascado y cada arreglo rompe otra cosa" href={CTA_HREF}>
      La primera llamada de diagnóstico dura 30 minutos, por Telegram. Cuéntame qué ha dejado de salir
      a producción y te diré qué capa falta y qué añadir primero.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="mvp-de-vibecoding-estancado" links={relatedLinks} />;
}
