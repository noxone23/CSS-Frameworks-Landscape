import { STATUS_LABELS } from "@/books";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Status } from "@/types";

type StatusBadgeProps = {
  status: Status;
};

const STATUS_CLASSES: Record<Status, string> = {
  "want-to-read":
    "border-status-want-foreground/45 bg-status-want-foreground/12 text-status-want-foreground",
  reading:
    "border-status-reading-foreground/45 bg-status-reading-foreground/12 text-status-reading-foreground",
  done: "border-status-done-foreground/45 bg-status-done-foreground/12 text-status-done-foreground",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge
      className={cn(
        "status-glow font-mono text-xs tracking-wider uppercase",
        STATUS_CLASSES[status]
      )}
    >
      {STATUS_LABELS[status]}
    </Badge>
  );
}
