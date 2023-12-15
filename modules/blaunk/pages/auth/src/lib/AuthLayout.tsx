import Image from 'next/image';
import styles from './login.module.css';
import { randomImageUrl } from '@md/blaunk/config';
import { ReactChildren } from '@li/types/shared';

export const AuthLayout = ({ children }: ReactChildren) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={randomImageUrl(600, 800)}
          width={800}
          height={600}
          alt="login"
        />
      </div>
      <div className={styles.form}>{children}</div>
    </div>
  );
};
