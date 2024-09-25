import { withPageTitle } from '@li/design/enhancers';
import { Routes } from '@md/blaunk/config';

import { PageHeader } from '@li/design/elements';
import { ReactChildren } from '@li/types/shared';

const route = Routes.legacy;

type Keys = keyof typeof route;
type Omitted = Exclude<Keys, 'isProtected' | 'title' | 'path'>;

export const Layout = (key: Omitted) => {
  const Title = withPageTitle(route[key].title);
  const Index = ({ children }: ReactChildren) => (
    <Title>
      <PageHeader title={route[key].title.split('|')[0]} />
      {children}
    </Title>
  );

  return Index;
};
