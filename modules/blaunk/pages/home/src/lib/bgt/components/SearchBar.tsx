import { Button, Input, Labeled, Select } from '@li/design/elements';
import { CountriesOption, MenuOptions } from '@md/blaunk/config';
import styles from './search.module.css';
import clsx from 'clsx';

export const SearchBar = () => {
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
        />
      </Labeled>
      <Labeled label="Brand">
        <Input
          placeholder="Enter Brand"
          className={styles['search-bar-items']}
        />
      </Labeled>
      <Labeled label="Article">
        <Input
          placeholder="Enter Article"
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
