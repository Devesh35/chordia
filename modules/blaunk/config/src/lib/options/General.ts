import { optionsFromStrings } from '@li/config/utils';

const bankAccountTypes = ['Current Account', 'Savings Account'] as const;
export const BankAccountType = optionsFromStrings(bankAccountTypes);
