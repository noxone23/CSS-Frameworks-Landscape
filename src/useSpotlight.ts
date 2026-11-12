import type { PointerEvent } from "react";

/**
 * Writes the pointer position into `--mx` and `--my` of the element, so the
 * `.beam-card` spotlight in index.css can follow the cursor, and marks the
 * element as lit. Touch emulation reports no `:hover`, so the pointer events
 * drive the effect as well.
 */
export function trackSpotlight(event: PointerEvent<HTMLElement>) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  card.dataset.lit = "";
}

export function clearSpotlight(event: PointerEvent<HTMLElement>) {
  delete event.currentTarget.dataset.lit;
}
