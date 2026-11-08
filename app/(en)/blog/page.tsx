import type { Metadata } from "next";
import { BlogIndexView, buildBlogIndexMetadata } from "../../views/blog-index/BlogIndexView";
import { blogIndexContent } from "./content";

export const metadata: Metadata = buildBlogIndexMetadata("en", blogIndexContent);

export default function BlogIndexPage() {
  return <BlogIndexView locale="en" content={blogIndexContent} />;
}
