import type { Metadata } from "next";
import { BlogIndexView } from "../../../views/blog-index/BlogIndexView";
import { buildBlogIndexMetadata } from "../../../views/blog-index/blog-index-seo";
import { blogIndexContent } from "./content";

export const metadata: Metadata = buildBlogIndexMetadata("pt-br", blogIndexContent);

export default function BlogIndexPage() {
  return <BlogIndexView locale="pt-br" content={blogIndexContent} />;
}
