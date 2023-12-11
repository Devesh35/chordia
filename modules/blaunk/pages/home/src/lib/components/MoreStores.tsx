'use client';

import styled from '@emotion/styled';
import Image from 'next/image';
import { Flex, Margin } from '@li/config/design';
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
      <StyledCarousal>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Content key={i}>{images}</Content>
          ))}
      </StyledCarousal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Margin({ inline: 1 })}
`;

const Header = styled.div`
  ${Flex({ justify: 'center' })}
  ${Margin({ bottom: 0.75 })}
`;

const Content = styled.div`
  ${Flex({ gap: 24 })}
`;

const StyledCarousal = styled(Carousal)`
  height: 400px;
`;
