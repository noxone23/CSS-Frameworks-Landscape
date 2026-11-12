import type { Book } from "../types";
import Button from "./Button";
import Rating from "./Rating";
import StatusBadge from "./StatusBadge";
import { TITLE_BAR } from "./styles";

type BookCardProps = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 bg-surface-raised p-1 shadow-raised">
      <h2 className={`${TITLE_BAR} text-base`}>{book.title}</h2>
      <p className="px-2 text-muted">{book.author}</p>
      <div className="flex items-center gap-3 px-2">
        <StatusBadge status={book.status} />
        <Rating rating={book.rating} />
      </div>
      {book.notes && <p className="px-2 text-sm">{book.notes}</p>}
      <div className="mt-auto flex gap-2 p-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onEdit(book)}
          aria-label={`Edit ${book.title}`}
        >
          Edit
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => onDelete(book)}
          aria-label={`Delete ${book.title}`}
        >
          Delete
        </Button>
      </div>
    </article>
  );
}
