import { ReactNode } from 'react';

export const withCondition =
  (condition?: boolean) =>
  (component: ReactNode, componentFalse: ReactNode = null) =>
    condition ? component : componentFalse;

export const withConditionCase =
  <T extends string | number | symbol>(condition: T) =>
  (components: Partial<Record<T | 'default', ReactNode | undefined>>) =>
    components[condition] || components.default;
