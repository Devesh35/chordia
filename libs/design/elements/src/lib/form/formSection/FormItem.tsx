'use client';

import { useMedia } from '@li/design/hooks';
import { FormSectionItem } from '@li/types/design';
import clsx from 'clsx';
import { Labeled } from '../../decorators';
import formStyles from '../form.module.css';
import { useFormConfig } from './FormConfigProvider';
import { FormItemElement } from './FormItemElement';
import { FormItemSubMenu } from './FormItemSubMenu';
import styles from './form.module.css';
import { blockFormItemStyles, inlineFormItemStyles } from './utils';

export const FormItem = <D,>(props: FormSectionItem<D>) => {
  const { isEdit, hasBG } = useFormConfig();
  const isMobile = useMedia();

  if (props.type === 'select-submenu') {
    return <FormItemSubMenu {...props} />;
  }

  return (
    <Labeled
      label={`${props.label}:`}
      inline={!props.block}
      className={clsx(props.block ? blockFormItemStyles : inlineFormItemStyles, styles['item-label'], {
        [styles['item-label-bg']]: hasBG,
        [styles['item-label-inline']]: !props.block,
        [styles['item-column']]: isMobile,
      })}
    >
      {isEdit && !props.isReadOnly ? (
        <FormItemElement {...props} />
      ) : (
        <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
      )}
    </Labeled>
  );
};
