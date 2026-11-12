import { useLayoutEffect, useState } from "react";

export type ThemeMode = "aero" | "dark";

export const THEME_STORAGE_KEY = "reading-list:theme";

function systemTheme(): ThemeMode {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "aero";
}

function loadTheme(): ThemeMode {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "aero" || stored === "dark") {
      return stored;
    }
  } catch {
    // Blocked storage: follow the system setting.
  }
  return systemTheme();
}

/** Aero is the look; dark follows the system setting until the toggle is used. */
export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(loadTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  function toggleTheme() {
    const next: ThemeMode = mode === "dark" ? "aero" : "dark";
    setMode(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // The choice only lasts for this visit.
    }
  }

  return { mode, toggleTheme };
}
