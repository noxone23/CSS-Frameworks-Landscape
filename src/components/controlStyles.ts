import { css } from "styled-components";

/** Look shared by the text input, select and textarea of the form and the toolbar. */
export const controlStyles = css`
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};

  &[aria-invalid="true"] {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;
