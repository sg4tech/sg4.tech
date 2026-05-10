import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("lists every live public route on the canonical domain", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(urls).toEqual(
      expect.arrayContaining(["https://sg4.tech/", "https://sg4.tech/yii2"])
    );
  });

  it("does not advertise routes that have no built page", () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);
    const placeholderRoutes = [
      "https://sg4.tech/about",
      "https://sg4.tech/why-engineering-is-slow",
      "https://sg4.tech/why-hiring-more-engineers-doesnt-help",
      "https://sg4.tech/why-nothing-ships"
    ];

    for (const url of placeholderRoutes) {
      expect(urls).not.toContain(url);
    }
  });
});

describe("canonical metadata", () => {
  it("declares the home page canonical relative to metadataBase", () => {
    const filePath = join(process.cwd(), "app", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/"/);
  });

  it("declares the yii2 page canonical relative to metadataBase", () => {
    const filePath = join(process.cwd(), "app", "yii2", "page.tsx");
    const content = readFileSync(filePath, "utf8");

    expect(content).toMatch(/alternates:\s*{\s*canonical:\s*"\/yii2"/);
  });
});

describe("llms.txt", () => {
  it("ships from public/ with canonical site links and contact", () => {
    const filePath = join(process.cwd(), "public", "llms.txt");
    const content = readFileSync(filePath, "utf8");

    expect(content).toContain("Victor Demin");
    expect(content).toContain("https://sg4.tech/");
    expect(content).toContain("https://sg4.tech/yii2");
    expect(content).toContain("https://t.me/sg4tech");
  });
});
