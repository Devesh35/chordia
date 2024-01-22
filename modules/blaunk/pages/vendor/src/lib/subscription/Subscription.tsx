import {
  ProductType,
  SubscriptionStatus,
  subscriptionConfig,
} from '@md/blaunk/config';
import { SubscriptionCard } from './SubscriptionCard';
import { grid } from '@li/config/design';
import clsx from 'clsx';
import styles from './subscription.module.css';

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
].reduce((a, c) => ({ ...a, [c.id]: c.status }), {}) as Record<
  ProductType,
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
