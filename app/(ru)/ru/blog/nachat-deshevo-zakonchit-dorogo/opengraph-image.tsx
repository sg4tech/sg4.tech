import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt = "С ИИ начать стало почти бесплатно. Закончить — всё ещё дорого. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("nachat-deshevo-zakonchit-dorogo", {
    eyebrow: "Разработка с ИИ",
    title: "С ИИ начать стало почти бесплатно",
    subtitle: "А закончить всё ещё дорого: очереди, пределы контекста и WIP-лимиты для агентов."
  });
}
