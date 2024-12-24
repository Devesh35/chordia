'use client';

import { Input, Labeled, Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { CountrySearch, SearchBarWrapper, SearchButton } from '@md/blaunk/design';
import { PinCodeSearch, SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';
import styles from './search.module.css';

export const BoutiqueSearch2 = () => {
  const isMobile = useMedia();
  return (
    <SearchBarWrapper>
      {isMobile ? (
        <>
          <SearchBarSubWrapper>
            <CountrySearch isStart />
            <PinCodeSearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <Labeled label="Article">
              <Select placeholder="Article" className={styles['search-bar-items']} options={[]} />
            </Labeled>
            <Labeled label="Search">
              <Input placeholder="Search" className={styles['search-bar-items']} />
            </Labeled>
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <SearchButton />
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
          <CountrySearch isStart />
          <PinCodeSearch />
          <Labeled label="Article">
            <Select placeholder="Article" className={styles['search-bar-items']} options={[]} />
          </Labeled>
          <Labeled label="Search">
            <Input placeholder="Search" className={styles['search-bar-items']} />
          </Labeled>
          <SearchButton />
        </>
      )}
    </SearchBarWrapper>
  );
};
