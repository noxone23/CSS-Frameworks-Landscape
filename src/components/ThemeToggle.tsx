import { MoonIcon, SunIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Theme } from "../useTheme";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const next = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
