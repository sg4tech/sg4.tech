// Global styles (the `base` cascade layer — see docs/engineering-checks.md).
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Button } from "./components/Button";
import { Page } from "./components/Page";
import { RootDocument } from "./components/RootDocument";
import { Section } from "./components/Section";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { getDictionary } from "./lib/i18n/dictionary";
import { DEFAULT_LOCALE, getLocaleConfig, LOCALES } from "./lib/i18n/locales";
import { isPagePublished, pagePath } from "./lib/i18n/pages";
import { withSiteName } from "./lib/brand";
import { buildSiteMetadata, siteViewport } from "./lib/site-metadata";
import styles from "./not-found.module.css";

// The app has one root layout per locale, so the 404 for unmatched URLs is the
// global one: it renders outside every layout and brings its own document.
// Static hosting serves one 404.html for every unknown URL, so it speaks the
// default locale — and offers every other published locale's home in that
// locale's own words, so a visitor from a translated page has a way back.
const locale = DEFAULT_LOCALE;
const { notFound } = getDictionary(locale);
const otherHomes = LOCALES.filter((other) => other !== locale && isPagePublished(other, "home"));

export const metadata: Metadata = {
  ...buildSiteMetadata(locale),
  title: withSiteName(notFound.title),
  robots: { index: false, follow: true }
};
export const viewport: Viewport = siteViewport;

// Served as 404.html by the static export, so a broken link lands on a page
// with the site's nav, a way home, and the footer.
export default function NotFound() {
  return (
    <RootDocument locale={locale}>
      <Page>
        <SiteNav locale={locale} />
        <Section className={styles.notFound}>
          <h1 className={styles.title}>{notFound.title}</h1>
          <p className={styles.text}>{notFound.text}</p>
          <div className={styles.actions}>
            <Button href={pagePath(locale, "home")}>{notFound.backHome}</Button>
            {otherHomes.map((other) => (
              <span key={other} lang={getLocaleConfig(other).htmlLang}>
                <Button variant="secondary" href={pagePath(other, "home")}>
                  {getDictionary(other).notFound.backHome}
                </Button>
              </span>
            ))}
          </div>
        </Section>
        <SiteFooter locale={locale} />
      </Page>
    </RootDocument>
  );
}
