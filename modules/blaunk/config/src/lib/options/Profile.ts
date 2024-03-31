import { FormSectionGroup } from '@li/types/design';
import { Address } from './Address';
import { BankNameOptions } from './Bank';
import { CountryCodeOptions } from './Country';
import { BankAccountType } from './General';
import { PaymentOption, UserCategoryOption } from './User';
import {
  VendorCertificate,
  VendorFirm,
  VendorFirmBranchCount,
  VendorLanguage,
  VendorNumberOfEmployees,
  VendorResponseTime,
} from './VendorOptions';

const profileSection = {
  personal: {
    form: ['personal', 'address', 'identification'],
    document: {
      personal: ['profilePhoto', 'idProof', 'googleAddress'],
      test: undefined,
    },
  },
  general: {
    form: ['general'],
  },
  bank: {
    bankIndia: { form: ['bankIndia'] },
    upi: { form: ['upi'] },
    bankInternational: { form: ['bankInternational'] },
    qrCode: { document: ['qrCode'] },
  },
  vendor: {
    form: [
      'vendor',
      'vendorCompany',
      'vendorAgent',
      'vendorResponse',
      'vendorIdentification',
    ],
    document: {
      vendor: [
        'companyLogo',
        'license',
        'shopCertificate',
        'taxCertificate',
        'tradeLicense',
        'signature',
        'bankCheque',
        'bankLetter',
      ],
    },
  },
} as const;

