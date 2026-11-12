import type { ButtonHTMLAttributes } from "react";

import { FOCUS_RING } from "./styles";

type Variant = "primary" | "secondary" | "danger" | "outline-danger";
type Size = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const VARIANTS: Record<Variant, string> = {
  primary: "font-bold text-ink",
  secondary: "text-ink",
  danger: "font-bold text-danger",
  "outline-danger": "text-danger",
};

const SIZES: Record<Size, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`cursor-pointer bg-surface-raised shadow-raised active:shadow-sunken aria-pressed:bg-bevel-mid aria-pressed:shadow-sunken ${SIZES[size]} ${VARIANTS[variant]} ${FOCUS_RING} ${className}`}
      {...props}
    />
  );
}
