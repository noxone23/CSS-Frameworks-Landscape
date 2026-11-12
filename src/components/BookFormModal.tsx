import { useState } from "react";
import type { FormEvent } from "react";

import { STATUS_LABELS } from "../books";
import type { Book, NewBook, Status } from "../types";
import Button from "./Button";
import Field from "./Field";
import Modal from "./Modal";
import { INPUT_CLASS } from "./styles";

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

  const titleError =
    submitted && title.trim() === "" ? "Please enter a title." : undefined;
  const authorError =
    submitted && author.trim() === "" ? "Please enter an author." : undefined;

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
      titleId="book-form-title"
      title={book ? "Edit book" : "Add book"}
      onClose={onClose}
    >
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Field id="book-title" label="Title" error={titleError}>
          {(control) => (
            <input
              {...control}
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={INPUT_CLASS}
            />
          )}
        </Field>
        <Field id="book-author" label="Author" error={authorError}>
          {(control) => (
            <input
              {...control}
              required
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              className={INPUT_CLASS}
            />
          )}
        </Field>
        <Field id="book-status" label="Status">
          {(control) => (
            <select
              {...control}
              value={status}
              onChange={(event) => setStatus(event.target.value as Status)}
              className={INPUT_CLASS}
            >
              {(Object.keys(STATUS_LABELS) as Status[]).map((value) => (
                <option key={value} value={value}>
                  {STATUS_LABELS[value]}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="book-rating" label="Rating">
          {(control) => (
            <select
              {...control}
              value={rating ?? ""}
              onChange={(event) =>
                setRating(
                  event.target.value === "" ? null : Number(event.target.value)
                )
              }
              className={INPUT_CLASS}
            >
              <option value="">Not rated</option>
              {RATING_VALUES.map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field id="book-notes" label="Notes">
          {(control) => (
            <textarea
              {...control}
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              className={INPUT_CLASS}
            />
          )}
        </Field>
        <div className="flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </Modal>
  );
}
