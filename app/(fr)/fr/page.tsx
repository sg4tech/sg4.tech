import type { Metadata } from "next";
import { HomeView } from "../../views/home/HomeView";
import { buildHomeMetadata } from "../../views/home/home-seo";
import { homeContent } from "./content";

export const metadata: Metadata = buildHomeMetadata("fr", homeContent);

export default function HomePage() {
  return <HomeView locale="fr" content={homeContent} />;
}
