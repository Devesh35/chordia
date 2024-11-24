'use client';

import { capitalize } from '@li/config/utils';
import { Button, Modal } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import { ClassName } from '@li/types/shared';
import { SubscriptionStatus } from '@md/blaunk/config';
import clsx from 'clsx';
import { useState } from 'react';
import { NewSubscription } from './NewSubscription';
import { SubscriptionProduct } from './Subscription';
import styles from './subscription.module.css';

type SubscriptionCardProps = {
  id: SubscriptionProduct;
  icon: string;
  name: string;
  status?: SubscriptionStatus;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui?: any;
} & Partial<ClassName>;

export const SubscriptionCard = ({ id, icon, name, status = 'inactive', className, ui }: SubscriptionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Subscription">
        <NewSubscription id={id} ui={ui} />
      </Modal>

      <div
        className={clsx(styles.card, className, {
          [styles['card-disabled']]: status === 'disabled',
        })}
        onClick={() => setIsOpen(true)}
      >
        <div className={clsx(styles['card-status'], styles[status])}>
          <div className={clsx(styles['status-icon'], styles[status])} />
          {capitalize(status)}
        </div>
        <img src={icon} alt={name} className={styles['card-icon']} />
        <div className={styles['card-name']}>{name}</div>
        <Button isDisabled={status === 'disabled'}>
          {withConditionCase(status)({
            active: 'Cancel',
            pending: 'In Progress',
            expired: 'Re-new',
            inactive: 'Subscribe',
            disabled: 'Unavailable',
          })}
        </Button>
      </div>
    </>
  );
};
