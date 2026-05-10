import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadOgFonts() {
  const fontDir = join(process.cwd(), "assets", "fonts");
  const [regular, bold] = await Promise.all([
    readFile(join(fontDir, "Inter-Regular.ttf")),
    readFile(join(fontDir, "Inter-Bold.ttf"))
  ]);
  return [
    { name: "Inter", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Inter", data: bold, weight: 700 as const, style: "normal" as const }
  ];
}
