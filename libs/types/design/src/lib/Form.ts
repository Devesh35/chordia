import { SelectItem, SelectItemElement } from './Select';

export type FormSectionItem = {
  label: string;
  size?: number;
  placeholder: string;
  isNotEditable?: true;
} & (
  | { type?: 'text' | 'number' | 'email' | 'date' }
  | { type?: 'yes-no' | 'area' }
  | { type?: 'phone'; countryCodes: SelectItemElement[] }
  | {
      type?: 'select';
      options: SelectItem[];
    }
);

export type FormSection = {
  label: string;
  items: FormSectionItem[];
};

export type FormDocument = {
  label: string;
  placeholder?: string[];
};

export type FormDocumentSection = {
  label: string;
  items: FormDocument[];
};
