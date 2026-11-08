import { SITE_URL } from "../brand";
import type { SitePath } from "./locales";

// One language version of a page: its hreflang code and served path.
export type LanguageVariant = {
  lang: string;
  path: SitePath;
};

// hreflang map for a page, as Next.js `alternates.languages` and sitemap
// `alternates.languages` take it. A page in one language gets none: there is
// nothing to point to, and an hreflang to a page that does not exist is worse
// than no hreflang at all.
export function buildLanguageAlternates(
  variants: ReadonlyArray<LanguageVariant>,
  defaultLang: string
): Record<string, string> | undefined {
  if (variants.length < 2) {
    return undefined;
  }
  const languages = Object.fromEntries(variants.map(({ lang, path }) => [lang, `${SITE_URL}${path}`]));
  const fallback = variants.find((variant) => variant.lang === defaultLang) ?? variants[0];
  return fallback ? { ...languages, "x-default": `${SITE_URL}${fallback.path}` } : languages;
}
