type RatingProps = {
  rating: number | null;
};

const MAX_RATING = 5;

export default function Rating({ rating }: RatingProps) {
  if (rating === null) {
    return <span className="text-sm text-muted-foreground">Not rated</span>;
  }

  return (
    <span
      className="star-glow text-star"
      role="img"
      aria-label={`${rating} of ${MAX_RATING} stars`}
    >
      {"★".repeat(rating)}
      {"☆".repeat(MAX_RATING - rating)}
    </span>
  );
}
