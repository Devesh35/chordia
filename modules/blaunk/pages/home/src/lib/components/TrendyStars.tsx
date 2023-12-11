'use client';

import styled from '@emotion/styled';
import { Flex, FontSize, Foreground } from '@li/config/design';
import { Carousal } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { ImageCardOverlay } from '@li/design/components';
import { SectionHeader } from '@md/blaunk/design';

const Label = styled.div`
  ${FontSize.H3}
  ${Foreground.color('White')}
  ${Flex({ justify: 'center' })}
  padding-bottom: 24px;
`;

const images = getRandomImagesArray(3)(600).map((src) => (
  <ImageCardOverlay
    isClickable
    key={src}
    image={{
      src,
      width: 600,
      height: 600,
      alt: 'random',
    }}
    bottom={<Label>Trendy star name</Label>}
  />
));

export const TrendyStars = () => {
  return (
    <Wrapper>
      <SectionHeader sectionName="Trendy-stars" />
      <StyledCarousal showPagination={false}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Content key={i}>{images}</Content>
          ))}
      </StyledCarousal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 40px;
`;

const Content = styled.div`
  ${Flex({ gap: 24 })}
`;

const StyledCarousal = styled(Carousal)`
  height: 600px;
`;
