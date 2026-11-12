import { STATUS_LABELS } from "../books";
import type { Status } from "../types";

type StatusBadgeProps = {
  status: Status;
};

const STATUS_CLASSES: Record<Status, string> = {
  "want-to-read": "bg-status-want-bg text-status-want-text",
  reading: "bg-status-reading-bg text-status-reading-text",
  done: "bg-status-done-bg text-status-done-text",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`px-2 py-0.5 text-sm font-bold shadow-sunken ${STATUS_CLASSES[status]}`}
    >
      {STATUS_LABELS[status]}
    </span>
  );
}
