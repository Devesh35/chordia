'use client';

import { MenuCategoriesIdType } from '@md/blaunk/config';
import {
  CountrySearch,
  SearchBarWrapper,
  SearchButton,
} from '@md/blaunk/design';
import {
  AreaSearch,
  ArticleSearch,
  GroupSearch,
  PinCodeSearch,
} from 'modules/blaunk/design/src/lib/SearchComponents';
import { useState } from 'react';

export const Search = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <SearchBarWrapper>
      <CountrySearch isStart />
      <GroupSearch onChange={(e) => setSelectedMenu(e?.id)} />
      <ArticleSearch selectedMenu={selectedMenu} />
      <PinCodeSearch />
      <AreaSearch />
      <SearchButton />
    </SearchBarWrapper>
  );
};
