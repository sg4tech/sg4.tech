import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "../components/RootDocument";
import { siteMetadata, siteViewport } from "../lib/site-metadata";
import "../globals.css";

export const metadata: Metadata = siteMetadata;
export const viewport: Viewport = siteViewport;

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <RootDocument lang="en" skipLinkLabel="Skip to main content">
      {children}
    </RootDocument>
  );
}
