import { describe, expect, it } from "vitest";
import { aiVibecodingContent as ruContent } from "@/app/(ru)/ru/ai-vibecoding/content";
import { getPostInLocaleOrOriginal, getPostPath } from "@/app/lib/blog/posts";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { AiVibecodingView } from "@/app/views/ai-vibecoding/AiVibecodingView";
import { englishLandings, toRenderedPage } from "./support/landings";
import { bodyLinkTo } from "./support/links";
import { renderView } from "./support/render";

const ru = toRenderedPage(renderView(AiVibecodingView, { locale: "ru", content: ruContent }));
const en = englishLandings["ai-vibecoding"].page;
const essayPath = getPostPath(ruContent.featuredEssay.slug);

// The featured essay follows the post registry: the Russian page links to the
// Russian translation when there is one, and otherwise to the English post,
// marked as English.
describe("Russian /ai-vibecoding: the featured essay", () => {
  const post = getPostInLocaleOrOriginal(ruContent.featuredEssay.slug, "ru");
  const card = bodyLinkTo(ru.html, getPostPath(post.slug));
  const inEnglish = post.locale !== "ru";

  it("links to the post in the reader's language when it exists, else marks it", () => {
    expect(card).toContain("Статья по теме");
    expect(card.includes(getDictionary("ru").untranslated.pageNote)).toBe(inEnglish);
    expect(card.includes('lang="en"')).toBe(inEnglish);
  });
});

describe("English /ai-vibecoding: the featured essay", () => {
  const card = bodyLinkTo(en.html, essayPath);

  it("carries no language note", () => {
    expect(card).toContain("Featured essay");
    expect(card).not.toContain(getDictionary("en").untranslated.pageNote);
    expect(card).not.toContain('lang="');
  });
});

describe("Russian /ai-vibecoding: copy", () => {
  it("renders the approved hero and the Russian Telegram start params", () => {
    for (const phrase of [
      "не хватает системы вокруг кода.",
      "https://t.me/sg4tech?start=site_ru_ai_vibecoding_hero",
      "https://t.me/sg4tech?start=site_ru_ai_vibecoding_final"
    ]) {
      expect(ru.shows(phrase), phrase).toBe(true);
    }
  });
});
