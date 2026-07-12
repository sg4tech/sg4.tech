import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "AI coding agents: give them the periphery, keep humans on the core. By Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI coding agents"
        title="Give them the periphery"
        subtitle="Keep humans on the core — brilliant on routine, dangerous where a mistake costs money and users."
        footer="Victor Demin · 5 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
