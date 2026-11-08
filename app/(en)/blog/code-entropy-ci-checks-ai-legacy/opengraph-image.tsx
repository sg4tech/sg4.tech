import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Code entropy: how CI checks keep AI from piling up legacy. By Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("code-entropy-ci-checks-ai-legacy", {
    eyebrow: "AI coding agents",
    title: "Code entropy",
    subtitle: "Seven levels of CI checks that stop AI from piling up legacy."
  });
}
