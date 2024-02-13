import { Labeled, Select } from '@li/design/elements';
import styles from './filter.module.css';
import clsx from 'clsx';
import {
  LandmarkOptions,
  PriceOptions,
  PropertyTypeOptions,
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
      <Labeled label="Property" inline>
        <Select options={PropertyTypeOptions} />
      </Labeled>
      <Labeled label="Landmark" inline>
        <Select options={LandmarkOptions} />
      </Labeled>
    </div>
  );
};
