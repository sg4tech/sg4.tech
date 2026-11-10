import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Ihr Vibecoding-MVP schafft keine Releases mehr – wie jede von Juniors gebaute Codebasis vor ihm, von Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("vibecoding-mvp-keine-releases-mehr", {
    eyebrow: "KI-Vibecoding",
    title: "Ihr Vibecoding-MVP schafft keine Releases mehr",
    subtitle: "Führen Sie die KI wie einen Junior: Konventionen, Reviews, Tests, CI, Monitoring."
  });
}
