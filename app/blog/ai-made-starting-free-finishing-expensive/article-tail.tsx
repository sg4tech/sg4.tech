// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it), then across the AI
// cluster — never to the CTA destination, which would dilute it.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_finishing";

const relatedLinks = [
  {
    href: "/blog/diagnose-broken-engineering-delivery/",
    title: "Where engineering delivery actually breaks",
    description:
      "The metrics playbook this builds on: decomposing T2M into Lead Time and Cycle Time, WIP, and Little's Law."
  },
  {
    href: "/blog/vibecoded-mvp-stopped-shipping/",
    title: "Vibecoded MVP stopped shipping?",
    description:
      "The other half of AI delivery discipline: managing coding agents with the junior-developer practices that already work."
  },
  {
    href: "/ai-vibecoding/",
    title: "The rescue service: AI vibecoding cleanup",
    description:
      "Adding the delivery-system layers AI didn't generate — architecture rules, pipeline guardrails, test coverage."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <aside className={styles.cta}>
      <h3 className={styles.ctaHeading}>Starting a lot and shipping little?</h3>
      <p className={styles.ctaText}>
        The first diagnostic call is 30 minutes on Telegram. Describe how your team and agents work
        today, and I&apos;ll help you find where the finished work is leaking.
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
