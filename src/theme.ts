
type Gradients = {
  page: string;
  card: string;
  header: string;
  dialogTitle: string;
  button: string;
  primary: string;
  danger: string;
};

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

/** Plain themes use flat fills where the Aero theme uses glossy gradients. */
function flatGradients(colors: {
  bg: string;
  surface: string;
  primary: string;
  danger: string;
}): Gradients {
  return {
    page: colors.bg,
    card: colors.surface,
    header: "transparent",
    dialogTitle: "transparent",
    button: colors.surface,
    primary: colors.primary,
    danger: colors.danger,
  };
}

const flatEffects = {
  glassFilter: "none",
  titleGlow: "none",
  highlight: "none",
};

export const darkTheme: Theme = {
  ...base,
  colors: {
    bg: "#12151a",
    surface: "#1c2128",
    text: "#e6edf3",
    muted: "#9aa4af",
    border: "#3a424d",
    primary: "#6b9bff",
    onPrimary: "#0b1220",
    danger: "#ff8a80",
    onDanger: "#1a0b0a",
    focus: "#8ab4ff",
    backdrop: "rgba(0, 0, 0, 0.7)",
    star: "#f5b84b",
    titleText: "#e6edf3",
    status: {
      "want-to-read": { bg: "#1e3a5f", fg: "#cfe3ff" },
      reading: { bg: "#5a4510", fg: "#fde9a8" },
      done: { bg: "#1a4d2e", fg: "#c3f0d0" },
    },
  },
  shadows: {
    card: "0 1px 2px rgba(0, 0, 0, 0.5)",
    raised: "0 10px 30px rgba(0, 0, 0, 0.6)",
  },
  gradients: flatGradients({
    bg: "#12151a",
    surface: "#1c2128",
    primary: "#6b9bff",
    danger: "#ff8a80",
  }),
  effects: flatEffects,
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
