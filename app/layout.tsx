import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sg4.tech"),
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
    icon: [{ url: "/brand/logo.svg", type: "image/svg+xml" }]
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
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
