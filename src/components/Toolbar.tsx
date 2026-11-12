import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";

import { STATUS_LABELS } from "../books";
import type { StatusFilter } from "../types";

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
    <div className="d-flex flex-column flex-md-row gap-3 glass rounded-3 p-3 my-3">
      <div className="flex-md-grow-1">
        <Form.Control
          type="search"
          placeholder="Search by title..."
          aria-label="Search by title"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
        />
      </div>
      <ButtonGroup
        aria-label="Filter by status"
        className="flex-wrap flex-md-nowrap flex-md-shrink-0 text-nowrap"
      >
        {FILTER_OPTIONS.map(({ value, label }) => (
          <ToggleButton
            key={value}
            id={`filter-${value}`}
            type="radio"
            name="status-filter"
            variant="outline-primary"
            className="btn-accent-outline"
            value={value}
            checked={status === value}
            onChange={() => onStatusChange(value)}
          >
            {label}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}
