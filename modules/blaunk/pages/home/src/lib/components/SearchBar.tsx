'use client';

import { Button, Input, Labeled, Select } from '@li/design/elements';
import {
  CountriesOption,
  // MenuCategoriesIdType,
  // MenuOptions,
  // SubMenuOptions,
} from '@md/blaunk/config';
import styles from './search.module.css';
import clsx from 'clsx';
// import { useState } from 'react';

export const SearchBar = () => {
  // const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

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
      <Labeled label="City">
        <Select
          placeholder="Select City"
          className={styles['search-bar-items']}
          options={[
            { id: '0', item: 'Select Country first', isDisabled: true },
          ]}
          // onChange={(e) => setSelectedMenu(e?.id)}
        />
      </Labeled>
      <Labeled label="Area">
        <Input
          placeholder="Enter Area"
          className={styles['search-bar-items']}
          // options={
          //   selectedMenu
          //     ? SubMenuOptions[selectedMenu]
          //     : [{ id: '0', item: 'Select group first', isDisabled: true }]
          // }
        />
      </Labeled>
      <Labeled label="Pin-code">
        <Input
          type="number"
          placeholder="Enter Pin-code"
          className={styles['search-bar-items']}
        />
      </Labeled>
      <Labeled label="Name">
        <Input
          placeholder="Enter Name"
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
