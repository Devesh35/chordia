import { useMedia } from '@li/design/hooks';
import { AddressSearch, CountrySearch, SearchBarWrapper, SearchButton } from '@md/blaunk/design';
import {
  CitySearch,
  PinCodeSearch,
  PropertyTypeSearch,
  SearchBarSubWrapper,
} from 'modules/blaunk/design/src/lib/SearchComponents';

export const Search = () => {
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
            <PropertyTypeSearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <SearchButton />
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
          <CountrySearch isStart />
          <AddressSearch />
          <PropertyTypeSearch />
          <SearchButton />
        </>
      )}
    </SearchBarWrapper>
  );
};
