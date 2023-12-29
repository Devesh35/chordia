import { ReactNode } from 'react';

export const withCondition =
  (condition: boolean) =>
  (component: ReactNode, componentFalse: ReactNode = null) =>
    condition ? component : componentFalse;
