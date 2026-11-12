import { useLayoutEffect, useState } from "react";

export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "reading-list:theme";

function systemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function loadTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
  } catch {
    // Blocked storage: follow the system setting.
  }
  return systemTheme();
}

/** Follows the system setting until the reader picks a theme with the toggle. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(loadTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // The choice only lasts for this visit.
    }
  }

  return { theme, toggleTheme };
}
