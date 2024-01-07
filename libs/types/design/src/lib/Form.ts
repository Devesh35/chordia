import { SelectItem, SelectItemElement } from './Select';

export type FormSectionItem = {
  id: string;
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
  | {
      type?: 'select-submenu';
      super: string;
      options: { [k: string]: SelectItem[] };
    }
);

export type FormSection = {
  id: string;
  title: string;
  items: FormSectionItem[];
};

export type FormDocument = {
  id: string;
  label: string;
  placeholder?: string[];
};

export type FormDocumentSection = {
  id: string;
  title: string;
  items: FormDocument[];
  verification?: boolean;
};
