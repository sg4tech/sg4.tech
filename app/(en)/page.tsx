import type { Metadata } from "next";
import { buildHomeMetadata, HomeView } from "../views/home/HomeView";
import { homeContent } from "./content";

export const metadata: Metadata = buildHomeMetadata("en", homeContent);

export default function HomePage() {
  return <HomeView locale="en" content={homeContent} />;
}
