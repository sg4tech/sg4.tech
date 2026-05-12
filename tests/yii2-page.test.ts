import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// Source-level assertions for app/yii2/page.tsx.
//
// Intent: lock in the *structural contract* of the Yii2 landing — the things
// that, if absent, either silently break analytics / external links, or mean
// the page no longer represents the offering it claims to. Everything that is
// pure marketing copy (hero headline, CTA labels, FAQ prose, section h2s) is
// intentionally NOT asserted here, so copy can iterate without a test tax.
//
// Adding a new entry: it must be one of
//   - a section anchor id used by in-page nav,
//   - a tracking URL or analytics event name (pixel-perfect or analytics breaks),
//   - an external resource URL (talks, videos),
//   - a credibility / trust signal whose specific wording is part of the claim
//     (company descriptors, talk title, years of experience),
//   - a positioning term that defines the offering (guardrails, CI/CD, monitoring, AI),
//   - or a profile label whose presence anchors the channel set.

const requiredAnchors = [
  'id="problem"',
  'id="quality"',
  'id="speed"',
  'id="why-me"',
  'id="process"',
  'id="faq"',
  'id="proof"',
  'id="final-cta"'
];

const requiredCopy = [
  // Page identity
  "Yii2",

  // Credibility / trust signals (specific wording is part of the claim)
  "15+ years in the industry",
  "Wowworks (B2B facility management, EU, $3.6M raised)",
  "Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation)",
  "How to use Yii2 in Enterprise? Borrowing Symfony best practices.",

  // Offering positioning — defines what is on the table
  "guardrails",
  "CI/CD",
  "monitoring",
  "AI agents",

  // External resources — stable URLs
  "https://phprussia.ru/2019/meetups#1457427",
  "https://www.youtube.com/watch?v=lCMn52lMQks",

  // Public profile labels — channel set
  "Habr",
  "Telegram",
  "Medium",
  "LinkedIn",

  // Analytics / CTA tracking — must be exact or analytics silently breaks
  "https://t.me/sg4tech?start=site_yii2_hero",
  "https://t.me/sg4tech?start=site_yii2_final",
  "cta_click",

  // Home link from the dedicated page
  'href="/"'
];

describe("yii2 landing page", () => {
  it("keeps the dedicated Yii2 offer, proof points, and CTA structure", () => {
    // Read the page + the shared FaqSection: the #faq anchor moved into
    // app/components/FaqSection.tsx when the FAQ structure was extracted,
    // but the assertion still belongs here because removing the anchor
    // would break in-page nav on the Yii2 landing.
    const pagePath = join(process.cwd(), "app", "yii2", "page.tsx");
    const faqSectionPath = join(process.cwd(), "app", "components", "FaqSection.tsx");
    const content = `${readFileSync(pagePath, "utf8")}\n${readFileSync(faqSectionPath, "utf8")}`;

    for (const anchor of requiredAnchors) {
      expect(content).toContain(anchor);
    }

    for (const phrase of requiredCopy) {
      expect(content).toContain(phrase);
    }
  });
});
