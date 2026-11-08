import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { describe, expect, it } from "vitest";
import { LOCALES } from "@/app/lib/i18n/locales";

const appDir = join(process.cwd(), "app");
const ROUTE_FILE = /^(page|layout|route|opengraph-image)\.tsx?$/;

function routeFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return routeFiles(path);
    return ROUTE_FILE.test(entry.name) ? [relative(appDir, path).split(sep).join("/")] : [];
  });
}

// Every route lives in its locale's route group, app/(<locale>)/… — that is
// what gives it the right root layout (and <html lang>), and what the
// dependency-cruiser route rules match. A Russian page goes in app/(ru)/ru/…,
// never in a bare app/ru/… where neither would apply.
describe("route layout", () => {
  const files = routeFiles(appDir);

  it("finds the routes", () => {
    expect(files.length).toBeGreaterThan(10);
  });

  it.each(files)("%s sits inside a locale route group", (file) => {
    const group = /^\(([a-z]+)\)\//.exec(file)?.[1];
    expect(group, `${file} is outside app/(<locale>)/`).toBeDefined();
    expect(LOCALES as ReadonlyArray<string>).toContain(group);
  });
});
