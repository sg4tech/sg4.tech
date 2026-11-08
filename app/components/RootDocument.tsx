import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { getDictionary } from "../lib/i18n/dictionary";
import { getLocaleConfig, type Locale } from "../lib/i18n/locales";
import { umamiTracker } from "../lib/umami-tracker";

// Brand typeface (Victor Demin Design System v2): Hanken Grotesk carries
// display + body + UI; JetBrains Mono is reserved for code/technical strings.
// next/font self-hosts both at build time — no Google Fonts runtime request.
const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap"
});

type RootDocumentProps = {
  locale: Locale;
  children: ReactNode;
};

// The one <html> shell. Every root layout (one per locale) and the global 404
// render through it, so fonts and analytics stay identical. Each of those root
// files imports app/globals.css itself — shared components stay style-agnostic.
export function RootDocument({ locale, children }: RootDocumentProps) {
  return (
    <html lang={getLocaleConfig(locale).htmlLang} className={`${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          {getDictionary(locale).document.skipLink}
        </a>
        {children}
        <Script
          defer
          src={umamiTracker.src}
          data-website-id={umamiTracker.websiteId}
          data-domains={umamiTracker.domains}
        />
      </body>
    </html>
  );
}
