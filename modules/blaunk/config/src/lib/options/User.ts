import { optionsFromStrings } from '@li/config/utils';

const userCategory = [
  'Manufacturer',
  'Retailer',
  'Stockist',
  'Dealer',
  'Agent',
  'Farmer',
  'Trader',
];

export const UserCategoryOption = optionsFromStrings(userCategory);

const paymentOption = ['COD', 'Online', 'Wallet', 'Card'];

export const PaymentOption = optionsFromStrings(paymentOption);
