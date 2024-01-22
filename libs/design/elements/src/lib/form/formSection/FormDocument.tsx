'use client';

import { withCondition } from '@li/design/enhancers';
import styles from './form.module.css';
import clsx from 'clsx';
import { Input } from '../Input';
import { FormDocument as FD } from '@li/types/design';
import { useFormConfig } from './FormConfigProvider';

export const FormDocument = (props: FD) => {
  const { isEdit, hasBG } = useFormConfig();

  return (
    <div
      className={clsx(styles.document, {
        [styles.required]: props.required,
        [styles['item-label-bg']]: hasBG,
      })}
    >
      {withCondition(isEdit)(
        <Input type="file" className={styles['document-input']} />,
      )}
      <div className={styles['document-label']}>{props.label}</div>
      <div className={styles['document-content']}>
        {withCondition(isEdit)(
          <label className={styles['document-update']}>Click to update</label>,
        )}
        {props.placeholder?.map((p) => (
          <li>{p}</li>
        ))}
      </div>
    </div>
  );
};
