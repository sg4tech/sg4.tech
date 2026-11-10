import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Blog",
    socialTitle: "Blog – Victor Demin",
    description:
      "Ausführliche Essays über Software-Delivery: Entwicklungsprozesse, Metriken, Engpässe und die Praxis hinter planbaren Releases."
  },
  heading: "Essays über Software-Delivery",
  intro:
    "Ausführliche Texte über die Systeme hinter planbaren Releases: Metriken, Engpässe, WIP und die Praxis, mit der sie sich verbessern lassen."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Blog – Essays über Software-Delivery von Victor Demin",
  eyebrow: "Blog",
  title: "Essays über Software-Delivery",
  subtitle: "Ausführliche Texte über die Systeme hinter planbaren Releases."
};
