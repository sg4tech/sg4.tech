import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const requiredAnchors = ['id="problem"', 'id="solution"', 'id="results"', 'id="process"', 'id="fit"', 'id="insights"', 'id="final-cta"'];

const requiredCopy = [
  "Software engineering & technical leadership",
  "I build systems that work.",
  "Software that ships on time, holds up in production, and doesn&apos;t fall apart as it grows.",
  "Using system thinking, delivery metrics, and AI, I build software with product teams — faster and with less chaos.",
  "Discuss your project",
  "See how I work",
  "https://t.me/sg4tech",
  "https://t.me/sg4tech?start=site_hero",
  "https://t.me/sg4tech?start=site_final",
  "cta_click",
  "https://habr.com/users/sg4tech/",
  "https://t.me/cto_lifehacks",
  "https://medium.com/@sg4tech",
  "https://www.linkedin.com/in/victor-demin/",
  "https://github.com/sg4tech/",
  "GitHub",
  "LinkedIn",
  "Telegram",
  "What do you actually do?",
  "When are you the right fit?",
  "When are you not the right fit?",
  "How fast can we see results?",
  "I ship the product. You bring the customers.",
  "You already have revenue and a working sales channel",
  "Idea stage — no clear audience, validated MVP, or revenue yet",
  "Unpaid work or equity-only deals",
  "Marketing, growth, or lead-generation services",
  "I ship the product; selling it stays with you.",
  "I don't optimize developers. I fix the delivery system.",
  "2–3x faster delivery",
  "Up to 10x fewer bugs and downtime",
  "Higher predictability",
  "Victor Demin",
  "15+ years in engineering",
  "8+ years in leadership",
  // Final-CTA headline uses the design system's two-tone device: the closing
  // clause is wrapped in <em> (flipped to ink on the ember block), so the
  // headline is asserted as its two contiguous fragments rather than one span.
  "Tell me what you&apos;re building —",
  "<em>I&apos;ll ship it.</em>",
  "I'll reply with how I'd scope the work and the first release.",
  "Ship & stabilize",
  "a product that holds up in production",
  "Running a Yii2 project?",
  "/yii2/",
  "There is a dedicated landing page for Yii2 development"
];

describe("homepage landing page", () => {
  it("keeps the core lead-generation structure on the homepage", () => {
    // Read the page + the shared brand module: footer links + copyright live
    // in app/lib/brand.ts, but the contract is still that they end up rendered
    // on the homepage.
    const pagePath = join(process.cwd(), "app", "page.tsx");
    const brandPath = join(process.cwd(), "app", "lib", "brand.ts");
    const content = `${readFileSync(pagePath, "utf8")}\n${readFileSync(brandPath, "utf8")}`;

    for (const anchor of requiredAnchors) {
      expect(content).toContain(anchor);
    }

    for (const phrase of requiredCopy) {
      expect(content).toContain(phrase);
    }
  });

  it("does not repeat blocks that duplicate other sections", () => {
    // "What to expect" repeated the FAQ answer, "Why this works" repeated
    // "Why me", and the bare topic list repeated the writing links below it.
    const content = readFileSync(join(process.cwd(), "app", "page.tsx"), "utf8");
    for (const phrase of ["What to expect", "Why this works", "Metrics that actually matter"]) {
      expect(content).not.toContain(phrase);
    }
  });
});
