import { toLowerCase } from '@li/config/utils';
import { FormSection, TabNav, Table, TableColumn } from '@li/design/elements';
import { withConditionCase } from '@li/design/enhancers';
import { profileSections } from '@md/blaunk/config';
import styles from './profile.module.css';

const tabItems = ['Personal', 'General', 'Bank', 'Vendor', 'Export', 'Policy', 'Terms'] as const;

type BankDetails = {
  name: string;
  number: string;
  date: string;
};

const columns: TableColumn<BankDetails>[] = [
  {
    id: 'name',
    name: 'Bank name',
  },
  {
    id: 'number',
    name: 'Account number',
  },
  {
    id: 'date',
    name: 'Added on',
  },
];

const data: BankDetails[] = [
  {
    date: '01-02-2024',
    name: 'Bank name',
    number: '6578821-9087098',
  },
  {
    date: '01-02-2024',
    name: 'Bank',
    number: '6578821-9087098',
  },
];

const columnsVendor = [
  {
    id: 'product',
    name: 'Product',
  },
  {
    id: 'orderPlaced',
    name: 'Order placed',
  },
  {
    id: 'cancelled',
    name: 'Cancelled',
  },
];

const dataVendor = [
  {
    cancelled: '4',
    orderPlaced: '4',
    product: 'Cake',
  },
  {
    cancelled: '0',
    orderPlaced: '0',
    product: 'Store',
  },
  {
    cancelled: '0',
    orderPlaced: '0',
    product: 'Logistic',
  },
  {
    cancelled: '0',
    orderPlaced: '0',
    product: 'Tour',
  },
  {
    cancelled: '0',
    orderPlaced: '0',
    product: 'BGT',
  },
];

const tabs = tabItems.map((item) => ({
  id: toLowerCase(item),
  label: item,
  content: (
    <>
      <FormSection section={profileSections} selected={toLowerCase(item)} />
      {withConditionCase(item)({
        Bank: (
          <div className={styles['table-wrapper']}>
            <Table columns={columns} data={data} />
          </div>
        ),
        Vendor: (
          <div className={styles['table-wrapper']}>
            <Table columns={columnsVendor} data={dataVendor} />
          </div>
        ),
      })}
    </>
  ),
}));

export const ProfileContent = () => <TabNav tabs={tabs} className={styles.content} />;
