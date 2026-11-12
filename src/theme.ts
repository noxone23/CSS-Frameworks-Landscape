const base = {
  fonts: {
    body: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  },
  space: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  radius: { sm: "0.25rem", md: "0.5rem", pill: "999px" },
  fontSizes: { sm: "0.875rem", md: "1rem", lg: "1.25rem", xl: "1.75rem" },
  fontWeights: { normal: "400", bold: "600" },
  lineHeight: "1.5",
  sizes: {
    border: "1px",
    focusRing: "3px",
    focusOffset: "2px",
    content: "72rem",
    dialog: "32rem",
    toast: "24rem",
    zDialog: "10",
    zToast: "20",
  },
  breakpoints: { sm: "40rem", md: "48rem", lg: "64rem" },
  durations: { fast: "150ms" },
};
/** The same Aero glass in the dark: deep-blue desktop, smoked glass, glossy buttons. */
export const darkTheme: Theme = {
  ...base,
  fonts: { body: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' },
  colors: {
    bg: "#0b1d33",
    surface: "#14263b",
    text: "#e6edf3",
    muted: "#a9bbd0",
    border: "#5d7a9c",
    primary: "#6b9bff",
    onPrimary: "#0b1220",
    danger: "#ff8a80",
    onDanger: "#1a0b0a",
    focus: "#8ab4ff",
    backdrop: "rgba(0, 0, 0, 0.6)",
    star: "#f5b84b",
    titleText: "#e6f0ff",
    status: {
      "want-to-read": { bg: "#2f5f9e", fg: "#eaf3ff" },
      reading: { bg: "#5a4510", fg: "#fde9a8" },
      done: { bg: "#1a4d2e", fg: "#c3f0d0" },
    },
  },
  shadows: {
    card: "0 2px 8px rgba(0, 0, 0, 0.55)",
    raised: "0 8px 28px rgba(0, 0, 0, 0.75)",
  },
  gradients: {
    page: "linear-gradient(160deg, #071526 0%, #0f2a47 45%, #1b4a73 100%)",
    card: "linear-gradient(rgba(44, 74, 112, 0.82), rgba(18, 36, 62, 0.88))",
    header:
      "linear-gradient(rgba(96, 146, 206, 0.5), rgba(20, 46, 82, 0.65))",
    dialogTitle:
      "linear-gradient(rgba(96, 146, 206, 0.55), rgba(20, 46, 82, 0.8))",
    button:
      "linear-gradient(#52698a 0%, #3a4f6b 48%, #2a3d55 50%, #3b5675 100%)",
    primary:
      "linear-gradient(#b3cfff 0%, #85adf7 48%, #5a8de8 50%, #80aaf6 100%)",
    danger:
      "linear-gradient(#ffbdb6 0%, #ff948a 48%, #f0645a 50%, #ff8f85 100%)",
  },
  effects: {
    glassFilter: "blur(0.5rem) saturate(1.4)",
    titleGlow: "0 0 0.75rem rgba(120, 170, 240, 0.7)",
    highlight: "inset 0 1px 0 rgba(255, 255, 255, 0.25)",
  },
};

/** Windows 7 Aero: sky-blue desktop, frosted glass panels and glossy buttons. */
export const aeroTheme = {
  ...base,
  fonts: { body: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' },
  colors: {
    bg: "#a9d3f5",
    surface: "#ffffff",
    text: "#14202e",
    muted: "#38506b",
    border: "#7d97b5",
    primary: "#3b87cf",
    onPrimary: "#06213f",
    danger: "#a31d12",
    onDanger: "#2a0502",
    focus: "#1c5fb8",
    backdrop: "rgba(20, 40, 70, 0.45)",
    star: "#b45f00",
    titleText: "#0b2540",
    status: {
      "want-to-read": { bg: "#cfe4fa", fg: "#0f3a73" },
      reading: { bg: "#fdeaa8", fg: "#5c3b00" },
      done: { bg: "#cdeccd", fg: "#0f4a1c" },
    },
  },
  shadows: {
    card: "0 2px 6px rgba(20, 50, 90, 0.35)",
    raised: "0 8px 28px rgba(10, 30, 60, 0.55)",
  },
  gradients: {
    page: "linear-gradient(160deg, #6fb1e8 0%, #a9d3f5 45%, #e3f0fc 100%)",
    card: "linear-gradient(rgba(255, 255, 255, 0.9), rgba(228, 240, 252, 0.85))",
    header:
      "linear-gradient(rgba(255, 255, 255, 0.8), rgba(176, 212, 245, 0.7))",
    dialogTitle:
      "linear-gradient(rgba(255, 255, 255, 0.9), rgba(176, 212, 245, 0.8))",
    button:
      "linear-gradient(#f4f8fc 0%, #dde8f4 48%, #c8d8ea 50%, #dce7f3 100%)",
    primary:
      "linear-gradient(#a4d0f5 0%, #6fb0ea 48%, #3b87cf 50%, #62a9e8 100%)",
    danger:
      "linear-gradient(#f9bdb7 0%, #f08e85 48%, #e2554a 50%, #ef7c72 100%)",
  },
  effects: {
    glassFilter: "blur(0.5rem) saturate(1.4)",
    titleGlow: "0 0 0.75rem #ffffff",
    highlight: "inset 0 1px 0 rgba(255, 255, 255, 0.85)",
  },
};

export type Theme = typeof aeroTheme;
