import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Blog",
    socialTitle: "Blog — Victor Demin",
    description:
      "Ensaios longos sobre sistemas de entrega de software, métricas, gargalos e as práticas de gestão que tornam as entregas previsíveis."
  },
  heading: "Ensaios sobre entrega de software",
  intro:
    "Textos longos sobre os sistemas por trás de entregas previsíveis: métricas, gargalos, WIP e as práticas de gestão que fazem tudo isso andar."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Blog — ensaios sobre entrega de software, por Victor Demin",
  eyebrow: "Blog",
  title: "Ensaios sobre entrega de software",
  subtitle: "Textos longos sobre os sistemas por trás de entregas previsíveis."
};
