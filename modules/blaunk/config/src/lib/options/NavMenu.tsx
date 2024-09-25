import { Profile } from '@li/design/components';
import { SelectItem } from '@li/types/design';
import { getRandomImagesArray } from '../utils';
import { Routes } from './Routes';

const src = getRandomImagesArray(1)(64, 64)[0];

export type NavMenuItem = SelectItem & { path?: string };

export const NavMenuItems: NavMenuItem[] = [
  {
    id: 'profile-card',
    item: <Profile image={src} name="Pravin Chordia" phone="+91 9876543210" wallet={100} />,
    path: Routes.account.profile.path,
  },
  { id: 'profile', item: 'Profile', path: Routes.account.profile.path },
  {
    id: 'subscription',
    item: 'Subscription',
    path: Routes.vendor.subscription.path,
  },
  { id: 'divider' },
  { id: 'orders', item: 'Orders', path: Routes.account.orders.path },
  { id: 'wishlist', item: 'Wishlist', path: Routes.account.wishlist.path },
  { id: 'ledger', item: 'Ledger', path: Routes.account.ledger.path },
  { id: 'wallet', item: 'Wallet', path: Routes.legacy.wallet.path },
  { id: 'divider' },
  {
    id: 'become_seller',
    item: 'Become a seller',
    path: Routes.vendor.register.path,
  },
  { id: 'dashboard', item: 'Dashboard', path: Routes.vendor.dashboard.path },
  { id: 'product', item: 'Products', path: Routes.product.path },
  { id: 'advertisement', item: 'Advertisement', path: Routes.vendor.advertisement.path },
  { id: 'shipments', item: 'Shipments', path: Routes.vendor.shipments.path },
  {
    id: 'requirement',
    item: 'Search buyer',
    path: Routes.vendor.requirement.path,
  },
  { id: 'divider' },
  { id: 'refer', item: 'Refer & Earn', path: Routes.legacy.refer.path },
  { id: 'contest', item: 'Contest', path: Routes.legacy.contest.path },
  { id: 'customer', item: 'Customer care', path: Routes.legacy['cus-care'].path },
  { id: 'divider' },
  { id: 'logout', item: 'Logout', path: Routes.auth.logout.path },
];
