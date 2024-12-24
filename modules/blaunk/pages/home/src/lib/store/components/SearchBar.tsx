'use client';

import { useMedia } from '@li/design/hooks';
import { AddressSearch, CountrySearch, SearchBarWrapper, SearchButton, StoreSearch } from '@md/blaunk/design';
import { SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';

export const SearchBar = () => {
  // const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();
  const isMobile = useMedia();

  return (
    <SearchBarWrapper>
      {isMobile ? (
        <>
          <SearchBarSubWrapper>
            <StoreSearch isStart />
            <CountrySearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <AddressSearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <SearchButton />
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
          <StoreSearch isStart />
          <CountrySearch />
          <AddressSearch />
          <SearchButton />
        </>
      )}
    </SearchBarWrapper>
  );
};
