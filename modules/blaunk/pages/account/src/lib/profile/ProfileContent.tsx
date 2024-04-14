import { toLowerCase } from '@li/config/utils';
import { FormSection, TabNav, Table, TableColumn } from '@li/design/elements';
import { withCondition } from '@li/design/enhancers';
import { profileSections } from '@md/blaunk/config';
import styles from './profile.module.css';

const tabItems = ['Personal', 'General', 'Bank', 'Vendor'] as const;

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

const tabs = tabItems.map((item) => ({
  id: toLowerCase(item),
  label: item,
  content: (
    <>
      <FormSection section={profileSections} selected={toLowerCase(item)} />
      {withCondition(item === 'Bank')(
        <div className={styles['table-wrapper']}>
          <Table columns={columns} data={data} />
        </div>,
      )}
    </>
  ),
}));

export const ProfileContent = () => (
  <TabNav tabs={tabs} className={styles.content} />
);
