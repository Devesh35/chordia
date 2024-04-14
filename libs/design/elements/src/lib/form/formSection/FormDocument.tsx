'use client';

import { withCondition } from '@li/design/enhancers';
import { FormDocument as FD } from '@li/types/design';
import clsx from 'clsx';
import { Input } from '../Input';
import { useFormConfig } from './FormConfigProvider';
import styles from './form.module.css';

export const FormDocument = <D,>({ placeholder, ...props }: FD<D>) => {
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
        {typeof placeholder === 'string' ? (
          <span>{placeholder}</span>
        ) : (
          <ul className={styles.ul}>
            {placeholder?.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
