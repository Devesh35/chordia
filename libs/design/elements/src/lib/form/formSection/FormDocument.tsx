'use client';

import { withCondition } from '@li/design/enhancers';
import { FormDocument as FD } from '@li/types/design';
import clsx from 'clsx';
import { ChangeEvent, useState } from 'react';
import { Input } from '../Input';
import { useFormConfig } from './FormConfigProvider';
import styles from './form.module.css';

export const FormDocument = <D,>({ placeholder, ...props }: FD<D>) => {
  const { isEdit, hasBG } = useFormConfig();

  const [imageSrc, setImageSrc] = useState<string>();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = (e) => {
        if (e.target?.result) setImageSrc(`${e.target.result}`);
      };

      reader.readAsDataURL(file);
    } else {
      setImageSrc(undefined);
    }
  };

  return (
    <div
      className={clsx(styles.document, {
        [styles.required]: props.required,
        [styles['document-bg']]: hasBG,
      })}
    >
      {withCondition(isEdit)(
        <Input
          type="file"
          accept="image/*"
          className={styles['document-input']}
          onChange={handleImageChange}
        />,
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
        {imageSrc ? (
          <img
            src={imageSrc}
            alt="document"
            className={styles['document-image']}
          />
        ) : typeof placeholder === 'string' ? (
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
