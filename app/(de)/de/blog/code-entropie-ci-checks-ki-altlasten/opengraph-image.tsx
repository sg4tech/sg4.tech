import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Code-Entropie: Wie CI-Checks verhindern, dass KI Altlasten anhäuft. Von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("code-entropie-ci-checks-ki-altlasten", {
    eyebrow: "KI-Coding-Agenten",
    title: "Code-Entropie",
    subtitle: "Sieben Ebenen von CI-Checks, die verhindern, dass KI Altlasten anhäuft."
  });
}
