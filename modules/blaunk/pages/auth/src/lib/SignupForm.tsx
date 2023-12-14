import { Button, Input, Labeled } from '@li/design/elements';
import styles from './login-form.module.css';
import Link from 'next/link';
import { Routes } from '@md/blaunk/config';

export const SignupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign up</div>
      <Labeled label="Email">
        <Input placeholder="Enter your email" type="email" />
      </Labeled>
      <Labeled label="Password">
        <Input placeholder="Enter your password" type="password" />
      </Labeled>
      <div className={styles.action}>
        <Button>Signup</Button>
        <div className={styles.signup}>
          Already an user?{' '}
          <Link href={Routes.login.path}>
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
