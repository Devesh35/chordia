'use client';

import { BorderRadius, Flex, Margin, Overflow } from '@li/config/design';
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
import { SectionHeader } from '@md/blaunk/design';

const options = AvailableCountries.map((c) => ({
  id: c.id,
  item: c.name,
})); //.sort((a, b) => a.item.localeCompare(b.item));

const ads = getRandomImagesArray(8)(400, 300).map((src) => (
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
      <SectionHeader sectionName="Explore the world" />
      <Header>
        <CountrySection>
          <Select
            options={options}
            defaultItem={options[0]}
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
      <StyledCarousal hidePagination variant="dark">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <Content key={i}>{ads}</Content>
          ))}
      </StyledCarousal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Margin({ inline: 1 })}
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
  ${Flex({ gap: 4, wrap: true, justify: 'space-between' })}
`;

const StyledCarousal = styled(Carousal)`
  height: 826px;
`;
