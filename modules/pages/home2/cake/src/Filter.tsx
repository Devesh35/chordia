import { Labeled, Select } from '@li/design/elements';
import { CakeTypeOptions, OccupationOptions, PriceOptions, RatingOptions } from '@md/blaunk/config';
import clsx from 'clsx';
import styles from './filter.module.css';

type Props = {
  isMobile?: boolean;
  isTab?: boolean;
};

export const Filter = (p: Props) => {
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
