import { grid } from '@li/config/design';
import { ProductType, SubscriptionStatus, subscriptionConfig } from '@md/blaunk/config';
import clsx from 'clsx';
import { SubscriptionCard } from './SubscriptionCard';
import styles from './subscription.module.css';

export type SubscriptionProduct = ProductType | 'requirement';

const dummy: Record<SubscriptionProduct, SubscriptionStatus> = {
  bgt: 'inactive',
  store: 'inactive',
  boutique: 'inactive',
  tour: 'inactive',
  cake: 'inactive',
  requirement: 'inactive',
};

export const Subscription = () => {
  return (
    <div className={clsx(grid.grid, styles.grid, styles['grid-wrapper'])}>
      {Object.values(subscriptionConfig).map((sub) => (
        <SubscriptionCard status={dummy[sub.id]} {...sub} className={grid['col-3']} key={sub.id} />
      ))}
    </div>
  );
};
