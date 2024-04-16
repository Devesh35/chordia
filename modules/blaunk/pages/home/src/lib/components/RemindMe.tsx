'use client';

import { Button, Checkbox, Input, Modal } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { useState } from 'react';
import styles from './report-issue.module.css';

type Props = {
  name: string;
  hasBulk?: boolean;
};

export const RemindMe = ({ name, hasBulk }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal isOpen={open} onClose={() => setOpen(false)} title={`Remind me`}>
        <div className={styles.wrapper}>
          <div className={styles.name}>{name}</div>
          Please tell us date
          <Input type="date" />
          {withCondition(hasBulk)(<Checkbox label="Bulk booking" />)}
          <Button variant="primary">Submit</Button>
        </div>
      </Modal>
      <Button variant="error" onClick={() => setOpen(true)}>
        Remind me
      </Button>
    </>
  );
};
