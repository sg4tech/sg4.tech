import { ImageResponse } from "next/og";
import { OgCard } from "../_og/Card";
import { loadOgFonts } from "../_og/fonts";
import { loadLogoDataUrl } from "../_og/logo";

export const dynamic = "force-static";
export const alt = "AI Vibecoding Cleanup — From Stuck MVP to Shipping Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI VIBECODING"
        title="From stuck MVP to shipping business"
        subtitle="Guardrails, tests, pipeline, and architecture AI never ships"
        footer="Victor Demin"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
