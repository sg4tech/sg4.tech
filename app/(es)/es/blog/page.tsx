import type { Metadata } from "next";
import { BlogIndexView } from "../../../views/blog-index/BlogIndexView";
import { buildBlogIndexMetadata } from "../../../views/blog-index/blog-index-seo";
import { blogIndexContent } from "./content";

export const metadata: Metadata = buildBlogIndexMetadata("es", blogIndexContent);

export default function BlogIndexPage() {
  return <BlogIndexView locale="es" content={blogIndexContent} />;
}
