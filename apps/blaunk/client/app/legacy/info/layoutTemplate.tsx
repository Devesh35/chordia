import { Routes } from '@md/blaunk/config';
import { withPageTitle } from '@li/design/enhancers';

import { PageHeader } from '@li/design/elements';
import { ReactChildren } from '@li/types/shared';
type Keys = keyof typeof Routes.info;
type Omitted = Exclude<Keys, 'isProtected' | 'title' | 'path'>;

export const Layout = (key: Omitted) => {
  const Title = withPageTitle(Routes.info[key].title);
  const Index = ({ children }: ReactChildren) => (
    <Title>
      <PageHeader title={Routes.info[key].title.split('|')[0]} />
      {children}
    </Title>
  );

  return Index;
};
