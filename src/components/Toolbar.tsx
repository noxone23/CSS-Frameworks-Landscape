import { STATUS_LABELS } from "@/books";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import type { StatusFilter } from "@/types";

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
    <div className="flex flex-col gap-3 md:flex-row md:items-center">
      <Input
        type="search"
        placeholder="Search by title..."
        aria-label="Search by title"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        className="md:flex-1"
      />
      <div
        role="group"
        aria-label="Filter by status"
        className="flex w-full flex-wrap gap-2 md:w-auto"
      >
        {FILTER_OPTIONS.map(({ value, label }) => (
          <Button
            key={value}
            variant="outline"
            className={cn(
              "flex-1 md:flex-none",
              status === value && "glow-button border-primary bg-primary/20 text-foreground"
            )}
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
