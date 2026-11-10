// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostBySlug, getPostPath, getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ru_blog_vibecoding";

// Sibling spoke cards come from the post registry so their title/description
// never drift from the articles' own metadata.
const finishingPost = getPostBySlug("nachat-deshevo-zakonchit-dorogo");
const entropyPost = getPostBySlug("entropiya-koda-proverki-ci");

const relatedLinks = [
  {
    href: pagePath("ru", "ai-vibecoding"),
    title: "Порядок в MVP после вайбкодинга",
    description:
      "То же самое в виде услуги: уровни процесса разработки, которых ИИ не строит, стоимость и результат каждого этапа."
  },
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "ru"),
    title: "Где ломается разработка и как найти узкое место",
    description:
      "Метрики разработки: разложение T2M на Lead Time и Cycle Time, WIP и закон Литтла — для команд любого размера."
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
    <BlogCta post="mvp-posle-vaibkodinga" heading="MVP буксует, и каждое исправление что-то ломает" href={CTA_HREF}>
      Первый диагностический созвон — 30 минут в Telegram. Опишите, что перестало выходить в релиз,
      и я подскажу, какого уровня не хватает и что добавить первым.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="mvp-posle-vaibkodinga" links={relatedLinks} />;
}
