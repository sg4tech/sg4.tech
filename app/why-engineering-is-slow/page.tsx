import Article from "@/components/Article";
import content from "@/content/why-engineering-is-slow.mdx";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Engineering Is Slow",
  description: "A placeholder diagnosis page about slow engineering delivery."
});

export default function WhyEngineeringIsSlowPage() {
  return <Article content={content} />;
}
