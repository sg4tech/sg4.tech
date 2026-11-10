import { describe, expect, it } from "vitest";
import { homeContent as ruHomeContent } from "@/app/(ru)/ru/content";
import { getLatestPostsOrDefault } from "@/app/lib/blog/posts";
import { getDictionary } from "@/app/lib/i18n/dictionary";
import { withSiteName } from "@/app/lib/i18n/site-name";
import { buildHomeMetadata } from "@/app/views/home/home-seo";
import { HomeView } from "@/app/views/home/HomeView";
import { homeContent as enHomeContent } from "@/app/(en)/content";
import { renderView } from "./support/render";
import { englishLandings, toRenderedPage } from "./support/landings";
import { bodyLinkTo as linkTo } from "./support/links";

const ru = toRenderedPage(renderView(HomeView, { locale: "ru", content: ruHomeContent }));
const en = englishLandings.home.page;

// A link that leaves the reader's language says so, and the note disappears by
// itself once the target page is translated (it follows the page registry).
describe("Russian home: links to other pages", () => {
  const { untranslated } = getDictionary("ru");

  it.each([
    ["/ru/yii2/", "Проект на Yii2"],
    ["/ru/ai-vibecoding/", "MVP после вайбкодинга"]
  ])("keeps a translated page's card in Russian (%s), with no note", (path, title) => {
    const card = linkTo(ru.html, path);
    expect(card).toContain(title);
    expect(card).not.toContain(untranslated.pageNote);
  });

  it("points the blog link at the English blog and marks it", () => {
    const link = linkTo(ru.html, "/blog/");
    expect(link).toContain("Все статьи");
    expect(link).toContain(untranslated.linkNote);
  });

  it("lists the English posts while there are no Russian ones, marked as English", () => {
    const block = ru.html.split('id="insights"')[1]?.split("</section>")[0] ?? "";
    const posts = getLatestPostsOrDefault("ru", 3);
    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(block).toContain(post.slug);
    }
    expect(block).toContain('lang="en"');
  });
});

describe("English home: nothing is marked as another language", () => {
  const { untranslated } = getDictionary("en");

  it.each([untranslated.pageNote, untranslated.linkNote])("does not show %s", (note) => {
    expect(en.shows(note)).toBe(false);
  });

  it("does not tag its own posts with a language", () => {
    const block = en.html.split('id="insights"')[1]?.split("</section>")[0] ?? "";
    expect(block).not.toContain('lang="');
  });
});

// The home page's title carries the site name itself; marking it absolute keeps
// a layout's title template from adding the name a second time, wherever the
// route sits.
describe("home search title", () => {
  it.each([
    ["en", enHomeContent],
    ["ru", ruHomeContent]
  ] as const)("is absolute in %s", (locale, content) => {
    expect(buildHomeMetadata(locale, content).title).toEqual({ absolute: withSiteName(locale, content.meta.title) });
  });
});
