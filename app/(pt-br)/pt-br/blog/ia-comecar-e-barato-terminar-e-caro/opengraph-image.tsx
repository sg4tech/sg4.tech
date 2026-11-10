import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "A IA deixou começar quase de graça. Terminar continua caro. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ia-comecar-e-barato-terminar-e-caro", {
    eyebrow: "Entrega com IA",
    title: "A IA deixou começar quase de graça",
    subtitle: "Terminar continua caro: filas de espera, limites de contexto e disciplina de WIP para agentes."
  });
}
