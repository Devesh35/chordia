import { Excel } from '@li/design/components';
import { FormSectionHeader } from '@li/design/elements';
import clsx from 'clsx';
import styles from './size-table.module.css';

export const SizeTable = () => {
  return (
    <div>
      <FormSectionHeader title={'Size-Color chart'} />
      <div className={clsx(styles['size-wrapper'])}>
        <div className={styles['size-wrapper-label']}>Size charts</div>
        <div className={styles['size-inner-wrapper']}>
          <div className={clsx(styles['label-color'])}>
            <span className={styles['size-label-color']}>Color</span>
          </div>
          <Excel />
        </div>
      </div>
    </div>
  );
};
