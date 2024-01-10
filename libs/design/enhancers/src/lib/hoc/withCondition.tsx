import { ReactNode } from 'react';

export const withCondition =
  (condition?: boolean) =>
  (component: ReactNode, componentFalse: ReactNode = null) =>
    condition ? component : componentFalse;

export const withConditionCase =
  <R = ReactNode, T extends string | number | symbol = string>(condition: T) =>
  (components: Partial<Record<T | 'default', R | undefined>>) =>
    components[condition] || components.default;
