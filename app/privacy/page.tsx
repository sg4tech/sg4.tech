import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../components/Eyebrow";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNav } from "../components/SiteNav";
import { BRAND_NAME, SITE_URL } from "../lib/brand";
import { PrivacyBody } from "./privacy-content";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/privacy/`;

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "How this website handles data: cookieless Umami analytics, GitHub Pages hosting, no accounts or contact forms, and the rights you have.",
  alternates: {
    canonical: "/privacy/"
  },
  openGraph: {
    title: "Privacy Notice",
    description:
      "How this website handles data: cookieless Umami analytics, GitHub Pages hosting, no accounts or contact forms, and the rights you have.",
    type: "website",
    siteName: BRAND_NAME,
    locale: "en_US",
    url: PAGE_URL
  }
};

export default function PrivacyPage() {
  return (
    <Page>
      <SiteNav />
      <Section className={styles.article}>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
        <Eyebrow>Legal</Eyebrow>
        <h1 className={styles.title}>Privacy Notice</h1>
        <p className={styles.updated}>Last updated: 12 July 2026</p>
        <PrivacyBody />
      </Section>
      <SiteFooter />
    </Page>
  );
}
