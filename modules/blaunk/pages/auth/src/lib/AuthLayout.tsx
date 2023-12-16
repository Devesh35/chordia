import Image from 'next/image';
import styles from './auth-layout.module.css';
import { randomImageUrl } from '@md/blaunk/config';
import { ReactChildren } from '@li/types/shared';

export const AuthLayout = ({ children }: ReactChildren) => {
  return (
    <div className={styles.wrapper}>
      <Image
        src={randomImageUrl(600, 800)}
        width={800}
        height={600}
        alt="login"
      />
      {children}
    </div>
  );
};
