// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_finishing";

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "es"),
    title: "Dónde falla de verdad la entrega de software",
    description:
      "La guía de métricas en la que se apoya este artículo: dividir el T2M en Lead Time y Cycle Time, el WIP y la ley de Little."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "es"),
    title: "Cuando el MVP de vibecoding deja de salir a producción",
    description:
      "La otra mitad de la disciplina de entrega con IA: gestionar los agentes con las prácticas para juniors que ya funcionan."
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
    <BlogCta post="ia-empezar-gratis-terminar-caro" heading="Tu equipo empieza mucho y entrega poco" href={CTA_HREF}>
      La primera llamada de diagnóstico dura 30 minutos, por Telegram. Cuéntame cómo trabajan hoy tu
      equipo y tus agentes, y te ayudo a encontrar por dónde se escapa el trabajo terminado.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ia-empezar-gratis-terminar-caro" links={relatedLinks} />;
}
