// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The single Telegram CTA lives here, at
// the end (the strongest conversion position); the founder mention in the body
// stays a soft internal link, not a second CTA. Related links run across the AI
// cluster and up to the delivery pillar — never to the CTA destination.

import type { ReactNode } from "react";
import { BlogCta } from "../../components/BlogCta";
import { BlogRelated } from "../../components/BlogRelated";
import { getPostBySlug } from "../../lib/blog/posts";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_periphery";

const entropyPost = getPostBySlug("code-entropy-ci-checks-ai-legacy");

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
    href: `/blog/${entropyPost.slug}/`,
    title: entropyPost.title,
    description: entropyPost.description
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
    <BlogCta heading="Running agents on real work?" href={CTA_HREF}>
      The first call is 30 minutes on Telegram. Tell me how your team and agents work today, and
      I&apos;ll help you find the line between what to hand the agent and what to keep on the core.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated links={relatedLinks} />;
}
