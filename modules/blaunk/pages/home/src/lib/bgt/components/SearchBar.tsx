'use client';

import { useMedia } from '@li/design/hooks';
import { MenuCategoriesIdType } from '@md/blaunk/config';
import {
  ArticleSearch,
  BrandSearch,
  CountrySearch,
  GroupSearch,
  SearchBarWrapper,
  SearchButton,
} from '@md/blaunk/design';
import { SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';
import { useState } from 'react';

export const SearchBar = () => {
  const isMobile = useMedia();
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <SearchBarWrapper>
      {isMobile ? (
        <>
          <SearchBarSubWrapper>
            <CountrySearch isStart />
            <GroupSearch onChange={(e) => setSelectedMenu(e?.id)} />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <ArticleSearch selectedMenu={selectedMenu} />
            <BrandSearch />
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <SearchButton />
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
          <CountrySearch isStart />
          <GroupSearch onChange={(e) => setSelectedMenu(e?.id)} />
          <ArticleSearch selectedMenu={selectedMenu} />
          <BrandSearch />
          <SearchButton />
        </>
      )}
    </SearchBarWrapper>
  );
};
