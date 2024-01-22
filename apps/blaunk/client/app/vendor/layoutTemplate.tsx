import { Routes } from '@md/blaunk/config';
import { withPageTitle } from '@li/design/enhancers';

import { PageHeader } from '@li/design/elements';
import { ReactChildren } from '@li/types/shared';
type Keys = keyof typeof Routes.vendor;
type Omitted = Exclude<Keys, 'isProtected' | 'title' | 'path' | 'seller'>;

export const Layout = (key: Omitted) => {
  const Title = withPageTitle(Routes.vendor[key].title);
  const Index = ({ children }: ReactChildren) => (
    <Title>
      <PageHeader title={Routes.vendor[key].title.split('|')[0]} />
      {children}
    </Title>
  );

  return Index;
};
