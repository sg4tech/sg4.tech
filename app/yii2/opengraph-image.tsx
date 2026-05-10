import { ImageResponse } from "next/og";
import { OgCard } from "../_og/Card";
import { loadLogoDataUrl } from "../_og/logo";

export const dynamic = "force-static";
export const alt = "Yii2 Consulting — Faster Delivery, Better Quality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoSrc = await loadLogoDataUrl();

  return new ImageResponse(
    (
      <OgCard
        eyebrow="YII2 CONSULTING"
        title="Quality, predictability, speed — without rewrite"
        subtitle="CI/CD, monitoring, delivery metrics, AI leverage"
        footer="Victor Demin"
        logoSrc={logoSrc}
      />
    ),
    { ...size }
  );
}
