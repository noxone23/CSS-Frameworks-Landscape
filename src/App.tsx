import { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { filterBooks } from "./books";
import AppHeader from "./components/AppHeader";
import BookFormModal from "./components/BookFormModal";
import BookList from "./components/BookList";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import ToastMessage from "./components/ToastMessage";
import Toolbar from "./components/Toolbar";
import GlobalStyle from "./GlobalStyle";
import { aeroTheme, darkTheme } from "./theme";
import type { Theme } from "./theme";
import type { Book, NewBook, StatusFilter } from "./types";
import { useBooks } from "./useBooks";
import { useTheme } from "./useTheme";
import type { ThemeMode } from "./useTheme";

const THEMES: Record<ThemeMode, Theme> = {
  dark: darkTheme,
  aero: aeroTheme,
};

const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
  max-width: ${({ theme }) => theme.sizes.content};
  margin: ${({ theme }) => theme.space.none} auto;
  padding: ${({ theme }) => theme.space.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.space.xl};
  }
`;

export default function App() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const { mode, toggleTheme } = useTheme();
  const [status, setStatus] = useState<StatusFilter>("all");
  const [query, setQuery] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Book | null>(null);
  const [deleting, setDeleting] = useState<Book | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const closeToast = useCallback(() => setToast(null), []);

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

  function handleSave(values: NewBook) {
    if (editing) {
      updateBook(editing.id, values);
      setToast("Book updated");
    } else {
      addBook(values);
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
    <ThemeProvider theme={THEMES[mode]}>
      <GlobalStyle />
      <Page>
        <AppHeader
          dark={mode === "dark"}
          onToggleTheme={toggleTheme}
          onAdd={openAdd}
        />
        <Toolbar
          query={query}
          status={status}
          onQueryChange={setQuery}
          onStatusChange={setStatus}
        />
        <BookList
          books={filterBooks(books, { status, query })}
          onEdit={openEdit}
          onDelete={setDeleting}
        />
      </Page>
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
    </ThemeProvider>
  );
}
