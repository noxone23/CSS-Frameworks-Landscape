import Button from "react-bootstrap/Button";

import { useTheme } from "../useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Button
      variant="outline-secondary"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label="Dark mode"
    >
      <span className="theme-icon" aria-hidden="true">{isDark ? "☀" : "☾"}</span>
    </Button>
  );
}
