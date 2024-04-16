'use client';

import {
  AddressSearch,
  CountrySearch,
  SearchBarWrapper,
  SearchButton,
  StoreSearch,
} from '../../components';

export const SearchBar = () => {
  // const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <SearchBarWrapper>
      <StoreSearch isStart />
      <CountrySearch />
      <AddressSearch />
      <SearchButton />
    </SearchBarWrapper>
  );
};
