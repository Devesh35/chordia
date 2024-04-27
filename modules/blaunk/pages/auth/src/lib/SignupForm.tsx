'use client';

import {
  Button,
  EmailInput,
  Labeled,
  Link,
  PasswordInput,
  PhoneInput,
} from '@li/design/elements';
import { PhoneValue } from '@li/types/design';
import { CountryCodeOptions, Routes } from '@md/blaunk/config';
import { useState } from 'react';
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
  const [phone, setPhone] = useState<PhoneValue>({
    country: CountryCodeOptions[0],
    number: '',
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign up</div>
      <Labeled label="Phone">
        <PhoneInput
          placeholder="Enter your phone"
          countryCodes={CountryCodeOptions}
          onSendOTP={sendOTP}
          onVerifyOTP={verifyOTP}
          value={phone}
          onChange={setPhone}
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
