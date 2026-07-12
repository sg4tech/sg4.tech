import { FooterSection } from "./FooterSection";
import { BRAND_COPYRIGHT, footerDisclaimers, footerLinks, legalLinks } from "../lib/brand";

// Site-wide footer: FooterSection wired to the canonical brand data. Every page
// renders <SiteFooter /> with no props, so adding or changing a footer prop is a
// one-file change here — FooterSection stays presentational and reusable.
export function SiteFooter() {
  return (
    <FooterSection
      links={footerLinks}
      copyright={BRAND_COPYRIGHT}
      legalLinks={legalLinks}
      disclaimers={footerDisclaimers}
    />
  );
}
