import Button from "./Button";
import { TITLE_BAR } from "./styles";
import ThemeToggle from "./ThemeToggle";

type AppHeaderProps = {
  onAdd: () => void;
};

export default function AppHeader({ onAdd }: AppHeaderProps) {
  return (
    <header>
      <div className={`flex items-center justify-between ${TITLE_BAR}`}>
        <h1 id="app-title" tabIndex={-1} className="text-base">
          Reading List
        </h1>
        <span aria-hidden="true" className="tracking-widest">
          _ □ ×
        </span>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 p-3">
        <Button onClick={onAdd}>+ Add book</Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
