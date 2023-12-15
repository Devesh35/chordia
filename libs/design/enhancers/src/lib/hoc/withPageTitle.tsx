import { ReactChildren } from '@li/types/shared';

export const withPageTitle =
  (title: string) =>
  ({ children }: ReactChildren) => {
    return (
      <>
        <title>{title}</title>
        {children}
      </>
    );
  };
