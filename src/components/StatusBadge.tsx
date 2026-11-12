import Badge from "react-bootstrap/Badge";

import { STATUS_LABELS } from "../books";
import type { Status } from "../types";

type StatusBadgeProps = {
  status: Status;
};

const STATUS_VARIANTS: Record<Status, { bg: string; text?: string }> = {
  "want-to-read": { bg: "secondary" },
  reading: { bg: "warning", text: "dark" },
  done: { bg: "success" },
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const { bg, text } = STATUS_VARIANTS[status];
  return (
    <Badge bg={bg} text={text}>
      {STATUS_LABELS[status]}
    </Badge>
  );
}
