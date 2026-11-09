import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";

// A link-preview card's footer: the author's name in the card's language,
// followed by the reading time on posts.
export function ogCardFooter(locale: Locale, readingTime?: string): string {
  const { name } = getDictionary(locale).author;
  return readingTime === undefined ? name : `${name} · ${readingTime}`;
}
