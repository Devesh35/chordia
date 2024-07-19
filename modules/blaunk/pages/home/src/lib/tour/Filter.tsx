import { Input, Labeled, Select } from '@li/design/elements';
import {
  LandmarkOptions,
  PriceOptions,
  RatingOptions,
} from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './filter.module.css';

export const Filter = () => {
  return (
    <div className={clsx(styles['filter-wrapper'])}>
      <Labeled label="Price" inline>
        <Select options={PriceOptions} />
      </Labeled>
      <Labeled label="Rating" inline>
        <Select options={RatingOptions} />
      </Labeled>
      <Labeled label="Name" inline>
        <Input placeholder="Search name" />
      </Labeled>
      <Labeled label="Landmark" inline>
        <Select options={LandmarkOptions} />
      </Labeled>
    </div>
  );
};
