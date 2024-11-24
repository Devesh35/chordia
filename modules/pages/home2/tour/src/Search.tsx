import {
  AddressSearch,
  CountrySearch,
  SearchBarWrapper,
  SearchButton,
} from '@md/blaunk/design';
import { PropertyTypeSearch } from 'modules/blaunk/design/src/lib/SearchComponents';

export const Search = () => {
  return (
    <SearchBarWrapper>
      <CountrySearch isStart />
      <AddressSearch />
      <PropertyTypeSearch />
      <SearchButton />
    </SearchBarWrapper>
  );
};
