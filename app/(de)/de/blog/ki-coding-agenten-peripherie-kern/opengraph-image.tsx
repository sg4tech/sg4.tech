import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "KI-Coding-Agenten: Die Peripherie für die KI, der Kern für Menschen. Von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ki-coding-agenten-peripherie-kern", {
    eyebrow: "KI-Coding-Agenten",
    title: "Die Peripherie für die KI",
    subtitle: "Der Kern bleibt bei Menschen: brillant bei Routine, gefährlich, wo ein Fehler Geld und Nutzer kostet."
  });
}
