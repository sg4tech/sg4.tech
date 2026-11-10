// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_forecast";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ia-empezar-gratis-terminar-caro");

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "es"),
    title: "Dónde falla de verdad la entrega de software",
    description:
      "La guía de métricas en la que se apoya este artículo: dividir el T2M en Lead Time y Cycle Time, el WIP y la ley de Little."
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
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
    <BlogCta post="prever-entregas-con-percentiles" heading="Las fechas se retrasan y no sabes por qué" href={CTA_HREF}>
      La primera llamada de diagnóstico dura 30 minutos, por Telegram. Cuéntame los síntomas y te ayudo
      a encontrar dónde se rompe la distribución y, con ella, el sistema.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="prever-entregas-con-percentiles" links={relatedLinks} />;
}
