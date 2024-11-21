'use client';

import { Button, EmailInputVerify, Labeled, Link, PasswordInput, PhoneInput } from '@li/design/elements';
import { PhoneValue } from '@li/types/design';
import { CountryCodeOptions, Routes } from '@md/blaunk/config';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
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
  const [email, setEmail] = useState<string>('');

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
            label="Vendor"
            name="radioOptions"
            value="vendor"
            checked={selectedOption === 'vendor'}
            onChange={handleChange}
            className="me-3"
          />
          <Form.Check
            type="radio"
            label="B2B"
            name="radioOptions"
            value="b2b"
            checked={selectedOption === 'b2b'}
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
          hasOTP
        />
      </Labeled>
      <Labeled label="Email">
        <EmailInputVerify
          placeholder="Enter your email"
          onSendOTP={sendOTP}
          onVerifyOTP={verifyOTP}
          value={email}
          onChange={setEmail}
          hasOTP
        />
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
