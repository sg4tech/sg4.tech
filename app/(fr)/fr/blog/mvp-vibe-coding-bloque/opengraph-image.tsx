import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Votre MVP en vibe coding est à l’arrêt, comme toutes les bases de code écrites par des juniors avant lui, par Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("mvp-vibe-coding-bloque", {
    eyebrow: "Vibe coding IA",
    title: "Votre MVP en vibe coding est à l’arrêt",
    subtitle: "Encadrez l’IA comme un développeur junior : conventions, revue, tests, CI, monitoring."
  });
}
