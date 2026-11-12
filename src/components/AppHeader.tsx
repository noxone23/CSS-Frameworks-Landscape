import { Button } from "@/components/ui/button";
import type { Theme } from "../useTheme";
import ThemeToggle from "./ThemeToggle";

type AppHeaderProps = {
  bookCount: number;
  theme: Theme;
  onAdd: () => void;
  onToggleTheme: () => void;
};

export default function AppHeader({
  bookCount,
  theme,
  onAdd,
  onToggleTheme,
}: AppHeaderProps) {
  return (
    <header className="flex flex-wrap items-end justify-between gap-4 pt-6">
      <div>
        <p className="flex items-center gap-2 font-mono text-xs tracking-widest text-glow-2 uppercase">
          <span className="live-dot size-2 rounded-full" aria-hidden="true" />
          {bookCount} books
        </p>
        <h1
          id="app-title"
          tabIndex={-1}
          className="text-gradient mt-2 font-heading text-4xl font-bold tracking-tight outline-none sm:text-5xl"
        >
          Reading List
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <Button className="glow-button" onClick={onAdd}>
          + Add book
        </Button>
      </div>
    </header>
  );
}
