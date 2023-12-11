'use client';

import { getRandomImagesArray } from '@md/blaunk/config';
import { Carousal } from '@li/design/elements';
import Image from 'next/image';
import styled from '@emotion/styled';
import { SectionHeader } from '@md/blaunk/design';

const img = getRandomImagesArray(3)(600, 1920).map((src) => (
  <Image key={src} src={src} width={1914} height={600} alt="tour" />
));

export const StoreAds = () => {
  return (
    <Wrapper>
      <SectionHeader sectionName="Our services" />
      <StyledCarousal autoInterval={5000}>{img}</StyledCarousal>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const StyledCarousal = styled(Carousal)`
  height: 600px;
`;
