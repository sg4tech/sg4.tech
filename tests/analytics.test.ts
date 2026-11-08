import { describe, expect, it, vi } from "vitest";
import { trackUmamiEvent } from "@/app/lib/analytics";
import { SITE_URL } from "@/app/lib/brand";
import { umamiTracker } from "@/app/lib/umami-tracker";

describe("umamiTracker", () => {
  // Without a domain filter the tracker also fires on localhost (dev server,
  // preview, Lighthouse CI), which drowns real visits in local noise.
  it("tracks only the production domain", () => {
    expect(umamiTracker.domains).toBe(new URL(SITE_URL).hostname);
  });

  it("never lists a local host", () => {
    expect(umamiTracker.domains).not.toMatch(/localhost|127\.0\.0\.1/);
  });
});

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
