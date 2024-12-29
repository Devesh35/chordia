'use client';

import { gs, sbs } from '@li/config/design';
import { CircleClose } from '@li/design/icons';
import { ClassName, ReactChildren } from '@li/types/shared';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import styles from './modal.module.css';

export type ModalBaseProps = {
  isOpen: boolean;
  onClose?: () => void;
};

type ModalProps = ModalBaseProps & {
  title?: ReactNode;
  actions?: ReactNode | ReactNode[];
  hideHeader?: boolean;
} & ReactChildren &
  Partial<ClassName>;

export const Modal = ({ isOpen, onClose, title, actions, children, hideHeader, className }: ModalProps) => {
  if (!isOpen) return null;

  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className={clsx(styles.wrapper, className)} onClick={onClose}>
      <dialog open={isOpen} className={clsx(styles.dialog)} onClick={stopPropagation}>
        {!hideHeader && (
          <header className={styles.header}>
            <div className={styles.title}>{title}</div>
            <CircleClose className={gs.clickable} fill="var(--gray300)" onClick={onClose} />
          </header>
        )}
        <main className={clsx(styles.main, sbs.dark)}>{children}</main>
        <footer className={styles.actions}>{actions}</footer>
      </dialog>
    </div>
  );
};
