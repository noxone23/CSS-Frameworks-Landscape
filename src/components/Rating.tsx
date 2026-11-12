import styled from "styled-components";

type RatingProps = { rating: number | null };

const STARS = [1, 2, 3, 4, 5];

const Stars = styled.span`
  letter-spacing: ${({ theme }) => theme.space.xs};
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${({ theme, $filled }) =>
    $filled ? theme.colors.star : theme.colors.border};
`;

const NotRated = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

export default function Rating({ rating }: RatingProps) {
  if (rating === null) {
    return <NotRated>Not rated</NotRated>;
  }
  return (
    <Stars role="img" aria-label={`${rating} of 5 stars`}>
      {STARS.map((value) => (
        <Star key={value} $filled={value <= rating} aria-hidden="true">
          ★
        </Star>
      ))}
    </Stars>
  );
}
