import { useState } from "react";
import type { FormEvent } from "react";

import { STATUS_LABELS } from "@/books";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Book, NewBook, Status } from "@/types";

type BookFormDialogProps = {
  open: boolean;
  /** The book to edit, or `null` to add a new one. */
  book: Book | null;
  onSave: (book: NewBook) => void;
  onClose: () => void;
};

type BookFormProps = Omit<BookFormDialogProps, "open">;

const NOT_RATED = "none";
const RATING_VALUES = ["1", "2", "3", "4", "5"];

const STATUS_ITEMS = (Object.keys(STATUS_LABELS) as Status[]).map((value) => ({
  value,
  label: STATUS_LABELS[value],
}));

const RATING_ITEMS = [
  { value: NOT_RATED, label: "Not rated" },
  ...RATING_VALUES.map((value) => ({ value, label: value })),
];

function BookForm({ book, onSave, onClose }: BookFormProps) {
  const [title, setTitle] = useState(book?.title ?? "");
  const [author, setAuthor] = useState(book?.author ?? "");
  const [status, setStatus] = useState<Status>(book?.status ?? "want-to-read");
  const [rating, setRating] = useState(
    book?.rating ? String(book.rating) : NOT_RATED
  );
  const [notes, setNotes] = useState(book?.notes ?? "");
  const [submitted, setSubmitted] = useState(false);

  const titleError = submitted && title.trim() === "";
  const authorError = submitted && author.trim() === "";

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
      rating: rating === NOT_RATED ? null : Number(rating),
      notes: notes.trim(),
    });
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="book-title">Title</Label>
        <Input
          id="book-title"
          required
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          aria-invalid={titleError}
          aria-describedby={titleError ? "book-title-error" : undefined}
        />
        {titleError && (
          <p id="book-title-error" className="text-sm text-destructive">
            Please enter a title.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="book-author">Author</Label>
        <Input
          id="book-author"
          required
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          aria-invalid={authorError}
          aria-describedby={authorError ? "book-author-error" : undefined}
        />
        {authorError && (
          <p id="book-author-error" className="text-sm text-destructive">
            Please enter an author.
          </p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="book-status">Status</Label>
        <Select
          items={STATUS_ITEMS}
          value={status}
          onValueChange={(value) => value && setStatus(value as Status)}
        >
          <SelectTrigger id="book-status" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {STATUS_ITEMS.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="book-rating">Rating</Label>
        <Select
          items={RATING_ITEMS}
          value={rating}
          onValueChange={(value) => value && setRating(value)}
        >
          <SelectTrigger id="book-rating" className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {RATING_ITEMS.map(({ value, label }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="book-notes">Notes</Label>
        <Textarea
          id="book-notes"
          rows={3}
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </div>
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </DialogFooter>
    </form>
  );
}

export default function BookFormDialog({
  open,
  book,
  onSave,
  onClose,
}: BookFormDialogProps) {
  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>{book ? "Edit book" : "Add book"}</DialogTitle>
        </DialogHeader>
        <BookForm book={book} onSave={onSave} onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
