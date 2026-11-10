import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "O lead time médio engana você: como prever entregas com percentis, por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("previsao-de-entrega-com-percentis", {
    eyebrow: "Entrega de software",
    title: "O lead time médio engana você",
    subtitle: "Preveja entregas com mediana, dispersão e o percentil p95, e prometa datas que você cumpre."
  });
}
