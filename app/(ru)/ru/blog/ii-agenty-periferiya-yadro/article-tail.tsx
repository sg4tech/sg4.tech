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

const CTA_HREF = "https://t.me/sg4tech?start=site_ru_blog_periphery";

const entropyPost = getPostBySlug("entropiya-koda-proverki-ci");

const relatedLinks = [
  {
    href: getPostPathInLocale("ai-made-starting-free-finishing-expensive", "ru"),
    title: "С ИИ начать почти бесплатно. Закончить — всё ещё дорого",
    description:
      "Дешёвый старт забивает доску незаконченной работой. WIP и закон Литтла действуют на агентов так же, как на людей."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "ru"),
    title: "MVP после вайбкодинга перестал выходить в релиз",
    description:
      "Что делать, когда код от агентов страшно трогать: практики из работы с джунами, которые это лечат."
  },
  {
    href: getPostPath(entropyPost.slug),
    title: entropyPost.title,
    description: entropyPost.description
  },
  {
    href: pagePath("ru", "ai-vibecoding"),
    title: "Услуга: порядок в MVP после вайбкодинга",
    description:
      "Достраиваю уровни системы разработки, которых ИИ не создал: архитектурные правила, проверки в пайплайне, тесты."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="ii-agenty-periferiya-yadro" heading="Проведём границу для ваших агентов" href={CTA_HREF}>
      Первый созвон — 30 минут в Telegram. Расскажите, как ваша команда сейчас работает с агентами,
      и вместе решим, что отдать агенту, а что оставить в ядре.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="ii-agenty-periferiya-yadro" links={relatedLinks} />;
}
