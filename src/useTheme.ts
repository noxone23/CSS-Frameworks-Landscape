import { useEffect, useState } from "react";

export type Theme = "dark" | "light";

export const THEME_KEY = "reading-list:theme";

function loadTheme(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
  } catch {
    // Blocked storage: dark is the default.
    return "dark";
  }
}

/** Dark is the default. The choice is kept in `localStorage`. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(loadTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Blocked storage: the theme still changes for this visit.
    }
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  return { theme, toggleTheme };
}
