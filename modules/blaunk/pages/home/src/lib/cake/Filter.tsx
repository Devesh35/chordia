import { Labeled, Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { CakeTypeOptions, OccupationOptions, PriceOptions, RatingOptions } from '@md/blaunk/config';
import clsx from 'clsx';
import { SearchBarSubWrapper } from 'modules/blaunk/design/src/lib/SearchComponents';
import styles from './filter.module.css';

export const Filter = () => {
  const isMobile = useMedia();
  return (
    <div className={clsx(styles['filter-wrapper'])}>
      {isMobile ? (
        <>
          <SearchBarSubWrapper>
            <Labeled label="Price" inline>
              <Select options={PriceOptions} />
            </Labeled>
            <Labeled label="Rating" inline>
              <Select options={RatingOptions} />
            </Labeled>
          </SearchBarSubWrapper>
          <SearchBarSubWrapper>
            <Labeled label="Occasions" inline>
              <Select options={OccupationOptions} />
            </Labeled>
            <Labeled label="Type" inline>
              <Select options={CakeTypeOptions} />
            </Labeled>
          </SearchBarSubWrapper>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};
