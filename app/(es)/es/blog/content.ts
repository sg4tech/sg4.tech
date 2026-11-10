import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Blog",
    socialTitle: "Blog — Victor Demin",
    description:
      "Artículos a fondo sobre cómo se organiza la entrega de software: métricas, cuellos de botella y las prácticas de gestión que hacen previsibles los lanzamientos."
  },
  heading: "Artículos sobre la entrega de software",
  intro:
    "Textos a fondo sobre los sistemas que hacen previsibles los lanzamientos: métricas, cuellos de botella, WIP y las prácticas de gestión que los mueven."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Blog: artículos sobre la entrega de software, por Victor Demin",
  eyebrow: "Blog",
  title: "Artículos sobre la entrega de software",
  subtitle: "Textos a fondo sobre los sistemas que hacen previsibles los lanzamientos."
};
