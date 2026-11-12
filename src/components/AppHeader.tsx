import styled from "styled-components";

import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

type AppHeaderProps = {
  dark: boolean;
  onToggleTheme: () => void;
  onAdd: () => void;
};

const Bar = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.gradients.header};
  backdrop-filter: ${({ theme }) => theme.effects.glassFilter};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.effects.highlight};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.titleText};
  text-shadow: ${({ theme }) => theme.effects.titleGlow};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

export default function AppHeader({
  dark,
  onToggleTheme,
  onAdd,
}: AppHeaderProps) {
  return (
    <Bar>
      <Title id="app-title" tabIndex={-1}>
        Reading List
      </Title>
      <Actions>
        <ThemeToggle
          dark={dark}
          onToggle={onToggleTheme}
        />
        <Button onClick={onAdd}>+ Add book</Button>
      </Actions>
    </Bar>
  );
}
