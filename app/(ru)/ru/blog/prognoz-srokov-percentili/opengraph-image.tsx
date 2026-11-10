import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt = "Средний Lead Time вам врёт: как прогнозировать сроки по перцентилям. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("prognoz-srokov-percentili", {
    eyebrow: "Метрики разработки",
    title: "Средний Lead Time вам врёт",
    subtitle: "Прогнозируйте сроки по медиане, разбросу и перцентилю p95 вместо точечной оценки."
  });
}
