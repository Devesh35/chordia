import { SelectItem, SelectItemElement } from './Select';

export type FormSectionItem<D = string> = {
  id: D;
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

export type FormSection<T = string, D = string> = {
  id: T;
  title: string;
  items: FormSectionItem<D>[];
};

export type FormDocument<T = string> = {
  id: T;
  label: string;
  placeholder?: string[];
};

export type FormDocumentSection<T = string, D = string> = {
  id: T;
  title: string;
  items: FormDocument<D>[];
  verification?: boolean;
};
