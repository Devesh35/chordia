import {
  Background,
  BorderRadius,
  FontSize,
  FontWeight,
  Foreground,
  Shadows,
} from '@li/config/design';
import styled from '@emotion/styled';
import { Rating } from '@li/design/elements';
import { ImageCardDetails } from './ImageCardWide';

export const ReviewCard = ({ i }: { i: number }) => (
  <ReviewWrapper>
    <ReviewCountry>IN</ReviewCountry>
    <ImageCardDetails
      image={{
        src: `https://source.unsplash.com/random/80x${90 + i}`,
        width: 80,
        height: 80,
        alt: 'random',
      }}
      top={<Rating rating={4} hasHalf />}
      bottom={<PremiumUser>Premium</PremiumUser>}
    />
    <ReviewUserName>C&amp;D Retail India LLP</ReviewUserName>
    <Review>This is the review from the review section</Review>
  </ReviewWrapper>
);

const ReviewWrapper = styled.div`
  ${Background.color('White')}
  ${BorderRadius.Large}
  height: 280px;
  padding: 12px;
  max-width: 240px;
  ${Shadows.s}
`;

const ReviewCountry = styled.div`
  float: right;
  margin-bottom: 4px;
`;

const PremiumUser = styled.div`
  ${FontSize.H5}
  ${Foreground.color('StarActive')}
  float: right;
`;

const ReviewUserName = styled.div`
  margin-top: 8px;
  margin-bottom: 16px;
  ${FontSize.H5}
  ${FontWeight.Medium}
`;

const Review = styled.span`
  ${FontSize.P14}
`;
