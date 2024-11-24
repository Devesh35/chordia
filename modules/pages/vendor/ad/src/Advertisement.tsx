import { Link, PageHeader } from '@li/design/elements';
import { Routes } from '@md/blaunk/config';
import styles from './advertisements.module.css';

export const Advertisement = () => {
  return (
    <div>
      <PageHeader
        title={'Boutique'}
        aside={
          <Link prefetch variant="button-secondary" href={Routes.vendor.advertisement.add.path}>
            Add Advertisement
          </Link>
        }
      />
      <div className={styles['content-empty']}>
        No advertisement found.&nbsp;
        <Link prefetch href={Routes.vendor.advertisement.add.path} variant="primary">
          Add Advertisement
        </Link>
      </div>
    </div>
  );
};
