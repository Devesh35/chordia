import { Divider } from '@li/design/elements';
import { SocialItem as SI, SocialItemType } from '@md/blaunk/config';
import styles from './social-item.module.css';

type SocialItemProps = { type: SocialItemType };

export const SocialItem = ({ type }: SocialItemProps) => {
  const item = SI[type];

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{item.icon}</div>
      <div className={styles.details}>
        {item.label}
        <Divider color="var(--gray800)" />
        <div className={styles.link}>Click here</div>
      </div>
    </div>
  );
};
