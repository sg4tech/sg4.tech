// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position). Related links run across the AI
// cluster and to the rescue service — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../components/BlogCta";
import { BlogRelated } from "../../components/BlogRelated";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_entropy";

const relatedLinks = [
  {
    href: "/blog/vibecoded-mvp-stopped-shipping/",
    title: "Vibecoded MVP stopped shipping?",
    description:
      "Why agent-built code needs the same guardrails as a junior's, and the order to add them."
  },
  {
    href: "/blog/ai-coding-agent-periphery-core/",
    title: "AI coding agents: give them the periphery, keep humans on the core",
    description: "What to hand an agent and what to keep for humans."
  },
  {
    href: "/ai-vibecoding/",
    title: "The rescue service: AI vibecoding cleanup",
    description: "Adding the checks and architecture rules a codebase grew without."
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta heading="Agents writing code faster than you can review it?" href={CTA_HREF}>
      The first call is 30 minutes on Telegram. Tell me what your CI checks today, and I&apos;ll
      help you find which levels are missing and in what order to add them.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated links={relatedLinks} />;
}
