import Button from "./Button";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <Button variant="secondary" aria-pressed={dark} onClick={onToggle}>
      Dark mode
    </Button>
  );
}
