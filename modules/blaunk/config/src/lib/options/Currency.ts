import { optionsFromStrings } from '@li/config/utils';
import { ObjectValues } from '@li/types/shared';

export const AvailableCurrencyCode = {
  in: 'INR',
  bh: 'BHD',
  bd: 'BDT',
  bt: 'BTN',
  id: 'IDR',
  jo: 'JOD',
  my: 'MYR',
  mv: 'MVR',
  np: 'NPR',
  ph: 'PHP',
  sg: 'SGD',
  za: 'ZAR',
  lk: 'LKR',
  th: 'THB',
  ae: 'AED',
  vn: 'VND',
  qa: 'QAR',
} as const;

export const CountryCurrency = Object.values(AvailableCurrencyCode);

export type AvailableCurrency = ObjectValues<typeof AvailableCurrencyCode>;

export const CurrencyCodeOptions = optionsFromStrings(CountryCurrency);
