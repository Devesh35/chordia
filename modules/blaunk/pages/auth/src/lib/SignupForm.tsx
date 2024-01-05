import {
  Button,
  Input,
  Labeled,
  Link,
  PasswordInput,
  PhoneInput,
} from '@li/design/elements';
import styles from './common.module.css';
import { CountryCodeOptions, Routes } from '@md/blaunk/config';

export const SignupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign up</div>
      <Labeled label="Phone">
        <PhoneInput
          placeholder="Enter your phone"
          countryCodes={CountryCodeOptions}
        />
      </Labeled>
      <Labeled label="Email">
        <Input placeholder="Enter your email" type="email" />
      </Labeled>
      <Labeled label="Password">
        <PasswordInput placeholder="Enter your password" />
      </Labeled>
      <Labeled label="Confirm password">
        <PasswordInput placeholder="Confirm your password" />
      </Labeled>
      <div className={styles.action}>
        <Button>Signup</Button>
        <span>
          Already an user? <Link href={Routes.auth.login.path}>Login</Link>
        </span>
      </div>
    </div>
  );
};
