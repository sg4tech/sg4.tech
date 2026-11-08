// Global styles load first so every CSS module cascades after them
// (import order is CSS order — see docs/engineering-checks.md).
import "../globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "../components/RootDocument";
import { buildSiteMetadata, siteViewport } from "../lib/site-metadata";

export const metadata: Metadata = buildSiteMetadata("en");
export const viewport: Viewport = siteViewport;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <RootDocument locale="en">
      {children}
    </RootDocument>
  );
}
