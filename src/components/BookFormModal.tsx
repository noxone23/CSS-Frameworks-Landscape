import { useState } from "react";
import type { FormEvent } from "react";
import styled from "styled-components";

import { STATUS_LABELS } from "../books";
import type { Book, NewBook, Status } from "../types";
import Button from "./Button";
import { controlStyles } from "./controlStyles";
import Field from "./Field";
import Modal from "./Modal";

type BookFormModalProps = {
  /** The book to edit, or `null` to add a new one. */
  book: Book | null;
  onSave: (book: NewBook) => void;
  onClose: () => void;
};

const RATING_VALUES = [1, 2, 3, 4, 5];

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const Input = styled.input`
  ${controlStyles}
`;

const Select = styled.select`
  ${controlStyles}
`;

const TextArea = styled.textarea`
  ${controlStyles}
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.sm};
`;

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
      <Form noValidate onSubmit={handleSubmit}>
        <Field id="book-title" label="Title" error={titleError}>
          {(control) => (
            <Input
              {...control}
              required
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          )}
        </Field>
        <Field id="book-author" label="Author" error={authorError}>
          {(control) => (
            <Input
              {...control}
              required
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
            />
          )}
        </Field>
        <Field id="book-status" label="Status">
          {(control) => (
            <Select
              {...control}
              value={status}
              onChange={(event) => setStatus(event.target.value as Status)}
            >
              {(Object.keys(STATUS_LABELS) as Status[]).map((value) => (
                <option key={value} value={value}>
                  {STATUS_LABELS[value]}
                </option>
              ))}
            </Select>
          )}
        </Field>
        <Field id="book-rating" label="Rating">
          {(control) => (
            <Select
              {...control}
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
            </Select>
          )}
        </Field>
        <Field id="book-notes" label="Notes">
          {(control) => (
            <TextArea
              {...control}
              rows={3}
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
            />
          )}
        </Field>
        <Actions>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Actions>
      </Form>
    </Modal>
  );
}
