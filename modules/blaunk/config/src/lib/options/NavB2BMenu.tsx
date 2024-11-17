import { SelectItem } from '@li/types/design';
import { Routes } from './Routes';

export type NavB2BMenuItem = SelectItem & { path?: string };

export const NavB2BMenuItems: NavB2BMenuItem[] = [
  { id: 'ledger', item: 'Ledger', path: Routes.account.ledger.path },
  { id: 'dashboard', item: 'Dashboard', path: Routes.vendor.dashboard.path },
  { id: 'product', item: 'Product', path: Routes.b2bProduct.path },
  { id: 'shipments', item: 'Shipments', path: Routes.vendor.shipments.path },
];
