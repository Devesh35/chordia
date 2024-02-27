import { SearchTable } from './components/SearchTable';
import { SearchBar } from './components/SearchBar';

export const Search = () => {
  return (
    <>
      <SearchBar />
      <div>
        <SearchTable />
      </div>
    </>
  );
};
