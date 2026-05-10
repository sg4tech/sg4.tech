import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const requiredAnchors = ['id="problem"', 'id="quality"', 'id="speed"', 'id="why-me"', 'id="process"', 'id="faq"', 'id="proof"', 'id="final-cta"'];

const requiredCopy = [
  "Yii2 delivery consulting",
  "Is your Yii2 project slowing the business down?",
  "Usually the problem is not one bug or one developer.",
  "I help turn Yii2 delivery into a system that works",
  "First we fix quality: uptime, bugs, and release predictability.",
  "Then we fix speed. Speed is not solved by code alone.",
  "guardrails",
  "CI/CD",
  "monitoring",
  "AI agents",
  "Why me",
  "How I work",
  "FAQ",
  "15+ years in the industry",
  "Wowworks (B2B facility management, EU, $3.6M raised)",
  "Skyeng (K-12 EdTech platform, 2M+ MAU, $100M+ valuation)",
  "Habr",
  "Telegram",
  "Medium",
  "LinkedIn",
  "PHPConf talk",
  "https://phprussia.ru/2019/meetups#1457427",
  "How to use Yii2 in Enterprise? Borrowing Symfony best practices.",
  "YouTube recording",
  "https://www.youtube.com/watch?v=lCMn52lMQks",
  "https://t.me/sg4tech?start=site_yii2_hero",
  "https://t.me/sg4tech?start=site_yii2_final",
  'href="/"',
  "Back to main consulting page",
  "cta_click",
  "Discuss the project",
  "Get an action plan",
  "Do we need to rewrite the whole project?",
  "No magic, and no rewrite for the sake of rewriting."
];

describe("yii2 landing page", () => {
  it("keeps the dedicated Yii2 offer, proof points, and CTA structure", () => {
    const filePath = join(process.cwd(), "app", "yii2", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    for (const anchor of requiredAnchors) {
      expect(content).toContain(anchor);
    }

    for (const phrase of requiredCopy) {
      expect(content).toContain(phrase);
    }
  });
});
