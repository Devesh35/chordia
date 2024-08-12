'use client';

import { CountryFlag } from '@li/config/options';
import { ImageCardOverlay } from '@li/design/components';
import { Button, Carousal, Select } from '@li/design/elements';
import { SelectItemElement } from '@li/types/design';
import {
  AvailableCountryCode,
  CountriesOption,
  getRandomImagesArray,
  randomImageUrl,
} from '@md/blaunk/config';
import { SectionHeader } from '@md/blaunk/design';
import Image from 'next/image';
import { useState } from 'react';
import styles from './explore.module.css';

const ads = getRandomImagesArray(5)(400, 300).map((src) => (
  <ImageCardOverlay
    isClickable
    key={src}
    image={{
      src,
      width: 240,
      height: 300,
      alt: 'random',
    }}
  />
));

export const ExploreWorld = () => {
  const [selectedCountry, setSelectedCountry] =
    useState<SelectItemElement<AvailableCountryCode>>();

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="Market" basic />
      <div className={styles.header}>
        <div className={styles.country}>
          <Select
            options={CountriesOption}
            defaultItem={CountriesOption[0]}
            onChange={setSelectedCountry}
            placeholder="Select a country"
          />
          {selectedCountry
            ? CountryFlag[selectedCountry.id]?.Flag
            : CountryFlag.in?.Flag}
          <Button>View all</Button>
        </div>
        <div className={styles.banner}>
          <Image
            width={1500}
            height={200}
            alt="indian Ad"
            src={randomImageUrl(200, 1000)}
          />
        </div>
      </div>
      <Carousal className={styles.carousal} variant="dark">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <div className={styles.content}>{ads}</div>
              <div className={styles.content}>{ads}</div>
            </div>
          ))}
      </Carousal>
    </div>
  );
};
