import { Labeled, formStyles } from '@li/design/elements';
import { FormSectionItem } from '../formTypes';
import { grid } from '@li/config/design';
import { FormItemElement } from './FormItemElement';
import fs from './form.module.css';
import clsx from 'clsx';

export const FormItem = ({
  isEdit,
  ...props
}: {
  isEdit: boolean;
} & FormSectionItem) => (
  <Labeled
    label={`${props.label}:`}
    inline
    className={clsx(
      grid[`col-4`],
      grid['col-t-4'],
      grid['col-m-6'],
      fs['item-label'],
    )}
  >
    {isEdit && !props.isNotEditable ? (
      <FormItemElement {...props} />
    ) : (
      <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
    )}
  </Labeled>
);
