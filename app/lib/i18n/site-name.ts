import { getDictionary } from "./dictionary";
import type { Locale } from "./locales";

// Where the author's name shows up as the site's name — search titles and the
// copyright line — it is spelled the way the page's readers spell it.

/** Search-title format: each root layout's title.template, and withSiteName()
 * where the template does not apply — the home page, which sits in its
 * layout's own segment, and the global 404, which has no layout. */
export function siteTitleTemplate(locale: Locale): string {
  return `%s | ${getDictionary(locale).author.name}`;
}

export function withSiteName(locale: Locale, title: string): string {
  return siteTitleTemplate(locale).replace("%s", title);
}

export function copyrightLine(locale: Locale): string {
  return `© 2026 ${getDictionary(locale).author.name}`;
}
