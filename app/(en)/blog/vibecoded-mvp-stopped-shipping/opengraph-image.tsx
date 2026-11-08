import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Your vibecoded MVP stopped shipping — like every junior-built codebase before it, by Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("vibecoded-mvp-stopped-shipping", {
    eyebrow: "AI vibecoding",
    title: "Your vibecoded MVP stopped shipping",
    subtitle: "Manage the AI like a junior developer: conventions, review gates, tests, CI, monitoring."
  });
}