export const profileSections: FormSectionGroup<typeof profileSection> = {
  personal: {
    form: [
      {
        id: 'personal',
        title: 'Personal',
        items: [
          {
            id: 'name',
            label: 'Name',
            placeholder: 'Name',
          },
          {
            id: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
          },
          {
            id: 'phone',
            type: 'phone',
            label: 'Phone',
            isReadOnly: true,
            placeholder: 'Phone number',
            countryCodes: CountryCodeOptions,
          },
        ],
      },
      Address,
      {
        id: 'identification',
        title: 'Identification',
        items: [
          {
            id: 'pan',
            label: 'PAN',
            placeholder: 'PAN',
          },
          {
            id: 'passport',
            label: 'Passport',
            placeholder: 'Passport',
          },
          {
            id: 'doi',
            label: 'DOI',
            placeholder: 'DOI',
          },
          {
            id: 'dl',
            label: 'DL',
            placeholder: 'Driving license',
          },
          {
            id: 'aadhar',
            label: 'Aadhar',
            placeholder: 'Aadhar number',
            type: 'number',
          },
        ],
      },
    ],
    document: [
      {
        id: 'personal',
        title: 'Documents',
        verification: true,
        items: [
          { id: 'profilePhoto', label: 'Profile Photo', required: true },
          {
            id: 'idProof',
            label: 'ID Proof',
            required: true,
            placeholder: [
              'PAN Card',
              'Driving License',
              'Aadhar Card',
              'Passport',
            ],
          },
          { id: 'googleAddress', label: 'Google Address' },
        ],
      },
    ],
  },
  general: {
    form: [
      {
        id: 'general',
        title: 'General',
        items: [
          {
            id: 'referCode',
            isReadOnly: true,
            label: 'Refer code',
            placeholder: 'Refer code',
          },
          {
            id: 'grade',
            isReadOnly: true,
            label: 'Grade',
            placeholder: 'Grade',
          },
          {
            id: 'status',
            isReadOnly: true,
            label: 'Status',
            placeholder: 'Status',
          },
          {
            id: 'category',
            type: 'select',
            label: 'Category',
            placeholder: 'Category',
            options: UserCategoryOption,
          },
          {
            id: 'payMode',
            type: 'select',
            label: 'Pay mode',
            placeholder: 'Pay mode',
            options: PaymentOption,
          },
        ],
      },
    ],
  },
  bank: {
    title: 'Bank',
    options: [
      {
        id: 'bankIndia',
        item: 'Indian Bank',
      },
      {
        id: 'upi',
        item: 'UPI',
      },
      {
        id: 'bankInternational',
        item: 'International Bank',
      },
      {
        id: 'qrCode',
        item: 'QR Code',
      },
    ],
    items: {
      bankIndia: {
        form: [
          {
            id: 'bankIndia',
            title: 'Indian Bank',
            items: [
              {
                id: 'bankName',
                label: 'Bank name',
                placeholder: 'Bank name',
                type: 'select',
                options: BankNameOptions,
              },
              {
                id: 'accountNumber',
                label: 'Account number',
                placeholder: 'Account number',
              },
              {
                id: 'accountType',
                type: 'select',
                label: 'Account type',
                placeholder: 'Account type',
                options: BankAccountType,
              },
              {
                id: 'ifscCode',
                label: 'IFSC code',
                placeholder: 'IFSC code',
              },
              {
                id: 'micr',
                label: 'MICR',
                placeholder: 'MICR',
              },
            ],
          },
        ],
      },
      upi: {
        form: [
          {
            id: 'upi',
            title: 'UPI',
            items: [
              {
                id: 'upiId',
                label: 'UPI ID',
                placeholder: 'UPI ID',
              },
            ],
          },
        ],
      },
      bankInternational: {
        form: [
          {
            id: 'bankInternational',
            title: 'International Bank',
            items: [
              {
                id: 'bankName',
                label: 'Bank name',
                placeholder: 'Bank name',
              },
              {
                id: 'accountNumber',
                label: 'Account number',
                placeholder: 'Account number',
              },
              {
                id: 'micr',
                label: 'MICR',
                placeholder: 'MICR',
              },
            ],
          },
        ],
      },
      qrCode: {
        document: [
          {
            id: 'qrCode',
            title: 'Documents',
            verification: true,
            items: [
              {
                id: 'qrCode',
                label: 'QR Code',
              },
            ],
          },
        ],
      },
    },
  },
  vendor: {
    form: [
      {
        id: 'vendor',
        title: 'Vendor',
        items: [
          {
            id: 'vendorCode',
            isReadOnly: true,
            label: 'Vendor code',
            placeholder: 'Vendor code',
          },
          {
            id: 'exportEnquiry',
            type: 'yes-no',
            label: 'Export enquiry',
            placeholder: '',
          },
          {
            id: 'blaunkAssurance',
            type: 'yes-no',
            label: 'Blaunk Assurance',
            placeholder: '',
          },
        ],
      },
      {
        id: 'vendorCompany',
        title: 'Vendor Company',
        items: [
          {
            id: 'companyName',
            isReadOnly: true,
            label: 'Company name',
            placeholder: 'Company name',
          },
          {
            id: 'firm',
            type: 'select',
            label: 'Firm',
            placeholder: 'Firm',
            options: VendorFirm,
          },
          {
            id: 'yearOfIncorporation',
            type: 'number',
            label: 'Year of incorporation (YYYY)',
            placeholder: 'Year of incorporation',
          },
          {
            id: 'industrySector',
            // type: 'select',
            label: 'Industry Sector',
            placeholder: 'Industry Sector',
            // options: VendorIndustrySector,
          },
          {
            id: 'certificate',
            type: 'select',
            label: 'Certificate',
            placeholder: 'Certificate',
            options: VendorCertificate,
          },
          {
            id: 'annualTurnover',
            type: 'number',
            label: 'Annual turnover (in Lakhs)',
            placeholder: 'Annual turnover',
          },
          {
            id: 'totalDirectors',
            type: 'number',
            label: 'Total Directors',
            placeholder: 'Total Directors',
          },
          {
            id: 'noOfBranch',
            type: 'select',
            label: 'No of branch(s)',
            placeholder: 'No of branch',
            options: VendorFirmBranchCount,
          },
          {
            id: 'noOfEmployees',
            type: 'select',
            label: 'No of Employees',
            placeholder: 'No of Employees',
            options: VendorNumberOfEmployees,
          },
          {
            id: 'gst',
            type: 'number',
            label: 'GST',
            placeholder: 'GST',
          },
          {
            id: 'tanNo',
            label: 'TAN No',
            placeholder: 'TAN No',
          },
        ],
      },
      {
        id: 'vendorAgent',
        title: 'Vendor Agent',
        items: [
          {
            id: 'agentName',
            label: 'Agent name',
            placeholder: 'Agent name',
          },
          {
            id: 'agentShare',
            isReadOnly: true,
            type: 'number',
            label: 'Agent Share (%)',
            placeholder: 'Share',
          },
        ],
      },

      {
        id: 'vendorResponse',
        title: 'Vendor Interactions',
        items: [
          {
            id: 'responseTime',
            type: 'select',
            label: 'Response Time',
            placeholder: 'Response Time',
            options: VendorResponseTime,
          },
          {
            id: 'communicationMode',
            type: 'select',
            label: 'Communication Mode',
            placeholder: 'Communication Mode',
            options: VendorLanguage,
          },
        ],
      },
      {
        id: 'vendorIdentification',
        title: 'Vendor Identification',
        items: [
          {
            id: 'pan',
            isReadOnly: true,
            label: 'PAN',
            placeholder: 'Pending',
          },
          {
            id: 'aadhar',
            isReadOnly: true,
            label: 'Aadhar',
            placeholder: 'Pending',
          },
          {
            id: 'kyc',
            isReadOnly: true,
            label: 'KYC',
            placeholder: 'Pending',
          },
          {
            id: 'agreement',
            isReadOnly: true,
            label: 'Agreement',
            placeholder: 'Pending',
          },
          {
            id: 'confirmation',
            isReadOnly: true,
            label: 'Confirmation',
            placeholder: 'Pending',
          },
        ],
      },
    ],
    document: [
      {
        id: 'vendor',
        title: 'Documents',
        verification: true,
        items: [
          { id: 'bankCheque', label: 'Bank Cheque', required: true },
          {
            id: 'bankLetter',
            label: 'Bank Letter',
            placeholder: ['Brand authorization', 'Bank authorization'],
          },
          { id: 'companyLogo', label: 'Company Logo' },
          { id: 'license', label: 'License FSSAI/ISO' },
          { id: 'shopCertificate', label: 'Shop & Est/Govt Certificate' },
          { id: 'taxCertificate', label: 'GST/VAT Certificate' },
          {
            id: 'tradeLicense',
            label: 'Trade License',
            placeholder: ['Exim', 'Trade mark'],
          },
          { id: 'signature', label: 'Signature' },
        ],
      },
    ],
  },
};
