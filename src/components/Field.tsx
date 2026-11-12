import type { ReactNode } from "react";
import styled from "styled-components";

type ControlProps = {
  id: string;
  "aria-invalid": boolean;
  "aria-describedby": string | undefined;
};

type FieldProps = {
  id: string;
  label: string;
  error?: string;
  children: (control: ControlProps) => ReactNode;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`;

const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export default function Field({ id, label, error, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {children({
        id,
        "aria-invalid": error !== undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && <ErrorText id={errorId}>{error}</ErrorText>}
    </Wrapper>
  );
}
