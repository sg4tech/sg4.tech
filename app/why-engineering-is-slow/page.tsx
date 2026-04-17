import Article from "@/components/Article";
import content from "@/content/why-engineering-is-slow.mdx";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Engineering Feels Slow Even With a Full Team",
  description: "A business-first diagnosis of why engineering delivery feels slow even when the team is busy."
});

export default function WhyEngineeringIsSlowPage() {
  return <Article content={content} />;
}
