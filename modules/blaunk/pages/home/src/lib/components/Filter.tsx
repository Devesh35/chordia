import { Labeled, Select } from '@li/design/elements';
import styles from './search.module.css';
import clsx from 'clsx';
import { CakeTypeOptions, OccupationOptions } from '@md/blaunk/config';
import { Star } from '@li/design/icons';

const Rating = ({ num }: { num: number }) => (
  <span>
    {Array.from({ length: num }).map((_, i) => (
      <Star fill="var(--primary)" width={16} height={16} key={i} />
    ))}
  </span>
);

export const Filter = () => {
  return (
    <div
      className={clsx(styles['search-bar-wrapper'], styles['filter-wrapper'])}
    >
      <Labeled label="Price" inline>
        <Select
          options={[
            { id: 'htl', item: 'High to Low' },
            { id: 'lth', item: 'low to High' },
          ]}
        />
      </Labeled>
      <Labeled label="Rating" inline>
        <Select
          options={[
            { id: 'One', item: <Rating num={1} /> },
            { id: 'Two', item: <Rating num={2} /> },
            { id: 'Three', item: <Rating num={3} /> },
            { id: 'Four', item: <Rating num={4} /> },
            { id: 'Five', item: <Rating num={5} /> },
          ]}
        />
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
