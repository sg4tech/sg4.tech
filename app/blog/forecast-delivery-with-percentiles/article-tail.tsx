// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// pillar article first (this post is a spoke off it) and then across to the
// landings — never to the CTA destination, which would dilute it.

import Link from "next/link";
import type { ReactNode } from "react";
import { getPostBySlug } from "../../lib/blog/posts";
import styles from "./page.module.css";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_forecast";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ai-made-starting-free-finishing-expensive");

const relatedLinks = [
  {
    href: "/blog/diagnose-broken-engineering-delivery/",
    title: "Where engineering delivery actually breaks",
    description:
      "The metrics playbook this builds on: decomposing T2M into Lead Time and Cycle Time, WIP, and Little's Law."
  },
  {
    href: `/blog/${finishingPost.slug}/`,
    title: finishingPost.title,
    description: finishingPost.description
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
      <h3 className={styles.ctaHeading}>Dates slipping and you can&apos;t say why?</h3>
      <p className={styles.ctaText}>
        The first diagnostic call is 30 minutes on Telegram. Describe the symptoms, I&apos;ll help you
        find where the distribution — and the system — is breaking.
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
