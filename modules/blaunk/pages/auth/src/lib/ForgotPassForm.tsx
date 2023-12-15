import { Button, Input, Labeled, Link } from '@li/design/elements';
import styles from './common.module.css';
import { Routes } from '@md/blaunk/config';

export const ForgotPassForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Forgot Password</div>
      <Labeled label="Email">
        <Input placeholder="Enter your email" type="email" />
      </Labeled>
      <div className={styles.action}>
        <Button>Send reset email</Button>
        <span>
          Remember password? <Link href={Routes.auth.login.path}>Login</Link>
        </span>
      </div>
    </div>
  );
};
