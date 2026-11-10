import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Blog",
    socialTitle: "Blog de Victor Demin",
    description:
      "Articles de fond sur les systèmes de livraison logicielle, les métriques, les goulots d’étranglement et les pratiques qui rendent les livraisons prévisibles."
  },
  heading: "Articles sur la livraison logicielle",
  intro:
    "Des articles de fond sur ce qui rend les livraisons prévisibles : métriques, goulots d’étranglement, WIP et les pratiques de terrain qui les font bouger."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Blog : articles sur la livraison logicielle, par Victor Demin",
  eyebrow: "Blog",
  title: "Articles sur la livraison logicielle",
  subtitle: "Des articles de fond sur ce qui rend les livraisons prévisibles."
};
