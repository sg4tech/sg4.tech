// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_es_blog_entropy";

const relatedLinks = [
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "es"),
    title: "Cuando el MVP de vibecoding deja de salir a producción",
    description:
      "Por qué el código escrito por agentes necesita los mismos controles que el de un junior, y en qué orden añadirlos."
  },
  {
    href: getPostPathInLocale("ai-coding-agent-periphery-core", "es"),
    title: "Agentes de IA para programar: dales la periferia, deja el núcleo a las personas",
    description: "Qué darle a un agente y qué reservar para las personas."
  },
  {
    href: pagePath("es", "ai-vibecoding"),
    title: "El servicio: poner orden en un MVP de vibecoding",
    description: "Añadir los controles y las reglas de arquitectura que le faltaron al código mientras crecía."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="entropia-del-codigo-controles-ci" heading="Tus agentes escriben código más rápido de lo que puedes revisarlo" href={CTA_HREF}>
      La primera llamada dura 30 minutos, por Telegram. Cuéntame qué comprueba hoy tu CI y te ayudo a
      ver qué niveles faltan y en qué orden añadirlos.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="entropia-del-codigo-controles-ci" links={relatedLinks} />;
}
