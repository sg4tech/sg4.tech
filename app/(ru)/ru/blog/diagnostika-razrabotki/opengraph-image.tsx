import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt =
  "Как найти, где на самом деле ломается разработка: метрики для руководителя. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("diagnostika-razrabotki", {
    eyebrow: "Метрики разработки",
    title: "Как найти, где на самом деле ломается разработка",
    subtitle: "T2M, Lead Time, Cycle Time, WIP и закон Литтла: практическое руководство."
  });
}
