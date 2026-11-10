import type { Metadata } from "next";
import { HomeView } from "../../views/home/HomeView";
import { buildHomeMetadata } from "../../views/home/home-seo";
import { homeContent } from "./content";

export const metadata: Metadata = buildHomeMetadata("ru", homeContent);

export default function HomePage() {
  return <HomeView locale="ru" content={homeContent} />;
}
