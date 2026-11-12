import Button from "react-bootstrap/Button";

import ThemeToggle from "./ThemeToggle";

type AppHeaderProps = {
  onAdd: () => void;
};

export default function AppHeader({ onAdd }: AppHeaderProps) {
  return (
    <header className="d-flex justify-content-between align-items-center gap-3 glass rounded-3 px-3 py-3 mt-3">
      <h1 className="fs-2 fw-bold mb-0">Reading List</h1>
      <div className="d-flex align-items-center gap-2">
        <ThemeToggle />
        <Button variant="primary" className="btn-accent" onClick={onAdd}>
          + Add book
        </Button>
      </div>
    </header>
  );
}
