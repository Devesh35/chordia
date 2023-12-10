export type DurationType = 'slow' | 'medium' | 'fast';
export type Direction =
  | 'to right'
  | 'to left'
  | 'to bottom'
  | 'to top'
  | (string & NonNullable<unknown>);
