// Global styles (the `base` cascade layer — see docs/engineering-checks.md).
import "../globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "../components/RootDocument";
import { hankenGrotesk } from "../lib/fonts/hanken";
import { buildSiteMetadata, siteViewport } from "../lib/site-metadata";

export const metadata: Metadata = buildSiteMetadata("es");
export const viewport: Viewport = siteViewport;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <RootDocument locale="es" brandFontClassName={hankenGrotesk.variable}>
      {children}
    </RootDocument>
  );
}
