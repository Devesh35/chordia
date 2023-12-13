'use client';
import { DownFilled } from '@li/design/icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '../presentational';
import styles from './accordion.module.css';
import clsx from 'clsx';

export type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  childHeight?: number;
  initialOpen?: boolean;
  updateParentHeight?: (height: number) => void;
};

export const Accordion = ({
  title,
  children,
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
    <div className={styles.wrapper}>
      <div className={styles.header} onClick={toggleAccordion}>
        <span className={styles.title}>{title}</span>
        <div
          className={clsx(styles.icon, {
            [styles['icon-active']]: isOpen,
          })}
        >
          <DownFilled />
        </div>
      </div>
      {isOpen ? <Divider color="var(--secondarydark)" /> : null}
      <div
        className={styles['content-wrapper']}
        style={{ height: isOpen ? contentHeight : '0' }}
        ref={contentRef}
      >
        {children}
      </div>
      <Divider color="var(--secondarydark)" />
    </div>
  );
};
