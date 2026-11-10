import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Entropie du code : des contrôles CI pour que l’IA n’empile pas du legacy. Par Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("entropie-code-controles-ci-ia", {
    eyebrow: "Agents IA de code",
    title: "Entropie du code",
    subtitle: "Sept niveaux de contrôles CI pour que l’IA n’empile pas du legacy."
  });
}
