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
    <ul className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list-unstyled p-0">
      {books.map((book) => (
        <li key={book.id} className="col book-item">
          <BookCard book={book} onEdit={onEdit} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
