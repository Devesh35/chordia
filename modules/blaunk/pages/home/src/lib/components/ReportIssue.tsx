'use client';

import { Button, Modal, Select } from '@li/design/elements';
import styles from './report-issue.module.css';
import { useState } from 'react';
import { IssueOptions } from '@md/blaunk/config';

type Props = {
  name: string;
};

export const ReportIssue = ({ name }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Report an issue`}
      >
        <div className={styles.wrapper}>
          <div className={styles.name}>{name}</div>
          Please tell us about the issue
          <Select
            options={IssueOptions}
            placeholder="Which part of the page?"
          />
          <Button variant="primary">Submit</Button>
        </div>
      </Modal>
      <Button variant="error" onClick={() => setOpen(true)}>
        Report an issue
      </Button>
    </>
  );
};
