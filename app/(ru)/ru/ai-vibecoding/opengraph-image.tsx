import { ogImageContentType, ogImageSize, renderOgCard } from "../../../_og/render";
import { aiVibecodingOgCard } from "./content";

export const dynamic = "force-static";
export const alt = aiVibecodingOgCard.alt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderOgCard("ru", aiVibecodingOgCard);
}
