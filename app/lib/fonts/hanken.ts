import { Hanken_Grotesk } from "next/font/google";

// Brand typeface (Victor Demin Design System v2) for Latin-script languages:
// display, body and UI. Its latin subset covers the accented letters of the
// Western European languages; it has no Cyrillic, so Russian pages use their
// own face in the same variable.
// Each locale's root layout imports only its own face: a font imported here is
// preloaded on every page that imports it.
export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-brand",
  display: "swap"
});
