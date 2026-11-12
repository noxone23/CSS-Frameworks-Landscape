import styled from "styled-components";

import type { Book } from "../types";
import Button from "./Button";
import Rating from "./Rating";
import StatusBadge from "./StatusBadge";

type BookCardProps = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.sm};
  height: 100%;
  padding: ${({ theme }) => theme.space.md};
  background: ${({ theme }) => theme.gradients.card};
  backdrop-filter: ${({ theme }) => theme.effects.glassFilter};
  border: ${({ theme }) => theme.sizes.border} solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: ${({ theme }) => theme.shadows.card}, ${({ theme }) => theme.effects.highlight};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const Author = styled.p`
  color: ${({ theme }) => theme.colors.muted};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.space.sm};
`;

const Notes = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: auto;
`;

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <Card>
      <Title>{book.title}</Title>
      <Author>{book.author}</Author>
      <Meta>
        <StatusBadge status={book.status} />
        <Rating rating={book.rating} />
      </Meta>
      {book.notes && <Notes>{book.notes}</Notes>}
      <Actions>
        <Button
          variant="secondary"
          size="sm"
          aria-label={`Edit ${book.title}`}
          onClick={() => onEdit(book)}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          aria-label={`Delete ${book.title}`}
          onClick={() => onDelete(book)}
        >
          Delete
        </Button>
      </Actions>
    </Card>
  );
}
