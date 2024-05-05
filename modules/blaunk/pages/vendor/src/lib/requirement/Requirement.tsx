'use client';

import {
  Button,
  Input,
  Modal,
  PageHeader,
  Table,
  TableColumn,
} from '@li/design/elements';
import { MenuCategoriesIdType } from '@md/blaunk/config';
import {
  ArticleSearch,
  CountrySearch,
  GroupSearch,
  SearchBarWrapper,
  SearchButton,
} from '@md/blaunk/design';
import { useCallback, useState } from 'react';
import styles from './requirement.module.css';

type VenderSearch = {
  id: string;
  country: string;
  group: string;
  article: string;
  purpose: string;
  qty: number;
  unit: string;
  requirements: string;
  issueDate: string;
  voucherCode: string;
  vendorCode: string;
  vendorCity: string;
  vendorMobile: string;
  totalSearch: number;
  numberOfComplains: number;
};

const columns = (
  onReport: (id: string) => void,
): TableColumn<VenderSearch>[] => [
  {
    id: 'country',
    name: 'Country',
  },
  {
    id: 'group',
    name: 'Group',
  },
  {
    id: 'article',
    name: 'Article',
  },
  {
    id: 'purpose',
    name: 'Purpose',
  },
  {
    id: 'qty',
    name: 'Qty.',
  },
  {
    id: 'unit',
    name: 'Unit',
  },
  {
    id: 'requirements',
    name: 'Requirements',
  },
  {
    id: 'issueDate',
    name: 'Issue Date',
  },
  {
    id: 'voucherCode',
    name: 'Voucher Code',
  },
  {
    id: 'vendorCode',
    name: 'Vendor Code',
  },
  {
    id: 'vendorCity',
    name: 'Vendor City',
  },
  {
    id: 'vendorMobile',
    name: 'Vendor Mobile',
  },
  {
    id: 'totalSearch',
    name: 'Total search',
  },
  {
    id: 'numberOfComplains',
    name: 'No. complains',
  },
  {
    id: 'id',
    name: 'Report',
    cellFormat: (data) => (
      <Button variant="error" onClick={() => onReport(`${data}`)}>
        Report
      </Button>
    ),
  },
];

const data: VenderSearch[] = [
  {
    id: '1',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
  {
    id: '2',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
  {
    id: '3',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
  {
    id: '4',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
  {
    id: '5',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
  {
    id: '6',
    country: 'India',
    group: 'General',
    article: 'Cufflinks',
    purpose: 'For buying',
    qty: 2,
    unit: 'Pairs',
    requirements: 'Export Enquiry',
    issueDate: '12-04-2024',
    voucherCode: 'VAA9320F',
    vendorCode: 'OFN0294-104',
    vendorCity: 'Mumbai',
    vendorMobile: '9839854788',
    numberOfComplains: 1,
    totalSearch: 10,
  },
];

export const Requirement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuCategoriesIdType>();

  const onReport = useCallback((id: string) => {
    setIsOpen(true);
  }, []);

  return (
    <div>
      <PageHeader title={'Requirement'} />
      <SearchBarWrapper>
        <CountrySearch isStart />
        <GroupSearch onChange={(e) => setSelectedMenu(e?.id)} />
        <ArticleSearch selectedMenu={selectedMenu} />
        <SearchButton />
      </SearchBarWrapper>
      <Table columns={columns(onReport)} data={data} className={styles.table} />
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={`Report an issue`}
      >
        <div className={styles['report-wrapper']}>
          Please tell us about the issue
          <Input placeholder="Which part of the item?" />
          <Button variant="primary">Submit</Button>
        </div>
      </Modal>
    </div>
  );
};
