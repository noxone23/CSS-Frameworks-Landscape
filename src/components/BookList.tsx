import type { Book } from "../types";
import BookCard from "./BookCard";
import EmptyState from "./EmptyState";

type BookListProps = {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

export default function BookList({ books, onEdit, onDelete }: BookListProps) {
  if (books.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
