import type { OgCardContent } from "../../_og/render";
import type { BlogIndexContent } from "../../views/blog-index/BlogIndexView";

const description =
  "Long-form essays on engineering delivery systems, metrics, bottlenecks, and the operator practices behind predictable shipping.";

export const blogIndexContent: BlogIndexContent = {
  title: "Blog",
  socialTitle: "Blog — Victor Demin",
  description,
  heading: "Essays on engineering delivery",
  intro:
    "Long-form pieces on the systems behind predictable shipping — metrics, bottlenecks, WIP, and the operator practices that move them."
};

export const blogIndexOgCard: OgCardContent = {
  alt: "Blog — Essays on engineering delivery by Victor Demin",
  eyebrow: "Blog",
  title: "Essays on engineering delivery",
  subtitle: "Long-form pieces on the systems behind predictable shipping.",
  footer: "Victor Demin"
};
