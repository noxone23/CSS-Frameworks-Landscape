import { useCallback, useState } from "react";

import AppHeader from "./components/AppHeader";
import BookFormModal from "./components/BookFormModal";
import BookList from "./components/BookList";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import Toolbar from "./components/Toolbar";
import ToastMessage from "./components/ToastMessage";
import { filterBooks } from "./books";
import type { Book, NewBook, StatusFilter } from "./types";
import { useBooks } from "./useBooks";

export default function App() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);
  const [deleting, setDeleting] = useState<Book | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const closeToast = useCallback(() => setToast(null), []);

  const visibleBooks = filterBooks(books, { status, query });

  function openAdd() {
    setEditing(null);
    setFormOpen(true);
  }

  function openEdit(book: Book) {
    setEditing(book);
    setFormOpen(true);
  }

  function closeForm() {
    setFormOpen(false);
    setEditing(null);
  }

  function handleSave(data: NewBook) {
    if (editing) {
      updateBook(editing.id, data);
      setToast("Book updated");
    } else {
      addBook(data);
      setToast("Book added");
    }
    closeForm();
  }

  function handleDelete() {
    if (deleting) {
      deleteBook(deleting.id);
      setToast("Book deleted");
    }
    setDeleting(null);
  }

  return (
    <main className="mx-auto my-4 max-w-6xl bg-surface-raised p-1 shadow-raised sm:my-8">
      <AppHeader onAdd={openAdd} />
      <div className="flex flex-col gap-3 px-3 pb-3">
        <Toolbar
          query={query}
          status={status}
          onQueryChange={setQuery}
          onStatusChange={setStatus}
        />
        <BookList
          books={visibleBooks}
          onEdit={openEdit}
          onDelete={setDeleting}
        />
      </div>
      {formOpen && (
        <BookFormModal book={editing} onSave={handleSave} onClose={closeForm} />
      )}
      {deleting && (
        <DeleteConfirmModal
          book={deleting}
          onConfirm={handleDelete}
          onClose={() => setDeleting(null)}
        />
      )}
      <ToastMessage message={toast} onClose={closeToast} />
    </main>
  );
}
