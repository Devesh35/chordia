'use client';

import { withCondition } from '@li/design/enhancers';
import styles from './form.module.css';
import clsx from 'clsx';
import { Input } from '../Input';
import { FormDocument as FD } from '@li/types/design';
import { useFormConfig } from './FormConfigProvider';

export const FormDocument = <D,>(props: FD<D>) => {
  const { isEdit, hasBG } = useFormConfig();

  return (
    <div
      className={clsx(styles.document, {
        [styles.required]: props.required,
        [styles['document-bg']]: hasBG,
      })}
    >
      {withCondition(isEdit)(
        <Input type="file" className={styles['document-input']} />,
      )}
      <div className={styles['document-label']}>{props.label}</div>
      <div
        className={clsx(styles['document-content'], {
          [styles['document-content-bg']]: hasBG,
        })}
      >
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
