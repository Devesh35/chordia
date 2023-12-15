import { Button, Labeled, PasswordInput } from '@li/design/elements';
import styles from './common.module.css';

export const ResetPassForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Reset Password</div>
      <Labeled label="Current password">
        <PasswordInput placeholder="Enter your current password" />
      </Labeled>
      <Labeled label="New Password">
        <PasswordInput placeholder="Enter your new password" />
      </Labeled>
      <Labeled label="Confirm password">
        <PasswordInput placeholder="Confirm your password" />
      </Labeled>
      <div className={styles.action}>
        <Button>Reset</Button>
      </div>
    </div>
  );
};
