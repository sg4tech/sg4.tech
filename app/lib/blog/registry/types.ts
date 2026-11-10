import type { Locale } from "../../i18n/locales";

// One post in the registry, in its own language. `S` is the slug union of the
// locale's registry file; `O` the slugs a translation may point back to.
export type PostEntry<S extends string, O extends string = never> = {
  slug: S;
  /** The language the post is written in; it is published under that locale's blog. */
  locale: Locale;
  /** For a translation: the slug of the original post. Links the language
   * versions for hreflang; leave unset on originals. */
  translationOf?: O;
  title: string;
  /** Search-result title for the <title> tag when it should name the searched-for topic more
   * plainly than the on-page headline. Falls back to `title`; H1, Open Graph, and schema
   * headline always use `title`. */
  seoTitle?: string;
  description: string;
  /** ISO-8601 date string (YYYY-MM-DD). Used for Article schema datePublished. */
  publishedAt: string;
  /** ISO-8601 date string. Same as publishedAt unless content has been materially revised. */
  modifiedAt: string;
  /** Approximate reading time in minutes, rounded. */
  readingMinutes: number;
  /** Short topical tags. Surfaced on index card; not part of schema. */
  tags: ReadonlyArray<string>;
};
