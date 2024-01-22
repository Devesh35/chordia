import { SelectItem, SelectItemElement } from './Select';

type FromList<T extends readonly string[]> = T[number];

export type FormSectionItem<D = string> = {
  id: D;
  label: string;
  size?: number;
  placeholder: string;
  isNotEditable?: true;
  required?: boolean;
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
  required?: boolean;
};

export type FormDocumentSection<T = string, D = string> = {
  id: T;
  title: string;
  items: FormDocument<D>[];
  verification?: boolean;
};

// FIXME: this is not correct
type FormBase = {
  // list of full section id
  form?: readonly string[];
  // list of individual document id
  document?: readonly string[];
};

type FormGroup = Record<string, FormBase>;

export type FormGroupBaseItem = FormBase | FormGroup;

export type FormGroupBase = Record<string, FormGroupBaseItem>;

type GroupToBase<T extends FormGroupBase> = {
  [K in keyof T]: T[K] extends FormBase
    ? {
        form?: T[K]['form'] extends ReadonlyArray<string>
          ? FormSection<FromList<T[K]['form']>>[]
          : undefined;
        document?: T[K]['document'] extends ReadonlyArray<string>
          ? FormDocumentSection<K, FromList<T[K]['document']>>[]
          : undefined;
      }
    : T[K] extends FormGroup
    ? { title: string; options: SelectItemElement[]; items: GroupToBase<T[K]> }
    : never;
};

export type FormSectionGroup<P extends FormGroupBase> = GroupToBase<P>;
