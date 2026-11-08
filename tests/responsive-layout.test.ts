import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { getSiteNavigationItems } from "@/app/lib/navigation";

describe("responsive layout guardrails", () => {
  it("keeps the dedicated mobile navigation and CTA rules", () => {
    const buttonCssPath = join(process.cwd(), "app", "components", "Button.module.css");
    const navTsxPath = join(process.cwd(), "app", "components", "TopNavigation.tsx");
    const navCssPath = join(process.cwd(), "app", "components", "TopNavigation.module.css");

    const pageCss = readFileSync(buttonCssPath, "utf8");
    const navTsx = readFileSync(navTsxPath, "utf8");
    const navCss = readFileSync(navCssPath, "utf8");

    const navTabletSection = navCss.split("@media (max-width: 860px)")[1] ?? "";
    const navMobileSection = navCss.split("@media (max-width: 640px)")[1] ?? "";
    const pageMobileSection = pageCss.split("@media (max-width: 640px)")[1] ?? "";

    // Nav data shape: items carry mobileNav role + the component honours it via data-attr.
    const mobileNav = getSiteNavigationItems("en").map((item) => item.mobileNav);
    expect(mobileNav).toContain("primary");
    expect(mobileNav).toContain("secondary");
    expect(navTsx).toContain("data-mobile-nav={item.mobileNav}");

    // Below desktop the nav is one row: logo plus a few pills, never a tile grid
    // that pushes the hero out of the first screen.
    expect(navCss).toContain("@media (max-width: 640px)");
    expect(navCss).toContain("@media (max-width: 860px)");
    expect(navCss).not.toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
    expect(navTabletSection).not.toContain("flex-direction: column;");
    expect(navCss).toContain("min-height: 2.75rem;");
    expect(navTabletSection).toContain("flex-wrap: nowrap;");
    expect(navTabletSection).toContain("white-space: nowrap;");
    expect(navMobileSection).toContain(".brand {");

    // Button component collapse rules live in Button.module.css.
    expect(pageMobileSection).toContain(".primary {\n    width: 100%;");
    expect(pageMobileSection).toContain(".secondary {\n    width: auto;");
  });
});
