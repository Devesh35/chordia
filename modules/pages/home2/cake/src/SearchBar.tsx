'use client';

import { Input, Labeled } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { AddressSearch, CountrySearch, SearchBarWrapper, SearchButton } from '@md/blaunk/design';
import styles from './search.module.css';

export const SearchBar = () => {
  const { isMobile } = useMedia();

  return (
    <SearchBarWrapper>
      <CountrySearch isStart={!isMobile} />
      <AddressSearch />
      <Labeled label="Name">
        <Input placeholder="Enter Name" className={styles['search-bar-items']} />
      </Labeled>
      <SearchButton />
    </SearchBarWrapper>
  );
};
