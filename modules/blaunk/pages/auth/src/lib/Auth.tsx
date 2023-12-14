import Image from 'next/image';
import styles from './login.module.css';
import { randomImageUrl } from '@md/blaunk/config';
import { LoginForm } from './LoginForm';
import { SignupForm } from './SignupForm';

export const Auth = ({ isNewUser }: { isNewUser?: boolean }) => {
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
      <div className={styles.form}>
        {isNewUser ? <SignupForm /> : <LoginForm />}
      </div>
    </div>
  );
};
