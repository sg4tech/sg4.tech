import { createLookup } from "../lookup";

// The languages the site is published in. Adding a locale here makes the type
// system demand everything that locale needs: a dictionary, a config entry, and
// content for every page that is translated into it.
export const LOCALES = ["en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "en" satisfies Locale;

type LocaleConfig = {
  /** Language code for <html lang>. */
  htmlLang: string;
  /** BCP 47 tag for Intl date formatting. */
  intlTag: string;
  /** Open Graph locale (language_TERRITORY). */
  ogLocale: string;
  /** URL prefix in front of every path; empty for the default locale. */
  pathPrefix: "" | `/${string}`;
};

export const getLocaleConfig = createLookup<Locale, LocaleConfig>({
  en: { htmlLang: "en", intlTag: "en-US", ogLocale: "en_US", pathPrefix: "" }
});
