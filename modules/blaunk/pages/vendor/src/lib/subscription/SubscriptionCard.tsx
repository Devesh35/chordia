'use client';

import { capitalize } from '@li/config/utils';
import styles from './subscription.module.css';
import { Button, Modal } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import clsx from 'clsx';
import { ClassName } from '@li/types/shared';
import { useState } from 'react';
import { NewSubscription } from './NewSubscription';
import { ProductType, SubscriptionStatus } from '@md/blaunk/config';

type SubscriptionCardProps = {
  id: ProductType;
  icon: string;
  name: string;
  status?: SubscriptionStatus;
} & Partial<ClassName>;

export const SubscriptionCard = ({
  id,
  icon,
  name,
  status = 'inactive',
  className,
}: SubscriptionCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Subscription"
      >
        <NewSubscription id={id} />
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
