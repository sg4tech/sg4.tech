// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_vibecoding";

const relatedLinks = [
  {
    href: "/ai-vibecoding/",
    title: "AI vibecoding cleanup",
    description:
      "The service version of this essay: the delivery-system layers AI doesn't generate, what each phase costs, and what it returns."
  },
  {
    href: "/blog/diagnose-broken-engineering-delivery/",
    title: "Where engineering delivery actually breaks",
    description:
      "The metrics playbook: decomposing T2M into Lead Time and Cycle Time, WIP, and Little's Law — for teams of any size."
  },
  {
    href: "/blog/forecast-delivery-with-percentiles/",
    title: "Average lead time is lying to you",
    description:
      "How to forecast delivery with median, spread, and percentiles — and commit to dates you can actually hit."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <aside className={styles.cta}>
      <h3 className={styles.ctaHeading}>MVP stalled and every fix breaks something else?</h3>
      <p className={styles.ctaText}>
        The first diagnostic call is 30 minutes on Telegram. Describe what stopped shipping —
        I&apos;ll point at which layer is missing and what to add first.
      </p>
      <a href={CTA_HREF} target="_blank" rel="noreferrer" className={styles.ctaButton}>
        Book a diagnostic call on Telegram
      </a>
    </aside>
  );
}

export function ArticleRelated(): ReactNode {
  return (
    <aside className={styles.related}>
      <h3 className={styles.relatedTitle}>Related</h3>
      <p className={styles.relatedIntro}>Where to go next, depending on what you&apos;re working with.</p>
      <ul className={styles.relatedList}>
        {relatedLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.relatedLink}>
              <span className={styles.relatedLinkTitle}>{link.title}</span>
              <span className={styles.relatedLinkDescription}>{link.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
