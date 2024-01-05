import { Link } from '@li/design/elements';
import { Routes } from '@md/blaunk/config';

export const List = () => {
  return (
    <div>
      List
      <Link href={Routes.product.add.path}>Add Product</Link>
    </div>
  );
};
