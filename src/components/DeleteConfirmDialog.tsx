import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Book } from "@/types";

type DeleteConfirmDialogProps = {
  /** The book to delete, or `null` when the dialog is closed. */
  book: Book | null;
  onConfirm: () => void;
  onClose: () => void;
};

export default function DeleteConfirmDialog({
  book,
  onConfirm,
  onClose,
}: DeleteConfirmDialogProps) {
  return (
    <Dialog open={book !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Delete book</DialogTitle>
          <DialogDescription>
            Do you really want to delete <strong>{book?.title}</strong>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
