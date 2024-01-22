import { SelectItem, SelectItemElement } from './Select';

type FromList<T extends readonly string[]> = Readonly<T[number]>;

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

type FormBase = {
  // list of full section id | record of section id and list of item id
  form?: readonly string[] | Record<string, readonly string[] | undefined>;
  // list of full document id | record of document id and list of item id
  document?: readonly string[] | Record<string, readonly string[] | undefined>;
};

type FormGroup = Record<string, FormBase>;

export type FormGroupBaseItem = FormBase | FormGroup;

export type FormGroupBase = Record<string, FormGroupBaseItem>;

type FS<
  T extends FormGroupBase,
  K extends keyof T,
> = T[K]['form'] extends ReadonlyArray<string>
  ? { form: FormSection<FromList<T[K]['form']>>[] }
  : T[K]['form'] extends Record<string, ReadonlyArray<string> | undefined>
  ? {
      form: FormSection<
        keyof T[K]['form'],
        T[K]['form'][keyof T[K]['form']] extends ReadonlyArray<string>
          ? FromList<T[K]['form'][keyof T[K]['form']]>
          : string
      >[];
    }
  : never;

type FDS<
  T extends FormGroupBase,
  K extends keyof T,
> = T[K]['document'] extends ReadonlyArray<string>
  ? { document: FormDocumentSection<FromList<T[K]['document']>>[] }
  : T[K]['document'] extends Record<string, ReadonlyArray<string> | undefined>
  ? {
      document: FormDocumentSection<
        keyof T[K]['document'],
        T[K]['document'][keyof T[K]['document']] extends ReadonlyArray<string>
          ? FromList<T[K]['document'][keyof T[K]['document']]>
          : string
      >[];
    }
  : never;

type GroupToBase<T extends FormGroupBase> = {
  [K in keyof T]: T[K] extends FormBase
    ? FS<T, K> | FDS<T, K>
    : T[K] extends FormGroup
    ? { title: string; options: SelectItemElement[]; items: GroupToBase<T[K]> }
    : never;
};

export type FormSectionGroup<P extends FormGroupBase> = GroupToBase<P>;
