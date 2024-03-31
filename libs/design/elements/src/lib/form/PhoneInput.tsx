'use client';

import { gs } from '@li/config/design';
import { withCondition, withConditionCase } from '@li/design/enhancers';
import { SelectItemElement } from '@li/types/design';
import clsx from 'clsx';
import { useState } from 'react';
import { Labeled } from '../decorators';
import { Modal } from '../overlays';
import { Loader } from '../status';
import { Button } from './Button';
import { Input, InputProps } from './Input';
import { Select } from './Select';
import inputStyles from './input-select.module.css';
import styles from './phone-input.module.css';

type Props = {
  countryCodes: SelectItemElement[];
  onSendOTP?: () => Promise<void>;
  onVerifyOTP?: () => Promise<void>;
};

type Status = 'verified' | 'sent' | 'not-sent' | 'loading';

export const PhoneInput = ({
  countryCodes,
  onSendOTP,
  onVerifyOTP,
  ...props
}: InputProps & Props) => {
  const [status, setStatus] = useState<Status>('not-sent');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState('');

  const onOTPSend = () => {
    if (!onSendOTP) return;
    setStatus('loading');
    onSendOTP()
      .then(() => setStatus('sent'))
      .catch(() => {
        setStatus('not-sent');
        alert("Couldn't send OTP");
      });
  };

  const onOTPVerify = () => {
    if (!onVerifyOTP) return;
    setStatus('loading');
    onVerifyOTP()
      .then(() => {
        setStatus('verified');
        setIsModalOpen(false);
      })
      .catch(() => {
        setStatus('sent');
        alert("Couldn't verify OTP");
      });
  };

  return (
    <div className={clsx(inputStyles.wrapper, styles.wrapper)}>
      <Modal
        isOpen={isModalOpen}
        title="Enter OTP"
        onClose={() => setIsModalOpen(false)}
        actions={[
          <Button onClick={() => setIsModalOpen(false)} variant="text">
            Cancel
          </Button>,
          <Button
            className={styles['modal-button']}
            onClick={withConditionCase<() => void>(status)({
              sent: onOTPVerify,
              verified: () => setIsModalOpen(false),
            })}
          >
            {withConditionCase(status)({
              'not-sent': 'Send OTP',
              loading: <Loader size="24px" variant="secondary" />,
              sent: 'Verify OTP',
              verified: 'Verified',
            })}
          </Button>,
        ]}
      >
        <Labeled label="Enter OTP">
          <Input
            className={styles['otp-input']}
            type="number"
            placeholder="OTP"
          />
        </Labeled>
      </Modal>
      <Select
        className={clsx(inputStyles.select, styles['phone-select'])}
        defaultItem={countryCodes[0]}
        options={countryCodes}
      />
      <Input
        className={clsx(inputStyles.input, styles['phone-input'])}
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value.slice(0, 10))}
        {...props}
      />
      <Button
        className={styles['otp-button']}
        onClick={withConditionCase<() => void>(status)({
          'not-sent': onOTPSend,
          sent: () => setIsModalOpen(true),
        })}
      >
        {withConditionCase(status)({
          'not-sent': 'Send OTP',
          loading: <Loader size="24px" variant="secondary" />,
          sent: 'Verify OTP',
          verified: 'Verified',
        })}
      </Button>

      {withCondition(status === 'sent')(
        <div className={clsx(styles.resend, gs.clickable)} onClick={onOTPSend}>
          Re-send OTP
        </div>,
      )}
    </div>
  );
};
