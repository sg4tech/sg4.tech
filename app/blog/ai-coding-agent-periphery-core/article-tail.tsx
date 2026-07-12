// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position); the founder mention in the body
// stays a soft internal link, not a second CTA. Related links run across the AI
// cluster and up to the delivery pillar — never to the CTA destination.

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./page.module.css";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_periphery";

const relatedLinks = [
  {
    href: "/blog/ai-made-starting-free-finishing-expensive/",
    title: "AI made starting nearly free. Finishing is still expensive.",
    description:
      "Why cheap starts fill the board but not production — WIP and Little's Law applied to agents as well as people."
  },
  {
    href: "/blog/vibecoded-mvp-stopped-shipping/",
    title: "Vibecoded MVP stopped shipping?",
    description:
      "When an agent-built codebase reaches the “afraid to change anything” stage — and the junior-developer practices that fix it."
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
      <h3 className={styles.ctaHeading}>Running agents on real work?</h3>
      <p className={styles.ctaText}>
        The first call is 30 minutes on Telegram. Tell me how your team and agents work today, and
        I&apos;ll help you find the line between what to hand the agent and what to keep on the core.
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
