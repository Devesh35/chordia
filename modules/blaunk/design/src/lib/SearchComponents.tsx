import { Button, Input, Labeled, Select } from '@li/design/elements';
import { Article, Brand, Globe, Group, Store } from '@li/design/icons';
import { ArrayElement, ReactChildren } from '@li/types/shared';
import {
  CountriesOption,
  MenuCategoriesIdType,
  MenuOptions,
  SubMenuOptions,
  storeOptions,
} from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './search.module.css';

type SearchBaseProps<S> = {
  onChange?: (item?: S) => void;
  isStart?: boolean;
};

type CountrySearchProps = SearchBaseProps<ArrayElement<typeof CountriesOption>>;

type GroupSearchProps = SearchBaseProps<ArrayElement<typeof MenuOptions>>;

type ArticleSearchProps<S extends MenuCategoriesIdType = MenuCategoriesIdType> =
  SearchBaseProps<ArrayElement<(typeof SubMenuOptions)[S]>> & {
    selectedMenu?: S;
  };

type StoreSearchProps = SearchBaseProps<ArrayElement<typeof storeOptions>>;

export const SearchBarWrapper = ({ children }: ReactChildren) => (
  <div className={styles['search-bar-wrapper']}>{children}</div>
);

export const CountrySearch = ({ isStart, onChange }: CountrySearchProps) => (
  <Labeled label="Country">
    <Select
      iconLeft={<Globe />}
      placeholder="Select Country"
      className={clsx(styles['search-bar-items'], {
        [styles['search-bar-items-start']]: isStart,
      })}
      options={CountriesOption}
      onChange={onChange}
    />
  </Labeled>
);

export const GroupSearch = ({ onChange }: GroupSearchProps) => (
  <Labeled label="Group">
    <Select
      iconLeft={<Group />}
      placeholder="Select Group"
      className={styles['search-bar-items']}
      options={MenuOptions}
      onChange={onChange}
    />
  </Labeled>
);

export const ArticleSearch = ({ selectedMenu }: ArticleSearchProps) => (
  <Labeled label="Article">
    <Select
      iconLeft={<Article />}
      placeholder="Select article"
      className={styles['search-bar-items']}
      options={
        selectedMenu
          ? SubMenuOptions[selectedMenu]
          : [{ id: '0', item: 'Select group first', isDisabled: true }]
      }
    />
  </Labeled>
);
export const StoreSearch = ({ isStart, onChange }: StoreSearchProps) => (
  <Labeled label="Store">
    <Select
      iconLeft={<Store />}
      placeholder="Select Store type"
      className={clsx(styles['search-bar-items'], {
        [styles['search-bar-items-start']]: isStart,
      })}
      options={storeOptions}
      onChange={onChange}
    />
  </Labeled>
);

export const BrandSearch = () => (
  <Labeled label="Brand">
    <Input
      iconLeft={<Brand />}
      placeholder="Enter Brand"
      className={styles['search-bar-items']}
    />
  </Labeled>
);

export const AddressSearch = () => (
  <>
    <Labeled label="City">
      <Input placeholder="Enter City" className={styles['search-bar-items']} />
    </Labeled>
    <Labeled label="Pin code">
      <Input
        placeholder="Enter Pin code"
        className={styles['search-bar-items']}
      />
    </Labeled>
  </>
);

export const SearchButton = () => (
  <Button
    className={clsx(
      styles['search-bar-items'],
      styles['search-bar-items-last'],
    )}
  >
    Search
  </Button>
);
