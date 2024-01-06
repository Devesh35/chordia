'use client';

import { DownFilled } from '@li/design/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './select.module.css';
import formStyles from './form.module.css';
import { sbs } from '@li/config/design';
import { SelectItem } from '@li/types/design';
import { Divider } from '../presentational';
import { isSelectItemDivider } from '@li/config/utils';

export type SelectProps<K extends string, S extends SelectItem<K>> = {
  options: S[];
  className?: string;
  placeholder?: string;
  Header?: React.ReactNode;
  defaultItem?: S;
  onChange?: (item?: S) => void;
  maxHeight?: number | true;
};

export const Select = <K extends string, S extends SelectItem<K>>({
  Header,
  options,
  onChange,
  className,
  defaultItem,
  placeholder,
  maxHeight = 400,
}: SelectProps<K, S>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<S | undefined>(defaultItem);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (contentRef.current)
      setContentHeight(
        Math.min(
          maxHeight === true ? Infinity : maxHeight,
          contentRef.current.scrollHeight,
        ),
      );
  });

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const onSelect = (item: S) => {
    onChange?.(item);
    setSelected(item);
    toggleAccordion();
  };

  return (
    <div
      className={clsx(formStyles['item-wrapper'], styles.wrapper, className)}
    >
      <header className={styles.header} onClick={toggleAccordion}>
        {Header ? (
          Header
        ) : (
          <span
            className={clsx(styles.title, {
              [styles['title-selected']]: !!selected?.id,
            })}
          >
            {selected && !isSelectItemDivider(selected)
              ? selected.item
              : placeholder || 'Select'}
          </span>
        )}
        <div className={clsx(styles.icon, { [styles['icon-active']]: isOpen })}>
          <DownFilled fill="var(--gray300)" />
        </div>
      </header>
      <main
        className={clsx(styles['option-wrapper'], sbs.none)}
        style={{ height: isOpen ? contentHeight : '0' }}
        ref={contentRef}
      >
        {options.map((o, i) =>
          isSelectItemDivider(o) ? (
            <Divider key={i} />
          ) : (
            <div
              className={clsx(styles.item, styles.option, {
                [styles['option-disabled']]: o.isDisabled,
              })}
              onClick={() => (o.isDisabled ? {} : onSelect(o))}
              key={o.id}
            >
              {o.item}
            </div>
          ),
        )}
      </main>
    </div>
  );
};
