'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { Flex } from '@li/config/design';
import { Carousal } from '@li/design/elements';
import { getRandomImagesArray, blaunkStore } from '@md/blaunk/config';
import { ImageCardOverlay } from '@li/design/components';

const images = getRandomImagesArray(3)(400, 600).map((src) => (
  <ImageCardOverlay
    isClickable
    key={src}
    image={{
      src,
      width: 600,
      height: 400,
      alt: 'random',
    }}
  />
));

export const MoreStores = () => {
  return (
    <Wrapper>
      <Header>
        <Image src={blaunkStore} width={640} height={190} alt="store" />
      </Header>
      <Carousal>
        {Array(6)
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

const Content = styled.div`
  ${Flex({ gap: 24 })}
`;
