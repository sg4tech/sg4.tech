import type { OgCardContent } from "../../../_og/render";
import type { BlogIndexContent } from "../../../views/blog-index/blog-index-content";

export const blogIndexContent: BlogIndexContent = {
  meta: {
    title: "Блог",
    socialTitle: "Блог — Виктор Демин",
    description:
      "Статьи о том, как сделать релизы предсказуемыми: метрики разработки, узкие места и решения руководителя."
  },
  heading: "Статьи о разработке и релизах",
  intro:
    "Подробно о том, как сделать релизы предсказуемыми: метрики, узкие места, WIP и что с ними делать руководителю."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Блог — статьи Виктора Демина о разработке и релизах",
  eyebrow: "Блог",
  title: "Статьи о разработке и релизах",
  subtitle: "Подробно о том, как сделать релизы предсказуемыми."
};
