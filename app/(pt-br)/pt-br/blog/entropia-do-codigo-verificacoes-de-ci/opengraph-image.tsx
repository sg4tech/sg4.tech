import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Entropia do código: como verificações de CI impedem a IA de acumular legado. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("entropia-do-codigo-verificacoes-de-ci", {
    eyebrow: "Agentes de IA",
    title: "Entropia do código",
    subtitle: "Sete níveis de verificações de CI que impedem a IA de acumular legado."
  });
}
