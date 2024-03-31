'use client';

import { grid } from '@li/config/design';
import { FormSectionItem } from '@li/types/design';
import clsx from 'clsx';
import { Labeled } from '../../decorators';
import formStyles from '../form.module.css';
import { useFormConfig } from './FormConfigProvider';
import { FormItemElement } from './FormItemElement';
import styles from './form.module.css';

export const FormItem = <D,>(props: FormSectionItem<D>) => {
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
      {isEdit && !props.isReadOnly ? (
        <FormItemElement {...props} />
      ) : (
        <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
      )}
    </Labeled>
  );
};
