import type { Metadata } from "next";

type SeoInput = {
  title: string;
  description: string;
};

export function createPageMetadata({ title, description }: SeoInput): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
