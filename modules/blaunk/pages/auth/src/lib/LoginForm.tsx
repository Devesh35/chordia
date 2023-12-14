import { Button, Input, Labeled } from '@li/design/elements';
import styles from './login-form.module.css';
import Link from 'next/link';
import { Routes } from '@md/blaunk/config';

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Login</div>
      <Labeled label="Email">
        <Input placeholder="Enter your email" type="email" />
      </Labeled>
      <Labeled label="Password">
        <Input placeholder="Enter your password" type="password" />
      </Labeled>
      <div className={styles.action}>
        <Button>Login</Button>
        <div className={styles.signup}>
          Don't have an account?{' '}
          <Link href={Routes.signup.path}>
            <span>Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
