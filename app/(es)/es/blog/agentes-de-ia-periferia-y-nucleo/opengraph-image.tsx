import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Agentes de IA para programar: dales la periferia, deja el núcleo a las personas. Por Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("agentes-de-ia-periferia-y-nucleo", {
    eyebrow: "Agentes de IA",
    title: "Dales la periferia",
    subtitle: "Deja el núcleo a las personas: brillan en la rutina y son peligrosos donde un error cuesta dinero y usuarios."
  });
}
