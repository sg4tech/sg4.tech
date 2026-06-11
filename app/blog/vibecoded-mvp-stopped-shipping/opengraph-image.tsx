import { ImageResponse } from "next/og";
import { OgCard } from "../../_og/Card";
import { loadOgFonts } from "../../_og/fonts";
import { loadLogoDataUrl } from "../../_og/logo";

export const dynamic = "force-static";
export const alt =
  "Your vibecoded MVP stopped shipping — like every junior-built codebase before it, by Victor Demin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [logoSrc, fonts] = await Promise.all([loadLogoDataUrl(), loadOgFonts()]);

  return new ImageResponse(
    (
      <OgCard
        eyebrow="AI VIBECODING"
        title="Your vibecoded MVP stopped shipping"
        subtitle="Manage the AI like a junior developer: conventions, review gates, tests, CI, monitoring."
        footer="Victor Demin · 8 min read"
        logoSrc={logoSrc}
      />
    ),
    { ...size, fonts }
  );
}
