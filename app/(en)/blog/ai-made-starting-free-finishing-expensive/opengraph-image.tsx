import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "AI made starting work nearly free. Finishing is still expensive. By Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ai-made-starting-free-finishing-expensive", {
    eyebrow: "AI-assisted delivery",
    title: "AI made starting work nearly free",
    subtitle: "Finishing is still expensive — waiting queues, context limits, and WIP discipline for agents."
  });
}
