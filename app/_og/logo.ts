import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function loadLogoDataUrl(): Promise<string> {
  const buffer = await readFile(join(process.cwd(), "public", "brand", "logo.svg"));
  return `data:image/svg+xml;base64,${buffer.toString("base64")}`;
}
