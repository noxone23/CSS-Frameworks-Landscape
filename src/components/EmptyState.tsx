import styled from "styled-components";

const Box = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: ${({ theme }) => theme.effects.glassFilter};
  border: ${({ theme }) => theme.sizes.border} dashed ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const Heading = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export default function EmptyState() {
  return (
    <Box>
      <Heading>No books found</Heading>
      <p>Try another search or filter, or add a new book.</p>
    </Box>
  );
}
