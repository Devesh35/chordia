import { Colors, Flex } from '@li/config/design';
import { Star, StarHalf } from '@li/design/icons';
import styled from '@emotion/styled';

type Props = {
  max?: number;
  rating: number;
  hasHalf?: boolean;
};

export const Rating = ({ max = 5, rating, hasHalf = false }: Props) => {
  return (
    <Wrapper>
      {Array(Math.max(1, max))
        .fill(0)
        .map((_, i) =>
          i + 1 <= rating ? (
            <Star color={Colors.StarActive} key={i} width={24} height={24} />
          ) : hasHalf && i < rating ? (
            <StarHalf
              color={Colors.StarActive}
              key={i}
              width={24}
              height={24}
            />
          ) : (
            <Star color={Colors.StarInactive} key={i} width={24} height={24} />
          ),
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex({ gap: 4 })}
`;
