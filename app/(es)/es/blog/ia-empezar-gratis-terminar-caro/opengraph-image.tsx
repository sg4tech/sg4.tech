import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Con la IA, empezar el trabajo es casi gratis. Terminarlo sigue siendo caro. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ia-empezar-gratis-terminar-caro", {
    eyebrow: "Entrega con IA",
    title: "Con la IA, empezar es casi gratis",
    subtitle: "Terminar sigue siendo caro: colas de espera, límites de contexto y disciplina de WIP para los agentes."
  });
}
