import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import type { Book } from "../types";
import Rating from "./Rating";
import StatusBadge from "./StatusBadge";

type BookCardProps = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <Card className="h-100 glass glass-card">
      <Card.Body className="d-flex flex-column">
        <Card.Title as="h2" className="fs-5">
          {book.title}
        </Card.Title>
        <Card.Subtitle className="mb-3 text-body-secondary">
          {book.author}
        </Card.Subtitle>
        <div className="d-flex align-items-center gap-2 mb-3">
          <StatusBadge status={book.status} />
          <Rating rating={book.rating} />
        </div>
        {book.notes && <Card.Text className="small">{book.notes}</Card.Text>}
        <div className="d-flex gap-2 mt-auto pt-2">
          <Button
            variant="outline-secondary"
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
      </Card.Body>
    </Card>
  );
}
