import { optionsFromStrings } from '@li/config/utils';

const bankAccountTypes = ['Current Account', 'Savings Account'];
export const BankAccountType = optionsFromStrings(bankAccountTypes);
