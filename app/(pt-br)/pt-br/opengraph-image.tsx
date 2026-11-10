import { ogImageContentType, ogImageSize, renderOgCard } from "../../_og/render";
import { homeOgCard } from "./content";

export const dynamic = "force-static";
export const alt = homeOgCard.alt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderOgCard("pt-br", homeOgCard);
}
