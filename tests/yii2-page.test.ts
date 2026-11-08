import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { englishLandings } from "./support/landings";

// Assertions on the rendered /yii2 landing (copy in app/(en)/yii2/content.tsx,
// structure in app/views/yii2/Yii2View.tsx).
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
];

describe("yii2 landing page", () => {
  const { page, view } = englishLandings.yii2;

  it("keeps the dedicated Yii2 offer, proof points, and CTA structure", () => {
    // The #faq and #why-me anchors come from the shared FaqSection and
    // WhyMeSection; asserting on the rendered page keeps them covered here,
    // because removing either would break in-page nav on the Yii2 landing.
    for (const anchor of requiredAnchors) {
      expect(page.html).toContain(anchor);
    }

    for (const phrase of requiredCopy) {
      expect(page.shows(phrase), phrase).toBe(true);
    }
  });

  it("tracks both contact actions as cta_click and reaches Home via the shared menu", () => {
    // The event fires from the click handler, so it is not in the HTML.
    const source = readFileSync(view, "utf8");
    expect(source).toMatch(/eventName="cta_click"\s+payload=\{\{ location: "yii2_hero" \}\}/);
    expect(source).toMatch(/eventName: "cta_click",\s+payload: \{ location: "yii2_final" \}/);
    expect(source).toContain('<SiteNav locale={locale} current={pagePath(locale, "yii2")} />');
  });
});
