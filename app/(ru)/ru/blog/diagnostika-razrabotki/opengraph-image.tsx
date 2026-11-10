import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Где ломается разработка и как найти узкое место: метрики для руководителя. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("diagnostika-razrabotki", {
    eyebrow: "Метрики разработки",
    title: "Где ломается разработка и как найти узкое место",
    subtitle: "T2M, Lead Time, Cycle Time, WIP и закон Литтла на практике."
  });
}
