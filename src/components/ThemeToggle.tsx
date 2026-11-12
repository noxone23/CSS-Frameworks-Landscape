import { useTheme } from "../useTheme";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="secondary"
      aria-pressed={theme === "dark"}
      onClick={toggleTheme}
    >
      Dark mode
    </Button>
  );
}
