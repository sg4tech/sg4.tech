import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Entropía del código: cómo los controles de CI frenan el legacy que acumula la IA. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("entropia-del-codigo-controles-ci", {
    eyebrow: "Agentes de IA",
    title: "Entropía del código",
    subtitle: "Siete niveles de controles de CI que impiden que la IA acumule legacy."
  });
}
