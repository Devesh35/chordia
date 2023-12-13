import { Star, StarHalf } from '@li/design/icons';

type Props = {
  max?: number;
  rating: number;
  hasHalf?: boolean;
};

export const Rating = ({ max = 5, rating, hasHalf = false }: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      {Array(Math.max(1, max))
        .fill(0)
        .map((_, i) =>
          i + 1 <= rating ? (
            <Star fill={`var(--staractive)`} key={i} width={24} height={24} />
          ) : hasHalf && i < rating ? (
            <StarHalf
              fill={`var(--staractive)`}
              key={i}
              width={24}
              height={24}
            />
          ) : (
            <Star fill={`var(--starinactive)`} key={i} width={24} height={24} />
          ),
        )}
    </div>
  );
};
