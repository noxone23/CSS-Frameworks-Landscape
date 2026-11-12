import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import type { Book } from "../types";

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
    <Modal
      show
      onHide={onClose}
      aria-labelledby="delete-title"
      contentClassName="glass"
    >
      <Modal.Header closeButton>
        <Modal.Title id="delete-title" as="h2" className="fs-4">
          Delete book
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you really want to delete <strong>{book.title}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
