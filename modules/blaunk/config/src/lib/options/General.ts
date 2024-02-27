import { optionsFromStrings } from '@li/config/utils';
import { SelectItem } from '@li/types/design';

const bankAccountTypes = ['Current Account', 'Savings Account'] as const;
export const BankAccountType = optionsFromStrings(bankAccountTypes);

const taxValues = [0, 5, 8, 12, 18, 28] as const;
const taxKeys = ['0%', '5%', '8%', '12%', '18%', '28%'] as const;

export const GSTOptions: SelectItem<(typeof taxKeys)[number]>[] = taxKeys.map(
  (k, i) => ({ id: k, item: taxValues[i] }),
);

const yesNo = ['Yes', 'No'] as const;
export const YesNoOptions = optionsFromStrings(yesNo);
