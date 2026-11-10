import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Блог",
    socialTitle: "Блог — Виктор Демин",
    description:
      "Подробные статьи о том, как устроен выпуск продукта: метрики разработки, узкие места и практики, которые делают релизы предсказуемыми."
  },
  heading: "Статьи о выпуске продукта",
  intro:
    "Подробно о том, на чём держатся предсказуемые релизы: метрики, узкие места, WIP и практики руководителя, которые их меняют."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Блог — статьи Виктора Демина о выпуске продукта",
  eyebrow: "Блог",
  title: "Статьи о выпуске продукта",
  subtitle: "Подробно о том, на чём держатся предсказуемые релизы."
};
