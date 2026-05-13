import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("responsive layout guardrails", () => {
  it("keeps the dedicated mobile navigation and CTA rules", () => {
    const pagePath = join(process.cwd(), "app", "page.tsx");
    const buttonCssPath = join(process.cwd(), "app", "components", "Button.module.css");
    const navTsxPath = join(process.cwd(), "app", "components", "TopNavigation.tsx");
    const navCssPath = join(process.cwd(), "app", "components", "TopNavigation.module.css");

    const pageContent = readFileSync(pagePath, "utf8");
    const pageCss = readFileSync(buttonCssPath, "utf8");
    const navTsx = readFileSync(navTsxPath, "utf8");
    const navCss = readFileSync(navCssPath, "utf8");

    const navTabletSection = navCss.split("@media (max-width: 860px)")[1] ?? "";
    const navMobileSection = navCss.split("@media (max-width: 640px)")[1] ?? "";
    const pageMobileSection = pageCss.split("@media (max-width: 640px)")[1] ?? "";

    // Nav data shape: items carry mobileNav role + the component honours it via data-attr.
    expect(pageContent).toContain('mobileNav: "primary"');
    expect(pageContent).toContain('mobileNav: "secondary"');
    expect(navTsx).toContain("data-mobile-nav={item.mobileNav}");

    // TopNavigation CSS exposes the 2-col grid layout at tablet and pill-scroll at mobile.
    expect(navCss).toContain("@media (max-width: 640px)");
    expect(navCss).toContain("@media (max-width: 860px)");
    expect(navCss).toContain("grid-template-columns: repeat(2, minmax(0, 1fr));");
    expect(navCss).toContain("min-height: 2.75rem;");
    expect(navTabletSection).toContain('a[data-mobile-nav="secondary"]');
    expect(navTabletSection).toContain("display: none;");
    expect(navMobileSection).toContain("display: flex;");
    expect(navMobileSection).toContain("flex-wrap: nowrap;");
    expect(navMobileSection).toContain("overflow-x: auto;");
    expect(navMobileSection).toContain("white-space: nowrap;");

    // Button component collapse rules live in Button.module.css.
    expect(pageMobileSection).toContain(".primary {\n    width: 100%;");
    expect(pageMobileSection).toContain(".secondary {\n    width: auto;");
  });
});
