import { ogImageContentType, ogImageSize } from "../../../../_og/render";
import { renderPostOgCard } from "../../../../_og/post";

export const dynamic = "force-static";
export const alt = "ИИ-агентам в разработке — периферию, людям — ядро. Виктор Демин";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpengraphImage() {
  return renderPostOgCard("ii-agenty-periferiya-yadro", {
    eyebrow: "ИИ-агенты",
    title: "Агентам — периферию",
    subtitle: "Ядро — людям. С рутиной агенты справляются блестяще, а там, где ошибка стоит денег и пользователей, они опасны."
  });
}
