import { ogImageContentType, ogImageSize } from "../../../_og/render";
import { renderPostOgCard } from "../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "AI coding agents: give them the periphery, keep humans on the core. By Victor Demin";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ai-coding-agent-periphery-core", {
    eyebrow: "AI coding agents",
    title: "Give them the periphery",
    subtitle: "Keep humans on the core — brilliant on routine, dangerous where a mistake costs money and users."
  });
}
