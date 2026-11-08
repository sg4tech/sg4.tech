import { FooterSection } from "./FooterSection";
import { footerLinks } from "../lib/brand";
import { getDictionary } from "../lib/i18n/dictionary";
import type { Locale } from "../lib/i18n/locales";
import { getLegalLinks } from "../lib/navigation";

type SiteFooterProps = {
  locale: Locale;
};

// Site-wide footer: FooterSection wired to the canonical brand data and the
// locale's dictionary. Every page renders <SiteFooter locale={...} />, so adding
// or changing a footer prop is a one-file change here — FooterSection stays
// presentational and reusable.
export function SiteFooter({ locale }: SiteFooterProps) {
  const { footer } = getDictionary(locale);
  return (
    <FooterSection
      links={footerLinks}
      copyright={footer.copyright}
      legalLinks={getLegalLinks(locale)}
      disclaimers={footer.disclaimers}
      ariaLabel={footer.ariaLabel}
      legalAriaLabel={footer.legalAriaLabel}
    />
  );
}
