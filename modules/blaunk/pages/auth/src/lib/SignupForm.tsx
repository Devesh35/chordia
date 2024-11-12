'use client';

import { Button, EmailInput, Labeled, Link, PasswordInput, PhoneInput } from '@li/design/elements';
import { PhoneValue } from '@li/types/design';
import { CountryCodeOptions, Routes } from '@md/blaunk/config';
import { useState } from 'react';
import styles from './common.module.css';
import { Form } from 'react-bootstrap';

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

  const [selectedOption, setSelectedOption] = useState<string>('individual');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Sign up</div>
      <Form>
        <Form.Group className="d-flex align-items-center justify-content-center mt-3">
          <Form.Check
            type="radio"
            label="Individual"
            name="radioOptions"
            value="individual"
            checked={selectedOption === 'individual'}
            onChange={handleChange}
            className="me-3" 
          />
          <Form.Check
            type="radio"
            label="Business"
            name="radioOptions"
            value="business"
            checked={selectedOption === 'business'}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
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
