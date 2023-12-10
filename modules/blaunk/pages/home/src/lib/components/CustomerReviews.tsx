'use client';

import {
  Background,
  BorderRadius,
  Flex,
  FontSize,
  Size,
} from '@li/config/design';
import { ReviewCard } from '@li/design/components';
import { Carousal } from '@li/design/elements';
import styled from '@emotion/styled';

export const CustomerReviews = () => {
  return (
    <Wrapper>
      <Heading>Customer speaks</Heading>
      <CarousalWrapper>
        <Carousal>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <ReviewGroup key={i}>
                <ReviewCard i={3 * i + 0} key={i + 0} />
                <ReviewCard i={3 * i + 1} key={i + 1} />
              </ReviewGroup>
            ))}
        </Carousal>
      </CarousalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 47%;
  ${Background.color('Gray050')}
  ${BorderRadius.Large}
  padding: 24px;
`;
const Heading = styled.div`
  ${FontSize.H4}
  text-align: center;
  margin-bottom: 24px;
`;
const CarousalWrapper = styled.div`
  ${Size.fullMax}
`;

const ReviewGroup = styled.div`
  ${Flex({ gap: 8, justify: 'center' })}
  height: 90%;
  width: 80%;
  max-width: 80%;
  margin: 0 auto;
`;
