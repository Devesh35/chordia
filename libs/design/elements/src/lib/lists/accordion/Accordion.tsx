'use client';
import { withCondition } from '@li/design/enhancers';
import { DownFilled } from '@li/design/icons';
import { ClassName, ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '../../presentational';
import styles from './accordion.module.css';

export type AccordionProps = {
  title: React.ReactNode;
  childHeight?: number;
  initialOpen?: boolean;
  updateParentHeight?: (height: number) => void;
  variant?: 'primary' | 'secondary';
} & ReactChildren &
  Partial<ClassName>;

export const Accordion = ({
  title,
  children,
  className,
  childHeight = 0,
  initialOpen = false,
  updateParentHeight,
  variant = 'secondary',
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) setContentHeight(contentRef.current.scrollHeight + childHeight);
  }, [children, childHeight]);

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
    updateParentHeight?.(contentHeight);
  }, [contentHeight, updateParentHeight, setIsOpen]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <header
        className={clsx(styles.header, {
          [styles['header-primary']]: variant === 'primary',
        })}
        onClick={toggleAccordion}
      >
        <span className={styles.title}>{title}</span>
        <div
          className={clsx(styles.icon, {
            [styles['icon-active']]: isOpen,
          })}
        >
          <DownFilled color={variant === 'primary' ? 'var(--onprimaryaccent)' : 'var(--onsecondaryaccent)'} />
        </div>
      </header>
      {withCondition(isOpen)(<Divider color="var(--secondarydark)" />)}
      {withCondition(isOpen)(
        <main className={styles['content-wrapper']} ref={contentRef}>
          {children}
        </main>,
      )}
      <Divider color="var(--secondarydark)" />
    </div>
  );
};
