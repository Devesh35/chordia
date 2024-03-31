import { getStaticImageSrc } from '@li/design/icons';
import { blaunkStore } from '@md/blaunk/config';
import Image from 'next/image';
import styles from './deal-section.module.css';

export const DealSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['deal']}>Deal</div>
      <Image
        src={getStaticImageSrc(blaunkStore)}
        alt="blaunk_store"
        width={720}
        height={240}
      />
      <div className={styles['deal']}>DealI</div>
    </div>
  );
};
