'use client';

import { grid } from '@li/config/design';
import { FormItemElement } from './FormItemElement';
import clsx from 'clsx';
import { FormSectionItem } from '@li/types/design';
import { Labeled } from '../../decorators';
import { useFormConfig } from './FormConfigProvider';
import styles from './form.module.css';
import formStyles from '../form.module.css';

export const FormItem = (props: FormSectionItem) => {
  const { isEdit, hasBG } = useFormConfig();

  return (
    <Labeled
      label={`${props.label}:`}
      inline
      className={clsx(
        grid[`col-4`],
        grid['col-t-4'],
        grid['col-m-6'],
        styles['item-label'],
        { [styles['item-label-bg']]: hasBG },
      )}
    >
      {isEdit && !props.isNotEditable ? (
        <FormItemElement {...props} />
      ) : (
        <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
      )}
    </Labeled>
  );
};
