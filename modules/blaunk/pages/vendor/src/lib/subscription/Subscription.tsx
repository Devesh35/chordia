import { grid } from '@li/config/design';
import {
  ProductType,
  SubscriptionStatus,
  subscriptionConfig,
} from '@md/blaunk/config';
import clsx from 'clsx';
import { SubscriptionCard } from './SubscriptionCard';
import styles from './subscription.module.css';

export type SubscriptionProduct = ProductType | 'requirement';

const dummy = [
  {
    id: 'bgt',
    status: 'inactive' as const,
  },
  {
    id: 'store',
    status: 'inactive' as const,
  },
  {
    id: 'boutique',
    status: 'inactive' as const,
  },
  {
    id: 'tour',
    status: 'inactive' as const,
  },
  {
    id: 'cake',
    status: 'inactive' as const,
  },
  {
    id: 'requirement',
    status: 'inactive' as const,
  },
].reduce((a, c) => ({ ...a, [c.id]: c.status }), {}) as Record<
  SubscriptionProduct,
  SubscriptionStatus
>;

export const Subscription = () => {
  return (
    <div className={clsx(grid.grid, styles.grid, styles['grid-wrapper'])}>
      {Object.values(subscriptionConfig).map((sub) => (
        <SubscriptionCard
          status={dummy[sub.id]}
          {...sub}
          className={grid['col-3']}
          key={sub.id}
        />
      ))}
    </div>
  );
};
