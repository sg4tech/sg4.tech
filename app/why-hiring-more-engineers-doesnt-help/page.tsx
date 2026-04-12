import Article from "@/components/Article";
import content from "@/content/why-hiring-more-engineers-doesnt-help.mdx";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Why Hiring More Engineers Doesn't Help",
  description: "A placeholder diagnosis page about why adding engineers does not automatically improve throughput."
});

export default function WhyHiringMoreEngineersPage() {
  return <Article content={content} />;
}
