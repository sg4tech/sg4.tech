// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ru_blog_forecast";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("nachat-deshevo-zakonchit-dorogo");

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "ru"),
    title: "Где ломается разработка и как найти узкое место",
    description:
      "Метрики, на которых строится эта статья: разложение T2M на Lead Time и Cycle Time, WIP и закон Литтла."
  },
  {
    href: getPostPath(finishingPost.slug),
    title: finishingPost.title,
    description: finishingPost.description
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
    <BlogCta post="prognoz-srokov-percentili" heading="Сроки съезжают, и непонятно почему" href={CTA_HREF}>
      Первый диагностический созвон — 30 минут в Telegram. Опишите симптомы, и вместе найдём, где
      ломается распределение, а с ним и система.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="prognoz-srokov-percentili" links={relatedLinks} />;
}
