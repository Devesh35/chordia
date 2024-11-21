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
import inputStyles from './input-select.module.css';
import styles from './phone-input.module.css';

type Props = {
  onSendOTP?: () => Promise<void>;
  onVerifyOTP?: () => Promise<void>;
  value: string;
  onChange: (value: string) => void;
  hasOTP?: boolean;
};

type Status = 'verified' | 'sent' | 'not-sent' | 'loading';

export const EmailInputVerify = ({
  onSendOTP,
  onVerifyOTP,
  value,
  onChange,
  hasOTP = false,
  ...props
}: Omit<InputProps, 'value' | 'onChange'> & Props) => {
  const [status, setStatus] = useState<Status>('not-sent');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onUpdate = (update: string | SelectItemElement | undefined) => {
    if (!update) return;
    if (typeof update === 'string') return onChange(update);
    return onChange(update.id);
  };

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
          <Button onClick={() => setIsModalOpen(false)} variant="text" key="cancel">
            Cancel
          </Button>,
          <Button
            key="verify"
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
          <Input className={styles['otp-input']} type="number" placeholder="OTP" />
        </Labeled>
      </Modal>
      <div
        style={{
          width: '24px',
        }}
      />
      <Input
        {...props}
        placeholder="Enter your email"
        value={value || ''}
        onChange={(e) => onUpdate(e.target.value)}
        className={clsx(inputStyles.input, styles['phone-input'])}
        type="email"
      />
      {withCondition(hasOTP)(
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
        </Button>,
      )}

      {withCondition(status === 'sent')(
        <div className={clsx(styles.resend, gs.clickable)} onClick={onOTPSend}>
          Re-send OTP
        </div>,
      )}
    </div>
  );
};
