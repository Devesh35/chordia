import { SelectItem, SelectItemElement } from './Select';

type FromList<T extends readonly string[]> = Readonly<T[keyof T]>;

export type ExtendableFormSectionItem<D = string> = {
  id: D;
  label: string;
  size?: number;
  placeholder: string;
  isReadOnly?: true;
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
      super: D;
      options: { [k: string]: SelectItem[] };
    }
);

export type ExtendableFormSection<T = string, D = string> = {
  id: T;
  title: string;
  items: ExtendableFormSectionItem<D>[];
};

export type ExtendableFormDocument<T = string> = {
  id: T;
  label: string;
  placeholder?: string[];
  required?: boolean;
};

export type ExtendableFormDocumentSection<T = string, D = string> = {
  id: T;
  title: string;
  items: ExtendableFormDocument<D>[];
  verification?: boolean;
};

type ExtendableFormBaseDataStrings = readonly string[];
type ExtendableFormBaseDataRecord = Record<
  string,
  ExtendableFormBaseDataStrings | undefined
>;

type ExtendableFormBaseData =
  | ExtendableFormBaseDataStrings
  | ExtendableFormBaseDataRecord;
type ExtendableFormBase = {
  // list of full section id | record of section id and list of item id
  form?: ExtendableFormBaseData;
  // list of full document id | record of document id and list of item id
  document?: ExtendableFormBaseData;
};

type ExtendableFormGroup = Record<string, ExtendableFormBase>;

export type ExtendableFormGroupBaseItem =
  | ExtendableFormBase
  | ExtendableFormGroup;

export type ExtendableFormGroupBase = Record<
  string,
  ExtendableFormGroupBaseItem
>;

type FS<D extends ExtendableFormBaseData> =
  D extends ExtendableFormBaseDataStrings
    ? { form: ExtendableFormSection<FromList<D>>[] }
    : D extends ExtendableFormBaseDataRecord
    ? {
        form: ExtendableFormSection<
          keyof D,
          D[keyof D] extends ExtendableFormBaseDataStrings
            ? FromList<D[keyof D]>
            : string
        >[];
      }
    : never;

// type FDS<D extends ExtendableFormBaseData> =
//   D extends ExtendableFormBaseDataStrings
//     ? { document: ExtendableFormDocumentSection<FromList<D>>[] }
//     : D extends ExtendableFormBaseDataRecord
//     ? {
//         document: ExtendableFormDocumentSection<
//           keyof D,
//           D[keyof D] extends ExtendableFormBaseDataStrings
//             ? FromList<D[keyof D]>
//             : string
//         >[];
//       }
//     : never;

type GroupToBase<T extends ExtendableFormGroupBase> = {
  [K in keyof T]: T[K] extends ExtendableFormBase
    ? T[K]['form'] extends ExtendableFormBaseData
      ? FS<T[K]['form']>
      : never
    : // | (T[K]['document'] extends ExtendableFormBaseData
    //     ? FDS<T[K]['document']>
    //     : never)
    T[K] extends ExtendableFormGroup
    ? { title: string; options: SelectItemElement[]; items: GroupToBase<T[K]> }
    : never;
};

export type ExtendableFormSectionGroup<P extends ExtendableFormGroupBase> =
  GroupToBase<P>;
