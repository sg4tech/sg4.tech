import { readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { describe, expect, it } from "vitest";

const appDir = join(process.cwd(), "app");

function listTsx(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return listTsx(path);
    return entry.name.endsWith(".tsx") ? [path] : [];
  });
}

const importPattern = /import\s+(\w+)\s+from\s+"([^"]+\.module\.css)"/g;

type ModuleUse = { file: string; cssFile: string; binding: string; classes: string[] };

const uses: ModuleUse[] = listTsx(appDir).flatMap((file) => {
  const source = readFileSync(file, "utf8");
  return [...source.matchAll(importPattern)].map(([, binding, spec]) => {
    const classes = [...source.matchAll(/\b(\w+)\.(\w+)/g)]
      .filter((match) => match[1] === binding)
      .map((match) => match[2]);
    return { file, cssFile: resolve(dirname(file), spec), binding, classes: [...new Set(classes)] };
  });
});

describe("CSS module class references", () => {
  it("finds CSS module imports to check", () => {
    expect(uses.length).toBeGreaterThan(0);
  });

  // CSS modules return undefined for a missing class, so a deleted rule fails
  // silently: the element just renders unstyled. Catch it here instead.
  it.each(uses.map((use) => [relative(process.cwd(), use.file), use.binding, use] as const))(
    "%s: every %s.* class exists in its stylesheet",
    (_file, _binding, use) => {
      const css = readFileSync(use.cssFile, "utf8");
      const defined = new Set([...css.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((match) => match[1]));
      const missing = use.classes.filter((name) => !defined.has(name));
      expect(missing).toEqual([]);
    }
  );
});
