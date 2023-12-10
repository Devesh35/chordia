'use client';

import styled from '@emotion/styled';
import { Flex, FontSize, FontWeight, Foreground } from '@li/config/design';
import { Carousal, Divider } from '@li/design/elements';
import { getRandomImagesArray } from '@md/blaunk/config';
import { ImageCardOverlay } from '@li/design/components';

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
      <Header>
        <Title>
          <Divider color={'Primary'} />
          Trendy-stars
          <Divider color={'Primary'} />
        </Title>
      </Header>
      <Carousal showPagination={false}>
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Content key={i}>{images}</Content>
          ))}
      </Carousal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 40px;
`;

const Header = styled.div`
  ${Flex({ justify: 'center' })}
  margin-bottom: 12px;
`;

const Title = styled.div`
  width: 40%;
  white-space: nowrap;
  ${FontSize.H1}
  ${FontWeight.Bold}
  ${Foreground.color('Primary')}
  ${Flex({ gap: 4, align: 'center' })}
`;

const Content = styled.div`
  ${Flex({ gap: 24 })}
`;
