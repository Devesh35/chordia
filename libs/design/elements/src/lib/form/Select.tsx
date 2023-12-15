'use client';

import { DownFilled } from '@li/design/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './select.module.css';
import { sbs } from '@li/config/design';

export type SelectItem<K extends string = string> = {
  id: K;
  item: React.ReactNode;
};

export type SelectProps<K extends string = string> = {
  options: SelectItem<K>[];
  className?: string;
  placeholder?: string;
  Header?: React.ReactNode;
  defaultItem?: SelectItem<K>;
  onChange?: (item?: SelectItem<K>) => void;
};

export const Select = <K extends string = string>({
  Header,
  options,
  onChange,
  className,
  defaultItem,
  placeholder,
}: SelectProps<K>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<SelectItem<K> | undefined>(
    defaultItem,
  );
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (contentRef.current)
      setContentHeight(Math.min(400, contentRef.current.scrollHeight));
  });

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [setIsOpen]);

  const onSelect = (item: SelectItem<K>) => {
    onChange?.(item);
    setSelected(item);
    toggleAccordion();
  };

  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.header} onClick={toggleAccordion}>
        {Header ? (
          Header
        ) : ( 
          <span
            className={clsx(styles.title, {
              [styles['title-selected']]: !!selected?.id,
            })}
          >
            {selected?.item || placeholder || 'Select'}
          </span>
        )}
        <div className={clsx(styles.icon, { [styles['icon-active']]: isOpen })}>
          <DownFilled />
        </div>
      </div>
      <div
        className={clsx(styles['option-wrapper'], sbs.none)}
        style={{ height: isOpen ? contentHeight : '0' }}
        ref={contentRef}
      >
        {options.map((o) => (
          <div
            className={clsx(styles.item, styles.option)}
            onClick={() => onSelect(o)}
            key={o.id}
          >
            {o.item}
          </div>
        ))}
      </div>
    </div>
  );
};
