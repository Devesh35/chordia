'use client';

import { FormSectionItem, SelectItem } from '@li/types/design';
import clsx from 'clsx';
import { useState } from 'react';
import { Labeled } from '../../decorators';
import formStyles from '../form.module.css';
import { useFormConfig } from './FormConfigProvider';
import { FormItemElement } from './FormItemElement';
import styles from './form.module.css';
import { blockFormItemStyles, inlineFormItemStyles } from './utils';

export const FormItemSubMenu = <D,>(props: FormSectionItem<D>) => {
  const { isEdit, hasBG } = useFormConfig();
  const [superSelect, onSuperSelect] = useState<SelectItem>();

  // using reach-hook-form would have been a lot better
  if (props.type === 'select-submenu') {
    const onSuperSelectChange = (e?: SelectItem) => {
      console.log(e);

      onSuperSelect(e);
      props.onChange?.(e);
    };

    const mainSelect = (
      <Labeled
        label={`${props.label}:`}
        inline={!props.block}
        className={clsx(props.block ? blockFormItemStyles : inlineFormItemStyles, styles['item-label'], {
          [styles['item-label-bg']]: hasBG,
          [styles['item-label-inline']]: !props.block,
        })}
      >
        {isEdit && !props.isReadOnly ? (
          <FormItemElement {...props} type="select" onChange={onSuperSelectChange} />
        ) : (
          <span className={formStyles['item-wrapper']}>{props.placeholder}</span>
        )}
      </Labeled>
    );

    const subSelect = (
      <Labeled
        label={`${props.sub.label}:`}
        inline={!props.block}
        className={clsx(props.block ? blockFormItemStyles : inlineFormItemStyles, styles['item-label'], {
          [styles['item-label-bg']]: hasBG,
          [styles['item-label-inline']]: !props.block,
        })}
      >
        {isEdit && !props.isReadOnly ? (
          <FormItemElement
            {...props}
            {...props.sub}
            type="select"
            options={
              superSelect?.id
                ? props.optionsSub[superSelect.id]
                : [
                    {
                      id: 'no-parent',
                      item: `Select ${props.label} first`,
                      isDisabled: true,
                    },
                  ]
            }
          />
        ) : (
          <span className={formStyles['item-wrapper']}>{props.sub.placeholder}</span>
        )}
      </Labeled>
    );

    return props.reverseOrder ? (
      <>
        {subSelect}
        {mainSelect}
      </>
    ) : (
      <>
        {mainSelect}
        {subSelect}
      </>
    );
  }
};
