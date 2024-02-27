import { Star, StarHalf } from '@li/design/icons';

type Props = {
  max?: number;
  rating: number;
  hasHalf?: boolean;
  size?: 'small' | 'medium' | 'large';
};

export const Rating = ({
  max = 5,
  rating,
  hasHalf = false,
  size = 'medium',
}: Props) => {
  const width = size === 'small' ? 16 : size === 'medium' ? 24 : 32;
  return (
    <div style={{ display: 'flex' }}>
      {Array(Math.max(1, max))
        .fill(0)
        .map((_, i) =>
          i + 1 <= rating ? (
            <Star
              fill={`var(--staractive)`}
              key={i}
              width={width}
              height={width}
            />
          ) : hasHalf && i < rating ? (
            <StarHalf
              fill={`var(--staractive)`}
              key={i}
              width={width}
              height={width}
            />
          ) : (
            <Star
              fill={`var(--starinactive)`}
              key={i}
              width={width}
              height={width}
            />
          ),
        )}
    </div>
  );
};
