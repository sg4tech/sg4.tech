// CTA + Related asides, split from article-content.tsx so the prose file
// stays focused on the body sections. The Related list links up to the
// /ai-vibecoding landing first (this post is a spoke off that hub), then the
// metrics pillar — never to the CTA destination, which would dilute it.

import type { ReactNode } from "react";
import { BlogCta } from "../../components/BlogCta";
import { BlogRelated } from "../../components/BlogRelated";
import { getPostBySlug } from "../../lib/blog/posts";

const CTA_HREF = "https://t.me/sg4tech?start=site_blog_vibecoding";

// Sibling spoke card comes from the post registry so its title/description
// never drift from the article's own metadata.
const finishingPost = getPostBySlug("ai-made-starting-free-finishing-expensive");
const entropyPost = getPostBySlug("code-entropy-ci-checks-ai-legacy");

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
    href: `/blog/${finishingPost.slug}/`,
    title: finishingPost.title,
    description: finishingPost.description
  },
  {
    href: `/blog/${entropyPost.slug}/`,
    title: entropyPost.title,
    description: entropyPost.description
  }
] as const;

export function ArticleCta(): ReactNode {
  return (
    <BlogCta heading="MVP stalled and every fix breaks something else?" href={CTA_HREF}>
      The first diagnostic call is 30 minutes on Telegram. Describe what stopped shipping —
      I&apos;ll point at which layer is missing and what to add first.
    </BlogCta>
  );
}

export function ArticleRelated(): ReactNode {
  return <BlogRelated links={relatedLinks} />;
}
