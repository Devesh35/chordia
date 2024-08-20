import { SelectItem, SelectItemElement } from './Select';

type FromList<T extends readonly string[]> = Readonly<T[keyof T]>;

export type PhoneValue = {
  country: SelectItemElement;
  number: string;
};

export type FormSectionItem<D = string> = {
  id: D;
  label: string;
  size?: number;
  placeholder: string;
  isReadOnly?: true;
  required?: boolean;
  block?: boolean;
} & (
  | {
      type?: 'text' | 'email' | 'date' | 'area';
      value?: string;
      onChange?: (value?: string) => void;
      maxLen?: number;
    }
  | {
      type?: 'number';
      value?: number;
      onChange?: (value?: number) => void;
      maxLen?: number;
    }
  | {
      type?: 'phone';
      countryCodes: SelectItemElement[];
      value?: PhoneValue;
      onChange?: (value?: PhoneValue) => void;
    }
  | {
      type?: 'select';
      options: SelectItem[];
      value?: SelectItemElement;
      onChange?: (value?: SelectItem) => void;
    }
  | {
      type?: 'select-submenu';
      options: SelectItem[];
      value?: SelectItemElement;
      onChange?: (value?: SelectItem) => void;
      optionsSub: { [k: string]: SelectItem[] };
      reverseOrder?: boolean;
      sub: {
        id: D;
        label: string;
        placeholder: string;
        value?: SelectItemElement;
        onChange?: (value?: SelectItem) => void;
      };
    }
);

export type FormSection<T = string, D = string> = {
  id: T;
  title: string;
  noHeader?: boolean;
  items: FormSectionItem<D>[];
};

export type FormDocument<T = string> = {
  id: T;
  label: string;
  placeholder?: string[] | string;
  required?: boolean;
};

export type FormDocumentSection<T = string, D = string> = {
  id: T;
  title: string;
  noHeader?: boolean;
  items: FormDocument<D>[];
  verification?: boolean;
};

type FormBaseDataStrings = readonly string[];
type FormBaseDataRecord = Record<string, FormBaseDataStrings | undefined>;

type FormBaseData = FormBaseDataStrings | FormBaseDataRecord;
type FormBase = {
  // list of full section id | record of section id and list of item id
  form?: FormBaseData;
  // list of full document id | record of document id and list of item id
  document?: FormBaseData;
};

type FormGroup = Record<string, FormBase>;

export type FormGroupBaseItem = FormBase | FormGroup;

export type FormGroupBase = Record<string, FormGroupBaseItem>;

type FS<D extends FormBaseData> = D extends FormBaseDataStrings
  ? { form: FormSection<FromList<D>>[] }
  : D extends FormBaseDataRecord
  ? {
      form: FormSection<keyof D, D[keyof D] extends FormBaseDataStrings ? FromList<D[keyof D]> : string>[];
    }
  : never;

type FDS<D extends FormBaseData> = D extends FormBaseDataStrings
  ? { document: FormDocumentSection<FromList<D>>[] }
  : D extends FormBaseDataRecord
  ? {
      document: FormDocumentSection<keyof D, D[keyof D] extends FormBaseDataStrings ? FromList<D[keyof D]> : string>[];
    }
  : never;

type GroupToBase<T extends FormGroupBase> = {
  [K in keyof T]: T[K] extends FormBase
    ?
        | (T[K]['form'] extends FormBaseData ? FS<T[K]['form']> : never)
        | (T[K]['document'] extends FormBaseData ? FDS<T[K]['document']> : never)
    : T[K] extends FormGroup
    ? { title: string; options: SelectItemElement[]; items: GroupToBase<T[K]> }
    : never;
};

export type FormSectionGroup<P extends FormGroupBase> = GroupToBase<P>;
