import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Book } from "@/types";
import { clearSpotlight, trackSpotlight } from "../useSpotlight";
import Rating from "./Rating";
import StatusBadge from "./StatusBadge";

type BookCardProps = {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (book: Book) => void;
};

export default function BookCard({ book, onEdit, onDelete }: BookCardProps) {
  return (
    <Card className="beam-card h-full" onPointerMove={trackSpotlight}
      onPointerEnter={trackSpotlight}
      onPointerDown={trackSpotlight}
      onPointerLeave={clearSpotlight}>
      <CardHeader>
        <CardTitle>
          <h2>{book.title}</h2>
        </CardTitle>
        <CardDescription>{book.author}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <StatusBadge status={book.status} />
          <Rating rating={book.rating} />
        </div>
        {book.notes && <p className="text-sm">{book.notes}</p>}
      </CardContent>
      <CardFooter className="mt-auto gap-2 border-t-0 bg-transparent">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onEdit(book)}
          aria-label={`Edit ${book.title}`}
        >
          Edit
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onDelete(book)}
          className="hover:border-destructive hover:bg-destructive/10 hover:text-destructive"
          aria-label={`Delete ${book.title}`}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
