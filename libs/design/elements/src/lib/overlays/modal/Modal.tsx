'use client';

import React, { ReactNode } from 'react';
import styles from './modal.module.css';
import { CircleClose } from '@li/design/icons';
import { gs } from '@li/config/design';
import { ReactChildren } from '@li/types/shared';

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  title?: ReactNode;
  actions?: ReactNode | ReactNode[];
} & ReactChildren;

export const Modal = ({
  isOpen,
  onClose,
  title,
  actions,
  children,
}: ModalProps) => {
  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={styles.wrapper} onClick={onClose}>
      <dialog open={isOpen} className={styles.dialog} onClick={stopPropagation}>
        <header className={styles.header}>
          <div className={styles.title}>{title}</div>
          <CircleClose
            className={gs.clickable}
            fill="var(--gray300)"
            onClick={onClose}
          />
        </header>
        <main className={styles.main}>{children}</main>
        <footer className={styles.actions}>{actions}</footer>
      </dialog>
    </div>
  );
};
