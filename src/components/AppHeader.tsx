import Button from "./Button";
import { TITLE_BAR } from "./styles";

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
      <div className="p-3">
        <Button onClick={onAdd}>+ Add book</Button>
      </div>
    </header>
  );
}
