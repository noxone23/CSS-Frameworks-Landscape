/** Visible keyboard focus (a dotted outline, like Windows 95), shared by every interactive element. */
export const FOCUS_RING =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dotted focus-visible:outline-ink";

/** Text input, select and textarea: a white, sunken field. */
export const INPUT_CLASS = `w-full bg-field px-2 py-1.5 text-ink shadow-sunken ${FOCUS_RING}`;

/** The navy title bar of a window. */
export const TITLE_BAR = "bg-accent px-2 py-1 font-bold text-accent-contrast";
