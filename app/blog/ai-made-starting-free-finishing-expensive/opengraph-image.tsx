import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "AI made starting work nearly free. Finishing is still expensive. By Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI-assisted delivery"
        title="AI made starting work nearly free"
        subtitle="Finishing is still expensive — waiting queues, context limits, and WIP discipline for agents."
        footer="Victor Demin · 7 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
