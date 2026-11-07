import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const read = (...parts: string[]) => readFileSync(join(process.cwd(), ...parts), "utf8");

// FAQ is secondary: a list of questions to scan, answers on demand. Native
// <details> keeps it JS-free and keyboard/screen-reader friendly; the answer
// stays in the DOM, and FAQPage JSON-LD is built from data, not the markup.
describe("collapsible FAQ", () => {
  const tsx = read("app", "components", "FaqItem.tsx");
  const css = read("app", "components", "FaqItem.module.css");

  it("renders each item as a closed <details> with the question in <summary>", () => {
    expect(tsx).toMatch(/<details className=\{styles\.faqItem\}>/);
    expect(tsx).not.toMatch(/<details[^>]*\bopen\b/);
    expect(tsx).toMatch(/<summary className=\{styles\.summary\}>\s*<h3 className=\{styles\.question\}>/);
  });

  it("hides the browser marker and turns the plus into a cross when open", () => {
    expect(css).toMatch(/\.summary \{[^}]*list-style: none;/);
    expect(css).toContain(".summary::-webkit-details-marker");
    expect(css).toMatch(/\.faqItem\[open\] \.toggle \{[^}]*transform: rotate\(45deg\);/);
  });
});

// The homepage's "right fit" / "not the right fit" answers repeated the
// "Who I work with" section on the same page.
describe("homepage FAQ", () => {
  const page = read("app", "page.tsx");
  const faq = page.split("const faqItems = [")[1]?.split("\n];")[0] ?? "";

  it.each(["When are you the right fit?", "When are you not the right fit?"])("drops the duplicate: %s", (q) => {
    expect(faq).not.toContain(q);
  });

  it("keeps the questions the page does not answer elsewhere", () => {
    expect(faq).toContain("What do you actually do?");
    expect(faq).toContain("How soon will something ship?");
  });
});
