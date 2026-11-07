import type { Metadata } from "next";
import { Button } from "./components/Button";
import { Page } from "./components/Page";
import { Section } from "./components/Section";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNav } from "./components/SiteNav";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true }
};

// Served as 404.html by the static export, so a broken link lands on a page
// with the site's nav, a way home, and the footer.
export default function NotFound() {
  return (
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
  );
}
