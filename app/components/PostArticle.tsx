import type { ComponentType } from "react";
import type { EnPostSlug } from "../lib/blog/registry/en";
import { getPostSections, type PostSectionKey } from "../lib/blog/post-sections";
import { createLookup } from "../lib/lookup";
import { BlogPostLayout, type BlogPostLayoutProps } from "./BlogPostLayout";

type PostArticleProps<S extends EnPostSlug> = Omit<BlogPostLayoutProps, "lede" | "children"> & {
  /** The English original: its section order is the post's structure in every language. */
  original: S;
  /** The language version's lede and sections, by name. */
  sections: Readonly<Record<PostSectionKey<S> | "ArticleLede", ComponentType>>;
  /** The post stylesheet's body column. */
  bodyClassName: string;
};

// One post page in any language: the original's sections, in its order, filled
// with this language's components. The structure lives in post-sections, so a
// translation supplies text and cannot drift from the original's shape.
export function PostArticle<S extends EnPostSlug>({ original, sections, bodyClassName, ...layout }: PostArticleProps<S>) {
  const section = createLookup<PostSectionKey<S> | "ArticleLede", ComponentType>(sections);
  const Lede = section("ArticleLede");
  return (
    <BlogPostLayout {...layout} lede={<Lede />}>
      <div className={bodyClassName}>
        {getPostSections(original).map((key) => {
          const Section = section(key);
          return <Section key={key} />;
        })}
      </div>
    </BlogPostLayout>
  );
}
