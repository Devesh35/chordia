import { PageHeader, Table, TableColumn } from '@li/design/elements';
import styles from './ledger.module.css';

type LedgerType = {
  date: string;
  product: string;
  particulars: string;
  voucher: string;
  paymentMode: string;
  quantity: number;
  debit: number;
  credit: number;
  balance: number;
};

const columns = (): TableColumn<LedgerType>[] => [
  {
    id: 'date',
    name: 'Date',
  },
  {
    id: 'product',
    name: 'Product',
  },
  {
    id: 'particulars',
    name: 'Particulars',
  },
  {
    id: 'voucher',
    name: 'Voucher',
  },
  {
    id: 'paymentMode',
    name: 'Payment Mode',
  },
  {
    id: 'quantity',
    name: 'Quantity',
  },
  {
    id: 'debit',
    name: 'Debit',
  },
  {
    id: 'credit',
    name: 'Credit',
  },
  {
    id: 'balance',
    name: 'Balance',
  },
];

const dummyData: LedgerType[] = Array.from({ length: 10 }).map((_, index) => ({
  balance: 100,
  credit: 100,
  debit: 200,
  date: '2021-01-01',
  particulars: 'TRX NUMBER: 123456',
  paymentMode: 'Cash',
  product: 'Product Name',
  quantity: 10,
  voucher: 'Voucher50',
}));

export const Ledger = () => {
  return (
    <div>
      <PageHeader title="Ledger" />
      <Table columns={columns()} data={dummyData} className={styles.table} />
    </div>
  );
};
