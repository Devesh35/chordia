import { PageHeader } from '@md/blaunk/design';
import { AddModal } from './AddModal';

export const List = () => {
  return (
    <div>
      <PageHeader title="Products" aside={<AddModal />} />
      List of products
    </div>
  );
};
