import {
  Button,
  Input,
  Labeled,
  Link,
  PasswordInput,
} from '@li/design/elements';
import styles from './common.module.css';
import { Routes } from '@md/blaunk/config';

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Login</div>
      <Labeled label="Email">
        <Input placeholder="Enter your email" type="email" />
      </Labeled>
      <Labeled label="Password">
        <PasswordInput placeholder="Enter your password" />
      </Labeled>
      <div className={styles.action}>
        <Link href={Routes.auth.forgot.path} className={styles.forgot}>
          Reset password?
        </Link>
        <Button className={styles.login}>
          <Link href={Routes.home.bgt.path}>Login</Link>
        </Button>
        <span>
          Don't have an account?{' '}
          <Link href={Routes.auth.signup.path}>Sign up</Link>
        </span>
      </div>
    </div>
  );
};
