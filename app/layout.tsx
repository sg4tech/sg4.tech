import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sg4.tech"),
  title: {
    default: "SG4 Tech",
    template: "%s | SG4 Tech"
  },
  description:
    "Business-first engineering diagnostics for founders and CEOs who need product delivery to become predictable again."
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
