import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "KI macht das Anfangen fast kostenlos. Das Fertigstellen bleibt teuer. Von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ki-anfangen-billig-fertigstellen-teuer", {
    eyebrow: "KI-gestützte Entwicklung",
    title: "KI macht das Anfangen fast kostenlos",
    subtitle: "Das Fertigstellen bleibt teuer: Warteschlangen, Kontextgrenzen und WIP-Disziplin für Agenten."
  });
}
