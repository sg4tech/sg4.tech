import Article from "@/components/Article";
import content from "@/content/why-nothing-ships.mdx";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Nothing Ships",
  description: "A placeholder diagnosis page about low visible product output."
});

export default function WhyNothingShipsPage() {
  return <Article content={content} />;
}
