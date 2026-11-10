import { ogImageContentType, ogImageSize, renderOgCard } from "../../../_og/render";
import { blogIndexOgCard } from "./content";

export const dynamic = "force-static";
export const alt = blogIndexOgCard.alt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderOgCard("de", blogIndexOgCard);
}
