import styled from "styled-components";

import { STATUS_LABELS } from "../books";
import type { Status } from "../types";

type StatusBadgeProps = { status: Status };

const Badge = styled.span<{ $status: Status }>`
  display: inline-block;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background: ${({ theme, $status }) => theme.colors.status[$status].bg};
  color: ${({ theme, $status }) => theme.colors.status[$status].fg};
`;

export default function StatusBadge({ status }: StatusBadgeProps) {
  return <Badge $status={status}>{STATUS_LABELS[status]}</Badge>;
}
