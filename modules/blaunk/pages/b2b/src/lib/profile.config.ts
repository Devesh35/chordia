import { SelectItem } from '@li/design/elements';
import {
  BankAccountType,
  CountriesOption,
  PaymentOption,
  UserCategoryOption,
  VendorCertificate,
  VendorFirm,
  VendorFirmBranchCount,
  // VendorIndustrySector,
  VendorLanguage,
  VendorNumberOfEmployees,
  VendorResponseTime,
} from '@md/blaunk/config';

export const profileSection = [
  'personal',
  'address',
  'identification',
  'general',
  'bank',
  'vendor',
  'vendorCompany',
  'vendorAgent',
  'vendorResponse',
  'vendorIdentification',
] as const;

export type ProfileSectionId = (typeof profileSection)[number];

export type ProfileSectionItem = {
  label: string;
  placeholder: string;
  isNotEditable?: true;
} & (
  | {
      type?: 'text' | 'number' | 'email' | 'phone' | 'yes-no';
    }
  | {
      type?: 'select';
      options: SelectItem[];
    }
);

export type ProfileSection = {
  label: string;
  items: ProfileSectionItem[];
};

export const profileSections: {
  [key in ProfileSectionId]: ProfileSection;
} = {
  personal: {
    label: 'Personal',
    items: [
      {
        label: 'Name',
        placeholder: 'Name',
      },
      {
        type: 'email',
        label: 'Email',
        placeholder: 'Email',
      },
      {
        type: 'phone',
        label: 'Phone',
        isNotEditable: true,
        placeholder: 'Phone number',
      },
    ],
  },
  address: {
    label: 'Address',
    items: [
      {
        label: 'Address',
        placeholder: 'Address',
      },
      {
        label: 'Address 2',
        placeholder: 'Address 2',
      },
      {
        label: 'Landmark',
        placeholder: 'Landmark',
      },
      {
        label: 'District',
        placeholder: 'District',
      },
      {
        label: 'City',
        placeholder: 'City',
      },
      {
        label: 'Zip',
        placeholder: 'Zip',
      },
      {
        label: 'State',
        placeholder: 'State',
      },
      {
        type: 'select',
        label: 'Country',
        placeholder: 'Country',
        options: CountriesOption,
      },
    ],
  },
  identification: {
    label: 'Identification',
    items: [
      {
        label: 'PAN',
        placeholder: 'PAN',
      },
      {
        label: 'Passport',
        placeholder: 'Passport',
      },
      {
        label: 'DOI',
        placeholder: 'DOI',
      },
    ],
  },
  general: {
    label: 'General',
    items: [
      {
        isNotEditable: true,
        label: 'Refer code',
        placeholder: 'Refer code',
      },
      {
        isNotEditable: true,
        label: 'Grade',
        placeholder: 'Grade',
      },
      {
        isNotEditable: true,
        label: 'Status',
        placeholder: 'Status',
      },
      {
        type: 'select',
        label: 'Category',
        placeholder: 'Category',
        options: UserCategoryOption,
      },
      {
        type: 'select',
        label: 'Pay mode',
        placeholder: 'Pay mode',
        options: PaymentOption,
      },
    ],
  },
  bank: {
    label: 'Bank',
    items: [
      {
        label: 'Bank name',
        placeholder: 'Bank name',
      },
      {
        label: 'Account number',
        placeholder: 'Account number',
      },
      {
        type: 'select',
        label: 'Account type',
        placeholder: 'Account type',
        options: BankAccountType,
      },
      {
        label: 'IFSC code',
        placeholder: 'IFSC code',
      },
      {
        label: 'MICR',
        placeholder: 'MICR',
      },
      {
        label: 'UPI ID',
        placeholder: 'UPI ID',
      },
    ],
  },
  vendor: {
    label: 'Vendor',
    items: [
      { isNotEditable: true, label: 'Vendor code', placeholder: 'Vendor code' },
      { type: 'yes-no', label: 'Export enquiry', placeholder: '' },
      { type: 'yes-no', label: 'Blaunk Assurance', placeholder: '' },
    ],
  },
  vendorCompany: {
    label: 'Vendor Company',
    items: [
      {
        isNotEditable: true,
        label: 'Company name',
        placeholder: 'Company name',
      },
      {
        type: 'select',
        label: 'Firm',
        placeholder: 'Firm',
        options: VendorFirm,
      },
      {
        type: 'number',
        label: 'Year of incorporation (YYYY)',
        placeholder: 'Year of incorporation',
      },
      {
        // type: 'select',
        label: 'Industry Sector',
        placeholder: 'Industry Sector',
        // options: VendorIndustrySector,
      },
      {
        type: 'select',
        label: 'Certificate',
        placeholder: 'Certificate',
        options: VendorCertificate,
      },
      {
        type: 'number',
        label: 'Annual turnover (in Lakhs)',
        placeholder: 'Annual turnover',
      },
      {
        type: 'number',
        label: 'Total Directors',
        placeholder: 'Total Directors',
      },
      {
        type: 'select',
        label: 'No of branch(s)',
        placeholder: 'No of branch',
        options: VendorFirmBranchCount,
      },
      {
        type: 'select',
        label: 'No of Employees',
        placeholder: 'No of Employees',
        options: VendorNumberOfEmployees,
      },
      {
        type: 'number',
        label: 'GST',
        placeholder: 'GST',
      },
      {
        label: 'TAN No',
        placeholder: 'TAN No',
      },
    ],
  },
  vendorAgent: {
    label: 'Vendor Agent',
    items: [
      {
        label: 'Agent name',
        placeholder: 'Agent name',
      },
      {
        isNotEditable: true,
        type: 'number',
        label: 'Agent Share (%)',
        placeholder: 'Share',
      },
    ],
  },
  vendorResponse: {
    label: 'Vendor Interactions',
    items: [
      {
        type: 'select',
        label: 'Response Time',
        placeholder: 'Response Time',
        options: VendorResponseTime,
      },
      {
        type: 'select',
        label: 'Communication Mode',
        placeholder: 'Communication Mode',
        options: VendorLanguage,
      },
    ],
  },
  vendorIdentification: {
    label: 'Vendor Identification',
    items: [
      {
        isNotEditable: true,
        label: 'PAN',
        placeholder: 'Pending',
      },
      {
        isNotEditable: true,
        label: 'Aadhar',
        placeholder: 'Pending',
      },
      {
        isNotEditable: true,
        label: 'KYC',
        placeholder: 'Pending',
      },
      {
        isNotEditable: true,
        label: 'Agreement',
        placeholder: 'Pending',
      },
      {
        isNotEditable: true,
        label: 'Confirmation',
        placeholder: 'Pending',
      },
    ],
  },
};

