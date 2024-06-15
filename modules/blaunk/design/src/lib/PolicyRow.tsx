import {
  CircleInfo,
  Facebook,
  LinkedIn,
  Whatsapp,
  free_wifi,
  fssai,
  getStaticImageSrc,
  no_meals,
} from '@li/design/icons';
import Image from 'next/image';
import { SocialItem } from './SocialItem';
import styles from './policy-row.module.css';

export const Share = () => (
  <div className={styles['share-wrapper']}>
    <div className={styles['share-icons']}>
      <div className={styles.icon}>
        <Whatsapp width={44} height={44} />
      </div>
      <div className={styles.icon}>
        <LinkedIn width={28} height={28} />
      </div>
      <div className={styles.icon}>
        <Facebook width={28} height={28} />
      </div>
      <span>Share with groups</span>
    </div>
    <div className={styles['share-url']}>
      <div className={styles['share-url-box']}>www.blaunk.com</div>
      <div className={styles['share-url-button']}>Copy url</div>
    </div>
  </div>
);

const Issue = () => (
  <div className={styles['issue-wrapper']}>
    <div className={styles['issue-return']}>
      Exchange and return policy{' '}
      <CircleInfo width={20} height={20} color="skyblue" />{' '}
    </div>
    <div className={styles['issue-report']}>
      Report an issue{' '}
      <CircleInfo width={20} height={20} color="var(--error300)" />
    </div>
  </div>
);

export const PolicyRow = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles['social-wrapper']}>
        <SocialItem type="whatsapp" />
      </div>
      <Image
        className={styles.thumbs}
        src={getStaticImageSrc(fssai)}
        alt="fssai"
        width={120}
        height={80}
      />
      <Image
        className={styles.thumbs}
        src={getStaticImageSrc(free_wifi)}
        alt="free_wifi"
        width={120}
        height={80}
      />
      <Image
        className={styles.thumbs}
        src={getStaticImageSrc(no_meals)}
        alt="no_meals"
        width={120}
        height={80}
      />
      <Share />
      <Issue />
    </div>
  );
};
