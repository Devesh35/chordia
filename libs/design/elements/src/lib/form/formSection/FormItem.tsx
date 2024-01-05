import { grid } from '@li/config/design';
import { FormItemElement } from './FormItemElement';
import styles from './form.module.css';
import formStyles from '../form.module.css';
import clsx from 'clsx';
import { FormSectionItem } from '@li/types/design';
import { Labeled } from '../../decorators';

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
      styles['item-label'],
    )}
  >
    {isEdit && !props.isNotEditable ? (
      <FormItemElement {...props} />
    ) : (
      <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
    )}
  </Labeled>
);