export const profileDocument = [
  'profilePhoto',
  'idProof',
  'shopCertificate',
  'tradeLicense',
  'companyLogo',
  'bankLetter',
  'taxCertificate',
  'bankCheque',
  'license',
  'signature',
  'googleAddress',
] as const;
export type ProfileDocumentId = (typeof profileDocument)[number];

export type Document = {
  label: string;
  placeholder?: string[];
};

export const profileDocuments: {
  [key in ProfileDocumentId]: Document;
} = {
  bankCheque: {
    label: 'Bank Cheque',
  },
  bankLetter: {
    label: 'Bank Letter',
  },
  companyLogo: {
    label: 'Company Logo',
  },
  googleAddress: {
    label: 'Google Address',
  },
  idProof: {
    label: 'ID Proof',
    placeholder: ['PAN Card', 'Driving License', 'Aadhar Card', 'Passport'],
  },
  license: {
    label: 'License FSSAI/ISO',
  },
  profilePhoto: {
    label: 'Profile Photo',
  },
  shopCertificate: {
    label: 'Shop & Est/Govt Certificate',
  },
  signature: {
    label: 'Signature',
  },
  taxCertificate: {
    label: 'GST/VAT Certificate',
  },
  tradeLicense: {
    label: 'Trade License',
    placeholder: ['Exim', 'Trade mark'],
  },
};
