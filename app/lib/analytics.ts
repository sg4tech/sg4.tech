export function trackUmamiEvent(eventName: string, payload: Record<string, string>) {
  try {
    const umami = (
      globalThis as typeof globalThis & {
        umami?: { track?: (name: string, data?: Record<string, string>) => void };
      }
    ).umami;

    umami?.track?.(eventName, payload);
  } catch {
    // Analytics should never break the landing page experience.
  }
}
