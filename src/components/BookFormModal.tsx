import { useState } from "react";
import type { FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import { STATUS_LABELS } from "../books";
import type { Book, NewBook, Status } from "../types";

type BookFormModalProps = {
  /** The book to edit, or `null` to add a new one. */
  book: Book | null;
  onSave: (book: NewBook) => void;
  onClose: () => void;
};

const RATING_VALUES = [1, 2, 3, 4, 5];

export default function BookFormModal({
  book,
  onSave,
  onClose,
}: BookFormModalProps) {
  const [title, setTitle] = useState(book?.title ?? "");
  const [author, setAuthor] = useState(book?.author ?? "");
  const [status, setStatus] = useState<Status>(book?.status ?? "want-to-read");
  const [rating, setRating] = useState<number | null>(book?.rating ?? null);
  const [notes, setNotes] = useState(book?.notes ?? "");
  const [submitted, setSubmitted] = useState(false);

  const titleInvalid = submitted && title.trim() === "";
  const authorInvalid = submitted && author.trim() === "";

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setSubmitted(true);
    if (title.trim() === "" || author.trim() === "") {
      return;
    }
    onSave({
      title: title.trim(),
      author: author.trim(),
      status,
      rating,
      notes: notes.trim(),
    });
  }

  return (
    <Modal
      show
      onHide={onClose}
      aria-labelledby="book-form-title"
      contentClassName="glass"
    >
      <Form noValidate onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="book-form-title" as="h2" className="fs-4">
            {book ? "Edit book" : "Add book"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-3">
          <Form.Group controlId="book-title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              autoFocus
              required
              value={title}
              isInvalid={titleInvalid}
              onChange={(event) => setTitle(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a title.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="book-author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              value={author}
              isInvalid={authorInvalid}
              onChange={(event) => setAuthor(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please enter an author.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="book-status">
            <Form.Label>Status</Form.Label>
            <Form.Select
              value={status}
              onChange={(event) => setStatus(event.target.value as Status)}
            >
              {(Object.keys(STATUS_LABELS) as Status[]).map((value) => (
                <option key={value} value={value}>
                  {STATUS_LABELS[value]}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="book-rating">
            <Form.Label>Rating</Form.Label>
            <Form.Select
              value={rating ?? ""}
              onChange={(event) =>
                setRating(
                  event.target.value === "" ? null : Number(event.target.value)
                )
              }
            >
              <option value="">Not rated</option>
              {RATING_VALUES.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="book-notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
