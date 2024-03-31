'use client';

import {
  Button,
  EmailInput,
  Labeled,
  Link,
  PasswordInput,
  PhoneInput,
} from '@li/design/elements';
import { CountryCodeOptions, Routes } from '@md/blaunk/config';
import styles from './common.module.css';

const sendOTP = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const verifyOTP = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

export const SignupForm = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign up</div>
      <Labeled label="Phone">
        <PhoneInput
          placeholder="Enter your phone"
          countryCodes={CountryCodeOptions}
          onSendOTP={sendOTP}
          onVerifyOTP={verifyOTP}
        />
      </Labeled>
      <Labeled label="Email">
        <EmailInput />
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
