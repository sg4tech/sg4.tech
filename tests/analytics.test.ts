import { describe, expect, it, vi } from "vitest";
import { trackUmamiEvent } from "@/app/analytics";

describe("trackUmamiEvent", () => {
  it("does not throw when umami is unavailable", () => {
    const analyticsGlobal = globalThis as typeof globalThis & {
      umami?: { track?: (name: string, data?: Record<string, string>) => void };
    };

    delete analyticsGlobal.umami;

    expect(() => {
      trackUmamiEvent("cta_click", { location: "hero" });
    }).not.toThrow();
  });

  it("tracks when umami is available", () => {
    const track = vi.fn();
    const analyticsGlobal = globalThis as typeof globalThis & {
      umami?: { track?: (name: string, data?: Record<string, string>) => void };
    };

    analyticsGlobal.umami = { track };

    trackUmamiEvent("cta_click", { location: "final" });

    expect(track).toHaveBeenCalledWith("cta_click", { location: "final" });

    delete analyticsGlobal.umami;
  });
});
