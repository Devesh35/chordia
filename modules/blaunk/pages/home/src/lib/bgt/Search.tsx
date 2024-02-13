'use client';

import { SearchTable, TData } from './components/SearchTable';
import { SearchBar } from './components/SearchBar';
import { useState } from 'react';
import { SelectedItem } from './components/SelectedItem';

export const Search = () => {
  const [selectedRow, setSelectedRow] = useState<TData>();

  return (
    <>
      <SearchBar />
      <div>
        <SearchTable onRowSelect={setSelectedRow} />
      </div>
      {selectedRow && <SelectedItem data={selectedRow} />}
    </>
  );
};
