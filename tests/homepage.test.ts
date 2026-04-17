import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const requiredAnchors = ['id="problem"', 'id="solution"', 'id="results"', 'id="process"', 'id="fit"', 'id="insights"', 'id="final-cta"'];

const requiredCopy = [
  "I turn slow, expensive engineering into fast, predictable delivery systems.",
  "Book a diagnostic call",
  "Get a delivery diagnosis",
  "See how I work",
  "https://t.me/sg4tech",
  "https://habr.com/ru/users/sg4tech/",
  "https://t.me/cto_lifehacks",
  "https://medium.com/@sg4tech",
  "https://www.linkedin.com/in/victor-demin/",
  "https://github.com/sg4tech/",
  "GitHub",
  "LinkedIn",
  "Telegram",
  "I don't optimize developers. I fix the delivery system.",
  "Victor Demin",
  "15+ years in engineering",
  "8+ years in leadership",
  "Describe your situation — I'll tell you where your system breaks."
];

describe("homepage landing page", () => {
  it("keeps the core lead-generation structure on the homepage", () => {
    const filePath = join(process.cwd(), "app", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    for (const anchor of requiredAnchors) {
      expect(content).toContain(anchor);
    }

    for (const phrase of requiredCopy) {
      expect(content).toContain(phrase);
    }
  });
});
