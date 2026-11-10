import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Como diagnosticar onde a entrega de software realmente trava: um guia de métricas por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("diagnosticar-gargalos-na-entrega", {
    eyebrow: "Entrega de software",
    title: "Como diagnosticar onde a entrega de software realmente trava",
    subtitle: "T2M, Lead Time, Cycle Time, WIP, Lei de Little: o guia prático de quem opera o sistema."
  });
}
