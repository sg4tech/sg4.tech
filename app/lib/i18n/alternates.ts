import { absoluteUrl, type SitePath } from "../brand";

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
  const duplicate = variants.find((variant, index) => variants.findIndex((other) => other.lang === variant.lang) !== index);
  if (duplicate) {
    // Two versions in one language would silently collapse into one entry.
    throw new Error(`[hreflang] two versions in "${duplicate.lang}": ${variants.map((v) => v.path).join(", ")}`);
  }
  const languages = Object.fromEntries(variants.map(({ lang, path }) => [lang, absoluteUrl(path)]));
  const fallback = variants.find((variant) => variant.lang === defaultLang) ?? variants[0];
  return fallback ? { ...languages, "x-default": absoluteUrl(fallback.path) } : languages;
}
