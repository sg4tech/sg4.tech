import type { Metadata, Viewport } from "next";
import { Button } from "./components/Button";
import { Page } from "./components/Page";
import { RootDocument } from "./components/RootDocument";
import { Section } from "./components/Section";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import { SITE_TITLE_TEMPLATE, siteMetadata, siteViewport } from "./lib/site-metadata";
import styles from "./not-found.module.css";
import "./globals.css";

// The app has one root layout per locale, so the 404 for unmatched URLs is the
// global one: it renders outside every layout and brings its own document.
export const metadata: Metadata = {
  ...siteMetadata,
  title: SITE_TITLE_TEMPLATE.replace("%s", "Page not found"),
  robots: { index: false, follow: true }
};
export const viewport: Viewport = siteViewport;

// Served as 404.html by the static export, so a broken link lands on a page
// with the site's nav, a way home, and the footer.
export default function NotFound() {
  return (
    <RootDocument lang="en" skipLinkLabel="Skip to main content">
      <Page>
        <SiteNav />
        <Section className={styles.notFound}>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.text}>The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
          <div className={styles.actions}>
            <Button href="/">Back to home</Button>
          </div>
        </Section>
        <SiteFooter />
      </Page>
    </RootDocument>
  );
}
