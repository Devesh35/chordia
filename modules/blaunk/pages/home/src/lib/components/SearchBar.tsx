'use client';

import { Input, Labeled } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { AddressSearch, CountrySearch, SearchBarWrapper, SearchButton } from '@md/blaunk/design';
import { CitySearch, PinCodeSearch, SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';
import styles from './search.module.css';

export const SearchBar = () => {
  const isMobile = useMedia();
  return (
    <SearchBarWrapper>
      {isMobile ? (
        <>
          <SearchBarSubWrapper>
            <CountrySearch isStart />
            <CitySearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <PinCodeSearch />
            <Labeled label="Name">
              <Input placeholder="Enter Name" className={styles['search-bar-items']} />
            </Labeled>
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <SearchButton />
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
          <CountrySearch isStart />
          <AddressSearch />
          <Labeled label="Name">
            <Input placeholder="Enter Name" className={styles['search-bar-items']} />
          </Labeled>
          <SearchButton />
        </>
      )}
    </SearchBarWrapper>
  );
};
