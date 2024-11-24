'use client';

import { Input, Labeled } from '@li/design/elements';
import {
  AddressSearch,
  CountrySearch,
  SearchBarWrapper,
  SearchButton,
} from '@md/blaunk/design';
import styles from './search.module.css';

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <CountrySearch isStart />
      <AddressSearch />
      <Labeled label="Name">
        <Input
          placeholder="Enter Name"
          className={styles['search-bar-items']}
        />
      </Labeled>
      <SearchButton />
    </SearchBarWrapper>
  );
};
