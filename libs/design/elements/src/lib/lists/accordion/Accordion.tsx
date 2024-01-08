'use client';
import { DownFilled } from '@li/design/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '../../presentational';
import { ClassName, ReactChildren } from '@li/types/shared';
import styles from './accordion.module.css';
import clsx from 'clsx';

export type AccordionProps = {
  title: React.ReactNode;
  childHeight?: number;
  initialOpen?: boolean;
  updateParentHeight?: (height: number) => void;
} & ReactChildren &
  Partial<ClassName>;

export const Accordion = ({
  title,
  children,
  className,
  childHeight = 0,
  initialOpen = false,
  updateParentHeight,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current)
      setContentHeight(contentRef.current.scrollHeight + childHeight);
  }, [children, childHeight]);

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
    updateParentHeight?.(contentHeight);
  }, [contentHeight, updateParentHeight, setIsOpen]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <header className={styles.header} onClick={toggleAccordion}>
        <span className={styles.title}>{title}</span>
        <div
          className={clsx(styles.icon, {
            [styles['icon-active']]: isOpen,
          })}
        >
          <DownFilled fill="var(--onsecondaryaccent)" />
        </div>
      </header>
      {isOpen ? <Divider color="var(--secondarydark)" /> : null}
      <main
        className={styles['content-wrapper']}
        style={{ height: isOpen ? contentHeight : '0' }}
        ref={contentRef}
      >
        {children}
      </main>
      <Divider color="var(--secondarydark)" />
    </div>
  );
};
