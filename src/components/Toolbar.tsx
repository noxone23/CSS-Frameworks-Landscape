import styled from "styled-components";

import { STATUS_LABELS } from "../books";
import type { Status, StatusFilter } from "../types";
import Button from "./Button";
import { controlStyles } from "./controlStyles";

type ToolbarProps = {
  query: string;
  status: StatusFilter;
  onQueryChange: (query: string) => void;
  onStatusChange: (status: StatusFilter) => void;
};

const FILTERS: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...(Object.keys(STATUS_LABELS) as Status[]).map((value) => ({
    value,
    label: STATUS_LABELS[value],
  })),
];

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Search = styled.input`
  ${controlStyles}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.sizes.toast};
  }
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

export default function Toolbar({
  query,
  status,
  onQueryChange,
  onStatusChange,
}: ToolbarProps) {
  return (
    <Bar>
      <Search
        type="search"
        aria-label="Search by title"
        placeholder="Search by title..."
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
      />
      <Filters role="group" aria-label="Filter by status">
        {FILTERS.map(({ value, label }) => (
          <Button
            key={value}
            variant={status === value ? "primary" : "secondary"}
            size="sm"
            aria-pressed={status === value}
            onClick={() => onStatusChange(value)}
          >
            {label}
          </Button>
        ))}
      </Filters>
    </Bar>
  );
}
