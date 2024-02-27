import { Labeled, Select } from '@li/design/elements';
import styles from './filter.module.css';
import clsx from 'clsx';
import {
  CakeTypeOptions,
  OccupationOptions,
  PriceOptions,
  RatingOptions,
} from '@md/blaunk/config';

export const Filter = () => {
  return (
    <div className={clsx(styles['filter-wrapper'])}>
      <Labeled label="Price" inline>
        <Select options={PriceOptions} />
      </Labeled>
      <Labeled label="Rating" inline>
        <Select options={RatingOptions} />
      </Labeled>
      <Labeled label="Occasions" inline>
        <Select options={OccupationOptions} />
      </Labeled>
      <Labeled label="Type" inline>
        <Select options={CakeTypeOptions} />
      </Labeled>
    </div>
  );
};
