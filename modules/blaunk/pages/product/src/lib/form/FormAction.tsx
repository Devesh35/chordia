'use client';

import { Button, Checkbox } from '@li/design/elements';
import { CancelForm } from './CancelForm';
import styles from './common.module.css';
import { useState } from 'react';

export const FormAction = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className={styles['action-wrapper']}>
      <Checkbox
        label="I have read all the terms & condition of B2B Blaunk trade policy"
        className={styles.policy}
        onChange={setIsChecked}
      />
      <div className={styles.action}>
        <CancelForm />
        <Button isDisabled={!isChecked}>Save</Button>
      </div>
    </div>
  );
};
