import { Profile } from '@li/design/components';
import { getRandomImagesArray } from '../utils';
import { Routes } from './Routes';
import { SelectItem } from '@li/types/design';

const src = getRandomImagesArray(1)(64, 64)[0];

export type NavMenuItem = SelectItem & { path?: string };

export const NavMenuItems: NavMenuItem[] = [
  {
    id: 'profile',
    item: (
      <Profile
        image={src}
        name="Pravin Chordia"
        phone="+91 9876543210"
        wallet={100}
      />
    ),
    path: Routes.account.profile.path,
  },
  { id: 'divider' },
  { id: 'orders', item: 'Orders', path: Routes.account.orders.path },
  { id: 'wishlist', item: 'Wishlist', path: Routes.account.wishlist.path },
  { id: 'wallet', item: 'Wallet', isDisabled: true },
  { id: 'divider' },
  { id: 'dashboard', item: 'Dashboard', path: Routes.vendor.dashboard.path },
  { id: 'product', item: 'Products', path: Routes.product.path },
  { id: 'shipments', item: 'Shipments', path: Routes.vendor.shipments.path },
  { id: 'divider' },
  { id: 'refer', item: 'Refer & Earn' },
  { id: 'contest', item: 'Contest' },
  { id: 'customer', item: 'Customer' },
  { id: 'divider' },
  { id: 'logout', item: 'Logout', path: Routes.auth.logout.path },
];