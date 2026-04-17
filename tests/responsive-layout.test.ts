import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("responsive layout guardrails", () => {
  it("keeps the dedicated mobile navigation and CTA rules", () => {
    const filePath = join(process.cwd(), "app", "page.module.css");
    const content = readFileSync(filePath, "utf8");
    const tabletSection = content.split("@media (max-width: 860px)")[1] ?? "";
    const mobileSection = content.split("@media (max-width: 640px)")[1] ?? "";
    const narrowMobileSection = content.split("@media (max-width: 390px)")[1] ?? "";

    expect(content).toContain("@media (max-width: 640px)");
    expect(content).toContain("@media (max-width: 390px)");
    expect(content).toContain("@media (max-width: 860px)");
    expect(content).toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
    expect(content).toContain("min-height: 2.75rem;");
    expect(tabletSection).toContain("display: none;");
    expect(narrowMobileSection).toContain("grid-template-columns: 1fr;");
    expect(mobileSection).toContain(".primaryButton {\n    width: 100%;");
    expect(mobileSection).toContain(".secondaryButton {\n    width: auto;");
  });
});
