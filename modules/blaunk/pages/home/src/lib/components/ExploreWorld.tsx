'use client';

import { BorderRadius, Flex, Overflow } from '@li/config/design';
import { Carousal, Select, SelectItem } from '@li/design/elements';
import styled from '@emotion/styled';
import { useState } from 'react';
import {
  AvailableCountries,
  getRandomImagesArray,
  randomImageUrl,
} from '@md/blaunk/config';
import { ImageCardOverlay } from '@li/design/components';
import Image from 'next/image';
import { CountryCode } from '@li/types/config';

const options = AvailableCountries.map((c) => ({
  id: c.id,
  item: c.name,
})).sort((a, b) => a.item.localeCompare(b.item));

const ads = getRandomImagesArray(12)(400, 300).map((src) => (
  <ImageCardOverlay
    isClickable
    key={src}
    image={{
      src,
      width: 300,
      height: 400,
      alt: 'random',
    }}
  />
));

export const ExploreWorld = () => {
  const [, setSelectedCountry] = useState<SelectItem<CountryCode>>();

  return (
    <Wrapper>
      <Header>
        <CountrySection>
          <Select
            options={options}
            onChange={setSelectedCountry}
            placeholder="Select a country"
          />
        </CountrySection>
        <BannerSection>
          <Image
            width={1500}
            height={200}
            alt="indian Ad"
            src={randomImageUrl(200, 1000)}
          />
        </BannerSection>
      </Header>
      <Carousal>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Content key={i}>{ads}</Content>
          ))}
      </Carousal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 40px;
`;

const Header = styled.div`
  ${Flex({ gap: 28 })}
`;

const CountrySection = styled.div`
  width: 300px;
`;

const BannerSection = styled.div`
  height: 200px;
  ${BorderRadius.Large}
  ${Overflow.hidden}
`;

const Content = styled.div`
  margin: 12px 0;
  ${Flex({ gap: 4, wrap: true, justify: 'center' })}
`;
