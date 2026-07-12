import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "../components/Eyebrow";
import { FooterSection } from "../components/FooterSection";
import { Page } from "../components/Page";
import { Section } from "../components/Section";
import { TopNavigation } from "../components/TopNavigation";
import { BRAND_COPYRIGHT, BRAND_NAME, footerLinks, footerDisclaimers, legalLinks, SITE_URL } from "../lib/brand";
import type { NavigationItem } from "../lib/navigation";
import { PrivacyBody } from "./privacy-content";
import styles from "./page.module.css";

const PAGE_URL = `${SITE_URL}/privacy/`;

const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home", mobileNav: "primary" },
  { href: "/blog/", label: "Blog", mobileNav: "primary" },
  { href: "/yii2/", label: "Yii2", mobileNav: "secondary" },
  { href: "/ai-vibecoding/", label: "AI vibecoding", mobileNav: "secondary" }
];

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
      <TopNavigation items={navigationItems} ariaLabel="Site navigation" />
      <Section className={styles.article}>
        <Link href="/" className={styles.backLink}>
          ← Home
        </Link>
        <Eyebrow>Legal</Eyebrow>
        <h1 className={styles.title}>Privacy Notice</h1>
        <p className={styles.updated}>Last updated: 12 July 2026</p>
        <PrivacyBody />
      </Section>
      <FooterSection links={footerLinks} copyright={BRAND_COPYRIGHT} legalLinks={legalLinks} disclaimers={footerDisclaimers} />
    </Page>
  );
}
