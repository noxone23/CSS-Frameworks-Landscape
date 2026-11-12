import styled from "styled-components";

import type { Book } from "../types";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

type BookListProps = {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.space.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function BookList({ books, onEdit, onDelete }: BookListProps) {
  if (books.length === 0) {
    return <EmptyState />;
  }
  return (
    <Grid>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </Grid>
  );
}
