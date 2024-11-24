import { Button, Input, Labeled, Link, PasswordInput } from '@li/design/elements';
import { Routes } from '@md/blaunk/config';
import styles from './common.module.css';

export const LoginForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Login</div>
      <Labeled label="Email/Mobile">
        <Input placeholder="Enter your email/mobile" type="email" />
      </Labeled>
      <Labeled label="Password">
        <PasswordInput placeholder="Enter your password" />
      </Labeled>
      <div className={styles.action}>
        <Link prefetch href={Routes.auth.forgot.path} className={styles.forgot}>
          Reset password?
        </Link>
        <Button className={styles.login}>
          <Link prefetch href={Routes.home.bgt.path}>
            Login
          </Link>
        </Button>
        <span>
          Don't have an account?{' '}
          <Link prefetch href={Routes.auth.signup.path}>
            Sign up
          </Link>
        </span>
      </div>
    </div>
  );
};
