// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ru_blog_finishing";

const relatedLinks = [
  {
    href: getPostPathInLocale("diagnose-broken-engineering-delivery", "ru"),
    title: "Где ломается разработка и как найти узкое место",
    description:
      "Метрики, на которых строится эта статья: T2M, разложенный на Lead Time и Cycle Time, WIP и закон Литтла."
  },
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "ru"),
    title: "MVP после вайбкодинга перестал выходить в релиз",
    description:
      "Вторая половина дисциплины: управлять агентами по тем же правилам, что давно работают с джунами."
  },
  {
    href: pagePath("ru", "ai-vibecoding"),
    title: "Услуга: порядок в MVP после вайбкодинга",
    description:
      "Достраиваю то, чего ИИ не сгенерировал: архитектурные правила, проверки в пайплайне, тесты."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="nachat-deshevo-zakonchit-dorogo" heading="Начинаете много, а выпускаете мало" href={CTA_HREF}>
      Первый диагностический созвон — 30 минут в Telegram. Расскажите, как сейчас работают ваша
      команда и агенты, и я помогу найти, где задачи теряются по дороге к релизу.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="nachat-deshevo-zakonchit-dorogo" links={relatedLinks} />;
}
