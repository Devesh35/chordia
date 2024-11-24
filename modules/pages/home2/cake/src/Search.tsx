import { SearchBar } from './SearchBar';

type Props = {
  isMobile?: boolean;
  isTab?: boolean;
};

export const Search = (p: Props) => {
  return <SearchBar />;
};
