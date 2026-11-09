import { ogImageContentType, ogImageSize, renderOgCard } from "../../../_og/render";
import { yii2OgCard } from "./content";

export const dynamic = "force-static";
export const alt = yii2OgCard.alt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderOgCard("ru", yii2OgCard);
}
