import { SelectItem } from '@li/design/elements';

export type FormSectionItem = {
  label: string;
  size?: number;
  placeholder: string;
  isNotEditable?: true;
} & (
  | { type?: 'text' | 'number' | 'email' | 'date' }
  | { type?: 'phone' | 'yes-no' | 'area' }
  | {
      type?: 'select';
      options: SelectItem[];
    }
);

export type FormSection = {
  label: string;
  items: FormSectionItem[];
};
