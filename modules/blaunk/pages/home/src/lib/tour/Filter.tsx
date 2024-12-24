import { Input, Labeled, Select } from '@li/design/elements';
import { useMedia } from '@li/design/hooks';
import { LandmarkOptions, PriceOptions, RatingOptions } from '@md/blaunk/config';
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
            <Labeled label="Name" inline>
              <Input placeholder="Search name" />
            </Labeled>
            <Labeled label="Landmark" inline>
              <Select options={LandmarkOptions} />
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
          <Labeled label="Name" inline>
            <Input placeholder="Search name" />
          </Labeled>
          <Labeled label="Landmark" inline>
            <Select options={LandmarkOptions} />
          </Labeled>
        </>
      )}
    </div>
  );
};
