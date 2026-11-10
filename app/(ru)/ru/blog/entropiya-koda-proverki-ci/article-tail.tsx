// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../../../components/BlogCta";
import { BlogRelated } from "../../../../components/BlogRelated";
import { getPostPathInLocale } from "../../../../lib/blog/posts";
import { pagePath } from "../../../../lib/i18n/pages";

const CTA_HREF = "https://t.me/sg4tech?start=site_ru_blog_entropy";

const relatedLinks = [
  {
    href: getPostPathInLocale("vibecoded-mvp-stopped-shipping", "ru"),
    title: "MVP после вайбкодинга перестал выходить в релиз",
    description:
      "Почему коду от агентов нужны те же автопроверки, что и коду джуна, и в каком порядке их добавлять."
  },
  {
    href: getPostPathInLocale("ai-coding-agent-periphery-core", "ru"),
    title: "ИИ-агентам в разработке — периферию, людям — ядро",
    description: "Что отдавать агенту, а что оставлять людям."
  },
  {
    href: pagePath("ru", "ai-vibecoding"),
    title: "Услуга: порядок в MVP после вайбкодинга",
    description: "Добавляю проверки и архитектурные правила, которых в коде не было."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta post="entropiya-koda-proverki-ci" heading="Агенты пишут код быстрее, чем вы успеваете его ревьюить" href={CTA_HREF}>
      Первый созвон — 30 минут в Telegram. Расскажите, что сейчас проверяет ваш CI, и я помогу
      понять, каких уровней не хватает и в каком порядке их добавлять.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated post="entropiya-koda-proverki-ci" links={relatedLinks} />;
}
