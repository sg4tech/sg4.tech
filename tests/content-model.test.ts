import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const requiredSections = [
  "## TL;DR",
  "## Symptoms",
  "## Why this happens",
  "## What most companies do wrong",
  "## How to diagnose",
  "## What actually works",
  "## Real case"
];

describe("flagship content model", () => {
  it("keeps the mandatory diagnostic structure for the main product page", () => {
    const filePath = join(process.cwd(), "content", "why-engineering-is-slow.mdx");
    const content = readFileSync(filePath, "utf8");

    expect(content.startsWith("# ")).toBe(true);

    for (const section of requiredSections) {
      expect(content).toContain(section);
    }
  });
});
