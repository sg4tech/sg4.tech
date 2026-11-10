import { describe, expect, it } from "vitest";
import { aiVibecodingContent as ruContent } from "@/app/(ru)/ru/ai-vibecoding/content";
import { getPostPath } from "@/app/lib/blog/posts";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { AiVibecodingView } from "@/app/views/ai-vibecoding/AiVibecodingView";
import { englishLandings, toRenderedPage } from "./support/landings";
import { bodyLinkTo } from "./support/links";
import { renderView } from "./support/render";

const ru = toRenderedPage(renderView(AiVibecodingView, { locale: "ru", content: ruContent }));
const en = englishLandings["ai-vibecoding"].page;
const essayPath = getPostPath(ruContent.featuredEssay.slug);

// The featured essay exists only in English: the Russian page links to it and
// says so, and the note follows the post registry, so a translation replaces it.
describe("Russian /ai-vibecoding: the featured essay", () => {
  const card = bodyLinkTo(ru.html, essayPath);

  it("links to the English post, marked as English", () => {
    expect(card).toContain("Статья по теме");
    expect(card).toContain(getDictionary("ru").untranslated.pageNote);
    expect(card).toContain('lang="en"');
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
