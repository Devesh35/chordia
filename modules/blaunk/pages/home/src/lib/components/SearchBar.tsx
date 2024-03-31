'use client';

import { Input, Labeled } from '@li/design/elements';
import {
  AddressSearch,
  CountrySearch,
  SearchBarWrapper,
  SearchButton,
} from './SearchComponents';
import styles from './search.module.css';

export const SearchBar = () => {
  // const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

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
