import { STATUS_LABELS } from "../books";
import type { StatusFilter } from "../types";
import Button from "./Button";
import { INPUT_CLASS } from "./styles";

type ToolbarProps = {
  query: string;
  status: StatusFilter;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: StatusFilter) => void;
};

const FILTER_OPTIONS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "want-to-read", label: STATUS_LABELS["want-to-read"] },
  { value: "reading", label: STATUS_LABELS.reading },
  { value: "done", label: STATUS_LABELS.done },
];

export default function Toolbar({
  query,
  status,
  onQueryChange,
  onStatusChange,
}: ToolbarProps) {
  return (
    <div className="flex flex-col gap-3 p-3 shadow-sunken md:flex-row md:items-center">
      <input
        type="search"
        placeholder="Search by title..."
        aria-label="Search by title"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className={`${INPUT_CLASS} md:flex-1`}
      />
      <div
        role="group"
        aria-label="Filter by status"
        className="flex flex-wrap gap-2"
      >
        {FILTER_OPTIONS.map(({ value, label }) => (
          <Button
            key={value}
            variant="secondary"
            aria-pressed={status === value}
            onClick={() => onStatusChange(value)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
