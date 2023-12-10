'use client';

import {
  Alpha,
  Background,
  BoxSizing,
  Colors,
  FlexItems,
  Layers,
  Overflow,
  Position,
  Size,
  Transparent,
} from '@li/config/design';
import { Carousal, ScrollableSnap } from '@li/design/elements';
import { CountryCard } from '@li/design/components';
import styled from '@emotion/styled';
import Image from 'next/image';
import { AvailableCountries, getRandomImagesArray } from '@md/blaunk/config';

const imageSize = 700;

const images = getRandomImagesArray(6)(imageSize, 1920).map((src, i) => (
  <Image
    key={src}
    src={src}
    width={1920}
    height={imageSize}
    alt="random"
    loading={i === 0 ? 'eager' : 'lazy'}
  />
));

export const TopSection = () => {
  return (
    <TopSectionWrapper>
      <CarousalWrapper>
        <Carousal pagination="left" autoInterval={5000}>
          {images}
        </Carousal>
      </CarousalWrapper>
      <FlagsBackground>
        <StyledScrollableSnap>
          {AvailableCountries.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </StyledScrollableSnap>
      </FlagsBackground>
    </TopSectionWrapper>
  );
};

const TopSectionWrapper = styled.div`
  ${Size.fullWidth}
  ${Position.relative}
  height: ${imageSize + 240}px;
`;

const CarousalWrapper = styled.div`
  ${Layers.Base}
  ${Size.fullWidth};
  height: ${imageSize}px;
`;

const FlagsBackground = styled.div`
  ${Size.fullWidth}
  ${Background.gradient(
    'to bottom',
    `${Colors.Transparent} 5%`,
    `${Transparent(Colors.Primary050, Alpha[20])} 15%`,
    `${Colors.Primary050} 40%`,
  )}
  margin: -180px auto 0;
  ${Layers.First}
  ${Position.relative}
  ${Overflow.hidden}
`;

const StyledScrollableSnap = styled(ScrollableSnap)`
  ${BoxSizing.borderBox}
  ${FlexItems.gap(48)}
  ${Size.fullWidth}
  padding: 0 24px;
`;
