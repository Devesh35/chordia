import { optionsFromStrings } from '@li/config/utils';

const userCategory = [
  'Agent',
  'C&F Agent',
  'Dealer',
  'Distributer',
  'Farmer',
  'Individual',
  'Manufacturer',
  'Re-seller',
  'Retailer',
  'Stockist',
  'Trader',
] as const;

export const UserCategoryOption = optionsFromStrings(userCategory);

const paymentOption = ['COD', 'Online', 'Wallet', 'Card'] as const;

export const PaymentOption = optionsFromStrings(paymentOption);
