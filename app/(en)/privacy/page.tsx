import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../../components/Eyebrow";
import { Page } from "../../components/Page";
import { Section } from "../../components/Section";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNav } from "../../components/SiteNav";
import { pagePath } from "../../lib/i18n/pages";
import { buildPageMetadata } from "../../lib/page-metadata";
import { PrivacyBody } from "./privacy-content";
import styles from "./page.module.css";

export const metadata: Metadata = buildPageMetadata("en", "privacy", {
  title: "Privacy Notice",
  description:
    "How this website handles data: cookieless Umami analytics, GitHub Pages hosting, no accounts or contact forms, and the rights you have."
});

export default function PrivacyPage() {
  return (
    <Page>
      <SiteNav locale="en" page="privacy" />
      <Section className={styles.article}>
        <Link href={pagePath("en", "home")} className={styles.backLink}>
          ← Home
        </Link>
        <Eyebrow>Legal</Eyebrow>
        <h1 className={styles.title}>Privacy Notice</h1>
        <p className={styles.updated}>Last updated: 12 July 2026</p>
        <PrivacyBody />
      </Section>
      <SiteFooter locale="en" />
    </Page>
  );
}
