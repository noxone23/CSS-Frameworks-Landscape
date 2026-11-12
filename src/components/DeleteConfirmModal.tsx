import styled from "styled-components";

import type { Book } from "../types";
import Button from "./Button";
import Modal from "./Modal";

type DeleteConfirmModalProps = {
  book: Book;
  onConfirm: () => void;
  onClose: () => void;
};

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: ${({ theme }) => theme.space.md};
`;

export default function DeleteConfirmModal({
  book,
  onConfirm,
  onClose,
}: DeleteConfirmModalProps) {
  return (
    <Modal titleId="delete-title" title="Delete book" onClose={onClose}>
      <p>
        Delete <strong>{book.title}</strong>? This cannot be undone.
      </p>
      <Actions>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </Actions>
    </Modal>
  );
}
