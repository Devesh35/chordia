'use client';

import { Carousal, Select, SelectItem } from '@li/design/elements';
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
import styles from './explore.module.css';
import { CountryFlag } from '@li/config/options';

const options = AvailableCountries.map((c) => ({
  id: c.id,
  item: c.name,
})); //.sort((a, b) => a.item.localeCompare(b.item));

const ads = getRandomImagesArray(10)(300, 240).map((src) => (
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
    useState<SelectItem<CountryCode>>();

  return (
    <div className={styles.wrapper}>
      <SectionHeader sectionName="Explore the world" left />
      <div className={styles.header}>
        <div className={styles.country}>
          <Select
            options={options}
            defaultItem={options[0]}
            onChange={setSelectedCountry}
            placeholder="Select a country"
          />
          {selectedCountry
            ? CountryFlag[selectedCountry.id]?.Flag
            : CountryFlag.in?.Flag}
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
            <div className={styles.content} key={i}>
              {ads}
            </div>
          ))}
      </Carousal>
    </div>
  );
};
