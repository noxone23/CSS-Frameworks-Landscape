import { useState } from "react";
import { toast } from "sonner";

import AppHeader from "@/components/AppHeader";
import BookFormDialog from "@/components/BookFormDialog";
import BookList from "@/components/BookList";
import DeleteConfirmDialog from "@/components/DeleteConfirmDialog";
import Toolbar from "@/components/Toolbar";
import { Toaster } from "@/components/ui/sonner";
import { filterBooks } from "./books";
import type { Book, NewBook, StatusFilter } from "./types";
import { useBooks } from "./useBooks";
import { useTheme } from "./useTheme";

export default function App() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const { theme, toggleTheme } = useTheme();
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);
  const [deleting, setDeleting] = useState<Book | null>(null);

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
  }

  function handleSave(data: NewBook) {
    if (editing) {
      updateBook(editing.id, data);
      toast.success("Book updated");
    } else {
      addBook(data);
      toast.success("Book added");
    }
    closeForm();
  }

  function handleDelete() {
    if (deleting) {
      deleteBook(deleting.id);
      toast.success("Book deleted");
    }
    setDeleting(null);
    document.getElementById("app-title")?.focus();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-6 p-4 sm:p-8">
      <AppHeader
        bookCount={books.length}
        theme={theme}
        onAdd={openAdd}
        onToggleTheme={toggleTheme}
      />
      <Toolbar
        query={query}
        status={status}
        onQueryChange={setQuery}
        onStatusChange={setStatus}
      />
      <BookList books={visibleBooks} onEdit={openEdit} onDelete={setDeleting} />
      <BookFormDialog
        open={formOpen}
        book={editing}
        onSave={handleSave}
        onClose={closeForm}
      />
      <DeleteConfirmDialog
        book={deleting}
        onConfirm={handleDelete}
        onClose={() => setDeleting(null)}
      />
      <Toaster theme={theme} />
    </main>
  );
}
