import type { Book } from "../types";
import Button from "./Button";
import Modal from "./Modal";

type DeleteConfirmModalProps = {
  book: Book;
  onConfirm: () => void;
  onClose: () => void;
};

export default function DeleteConfirmModal({
  book,
  onConfirm,
  onClose,
}: DeleteConfirmModalProps) {
  return (
    <Modal titleId="delete-title" title="Delete book" onClose={onClose}>
      <p>
        Do you really want to delete <strong>{book.title}</strong>?
      </p>
      <div className="mt-6 flex justify-end gap-2">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}
