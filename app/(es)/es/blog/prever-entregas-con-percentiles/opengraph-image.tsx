import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "El lead time medio te engaña: cómo prever entregas con percentiles, por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("prever-entregas-con-percentiles", {
    eyebrow: "Entrega de software",
    title: "El lead time medio te engaña",
    subtitle: "Prevé las entregas con la mediana, la dispersión y el percentil p95 en lugar de una estimación puntual."
  });
}
