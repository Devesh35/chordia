'use client';

import { Input, Labeled, Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { SearchBarWrapper, SearchButton } from '@md/blaunk/design';
import { PinCodeSearch, SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';
import styles from './search.module.css';

export const SearchBar = () => {
  const isMobile = useMedia();
  return (
    <div style={{ paddingTop: '12px' }}>
      <SearchBarWrapper>
        {isMobile ? (
          <>
            <SearchBarSubWrapper>
              <Labeled label="Group">
                <Select placeholder="Group" className={styles['search-bar-items']} options={[]} />
              </Labeled>
              <Labeled label="Article">
                <Select placeholder="Article" className={styles['search-bar-items']} options={[]} />
              </Labeled>
            </SearchBarSubWrapper>
            <SearchBarSubWrapper>
              <PinCodeSearch />
              <Labeled label="Search">
                <Input placeholder="Search" className={styles['search-bar-items']} />
              </Labeled>
            </SearchBarSubWrapper>
            <SearchBarSubWrapper>
              <SearchButton />
            </SearchBarSubWrapper>
          </>
        ) : (
          <>
            <Labeled label="Group">
              <Select placeholder="Group" className={styles['search-bar-items']} options={[]} />
            </Labeled>
            <Labeled label="Article">
              <Select placeholder="Article" className={styles['search-bar-items']} options={[]} />
            </Labeled>
            <PinCodeSearch />
            <Labeled label="Search">
              <Input placeholder="Search" className={styles['search-bar-items']} />
            </Labeled>
            <SearchButton />
          </>
        )}
      </SearchBarWrapper>
    </div>
  );
};
