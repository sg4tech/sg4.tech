import { join } from "node:path";
import { aiVibecodingContent } from "@/app/(en)/ai-vibecoding/content";
import { homeContent } from "@/app/(en)/content";
import { yii2Content } from "@/app/(en)/yii2/content";
import { AiVibecodingView } from "@/app/views/ai-vibecoding/AiVibecodingView";
import { HomeView } from "@/app/views/home/HomeView";
import { Yii2View } from "@/app/views/yii2/Yii2View";
import { renderView } from "./render";

const decodeEntities = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

/** A rendered page: decoded HTML (tags kept) and the visible text (tags dropped). */
export type RenderedPage = {
  html: string;
  text: string;
  /** True when `phrase` (JSX-escaped or not) appears in the markup or the visible text. */
  shows: (phrase: string) => boolean;
  /** The JSON-LD graph nodes the page emits. */
  jsonLd: ReadonlyArray<Record<string, unknown>>;
};

export function toRenderedPage(rawHtml: string): RenderedPage {
  const html = decodeEntities(rawHtml);
  const text = decodeEntities(rawHtml.replace(/<script\b[^>]*>[\s\S]*?<\/script[^>]*>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/[ \t\n]+/g, " ")
    .trim();
  const jsonLd = [...rawHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script[^>]*>/gi)].flatMap(
    ([, json]) => (JSON.parse(json ?? "{}") as { "@graph"?: Array<Record<string, unknown>> })["@graph"] ?? []
  );
  return {
    html,
    text,
    shows: (phrase) => {
      const decoded = decodeEntities(phrase);
      return html.includes(decoded) || text.includes(decoded);
    },
    jsonLd
  };
}

const viewDir = (...parts: string[]) => join(process.cwd(), "app", "views", ...parts);

// The English landings, rendered as visitors get them, plus where each view's
// source and stylesheet live for structural checks.
export const englishLandings = {
  home: {
    page: toRenderedPage(renderView(HomeView, { locale: "en", content: homeContent })),
    view: viewDir("home", "HomeView.tsx"),
    css: viewDir("home", "HomeView.module.css")
  },
  yii2: {
    page: toRenderedPage(renderView(Yii2View, { locale: "en", content: yii2Content })),
    view: viewDir("yii2", "Yii2View.tsx"),
    css: viewDir("yii2", "Yii2View.module.css")
  },
  "ai-vibecoding": {
    page: toRenderedPage(renderView(AiVibecodingView, { locale: "en", content: aiVibecodingContent })),
    view: viewDir("ai-vibecoding", "AiVibecodingView.tsx"),
    css: viewDir("ai-vibecoding", "AiVibecodingView.module.css")
  }
};
