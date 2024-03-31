'use client';

import { MenuCategoriesIdType } from '@md/blaunk/config';
import { useState } from 'react';
import {
  ArticleSearch,
  BrandSearch,
  CountrySearch,
  GroupSearch,
  SearchBarWrapper,
  SearchButton,
} from '../../components';

export const SearchBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <SearchBarWrapper>
      <CountrySearch isStart />
      <GroupSearch onChange={(e) => setSelectedMenu(e?.id)} />
      <ArticleSearch selectedMenu={selectedMenu} />
      <BrandSearch />
      <SearchButton />
    </SearchBarWrapper>
  );
};
