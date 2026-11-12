import type { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "outline-danger";
export type ButtonSize = "sm" | "md";

const VARIANT_STYLES: Record<ButtonVariant, ReturnType<typeof css>> = {
  primary: css`
    background: ${({ theme }) => theme.gradients.primary};
    color: ${({ theme }) => theme.colors.onPrimary};
    border-color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    background: ${({ theme }) => theme.gradients.button};
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.border};
  `,
  danger: css`
    background: ${({ theme }) => theme.gradients.danger};
    color: ${({ theme }) => theme.colors.onDanger};
    border-color: ${({ theme }) => theme.colors.danger};
  `,
  "outline-danger": css`
    background: transparent;
    color: ${({ theme }) => theme.colors.danger};
    border-color: ${({ theme }) => theme.colors.danger};
  `,
};

const SIZE_STYLES: Record<ButtonSize, ReturnType<typeof css>> = {
  sm: css`
    padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.sm};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
};

const StyledButton = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
}>`
  border: ${({ theme }) => theme.sizes.border} solid transparent;
  border-radius: ${({ theme }) => theme.radius.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.effects.highlight};
  transition: opacity ${({ theme }) => theme.durations.fast};

  &:hover {
    opacity: 0.88;
  }

  ${({ $variant }) => VARIANT_STYLES[$variant]}
  ${({ $size }) => SIZE_STYLES[$size]}
`;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export default function Button({
  variant = "primary",
  size = "md",
  type = "button",
  ...rest
}: ButtonProps) {
  return <StyledButton type={type} $variant={variant} $size={size} {...rest} />;
}
