import { optionsFromStrings } from '@li/config/utils';

const userCategory = [
  'Manufacturer',
  'Retailer',
  'Stockist',
  'Dealer',
  'Agent',
  'Farmer',
  'Trader',
] as const;

export const UserCategoryOption = optionsFromStrings(userCategory);

const paymentOption = ['COD', 'Online', 'Wallet', 'Card'] as const;

export const PaymentOption = optionsFromStrings(paymentOption);
