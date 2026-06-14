import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import { SITE_URL } from "./lib/brand";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Victor Demin",
    template: "%s | Victor Demin"
  },
  description:
    "Business-first engineering diagnostics for founders and CEOs who need product delivery to become predictable again.",
  authors: [{ name: "Victor Demin", url: "https://www.linkedin.com/in/victor-demin/" }],
  creator: "Victor Demin",
  publisher: "Victor Demin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/brand/logo.svg", type: "image/svg+xml" }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111"
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e6f16f01-14da-478f-95c7-d574ee9122c2"
        />
      </body>
    </html>
  );
}
