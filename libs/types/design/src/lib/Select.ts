export type SelectItemDivider = { id: 'divider' };
export type SelectItemElement<K extends string = string> = {
  id: K;
  item: React.ReactNode;
  isDisabled?: boolean;
};

export type SelectItem<K extends string = string> =
  | SelectItemDivider
  | SelectItemElement<K>;
