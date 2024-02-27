'use client';

import { Button, Input, Labeled, Select } from '@li/design/elements';
import {
  CountriesOption,
  MenuCategoriesIdType,
  MenuOptions,
  SubMenuOptions,
} from '@md/blaunk/config';
import styles from './search.module.css';
import clsx from 'clsx';
import { useState } from 'react';

export const SearchBar = () => {
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  return (
    <div className={styles['search-bar-wrapper']}>
      <Labeled label="Country">
        <Select
          placeholder="Select Country"
          className={clsx(
            styles['search-bar-items'],
            styles['search-bar-items-start'],
          )}
          options={CountriesOption}
        />
      </Labeled>
      <Labeled label="Group">
        <Select
          placeholder="Select Group"
          className={styles['search-bar-items']}
          options={MenuOptions}
          onChange={(e) => setSelectedMenu(e?.id)}
        />
      </Labeled>
      <Labeled label="Article">
        <Select
          placeholder="Select article"
          className={styles['search-bar-items']}
          options={
            selectedMenu
              ? SubMenuOptions[selectedMenu]
              : [{ id: '0', item: 'Select group first', isDisabled: true }]
          }
        />
      </Labeled>
      <Labeled label="Brand">
        <Input
          placeholder="Enter Brand"
          className={styles['search-bar-items']}
        />
      </Labeled>
      <Button
        className={clsx(
          styles['search-bar-items'],
          styles['search-bar-items-last'],
        )}
      >
        Search
      </Button>
    </div>
  );
};
