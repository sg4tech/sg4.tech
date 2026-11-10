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

const ru = toRenderedPage(renderView(HomeView, { locale: "ru", content: ruHomeContent }));
const en = englishLandings.home.page;

// next/link drops the trailing slash outside a Next build (no next.config).
// The first link to `path` inside the page body (the menu has its own links).
const linkTo = (html: string, path: string) => {
  const bare = path.replace(/\/$/, "");
  const body = html.split("</nav>").slice(1).join("</nav>");
  const links = body.split("<a ").slice(1).map((chunk) => chunk.split("</a>")[0] ?? "");
  return links.find((link) => link.includes(`href="${bare}"`) || link.includes(`href="${bare}/"`)) ?? "";
};

// A link that leaves the reader's language says so, and the note disappears by
// itself once the target page is translated (it follows the page registry).
describe("Russian home: links to pages that exist only in English", () => {
  const { untranslated } = getDictionary("ru");

  it("keeps a translated page's card in Russian, with no note", () => {
    const card = linkTo(ru.html, "/ru/yii2/");
    expect(card).toContain("Проект на Yii2");
    expect(card).not.toContain(untranslated.pageNote);
  });

  it("points an untranslated page's card at the English page and marks it", () => {
    const card = linkTo(ru.html, "/ai-vibecoding/");
    expect(card).toContain("MVP после вайбкодинга");
    expect(card).toContain(untranslated.pageNote);
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
