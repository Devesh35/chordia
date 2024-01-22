import { FormSectionGroup } from '@li/types/design';
import { CountriesOption, CountryCodeOptions } from './Country';
import { PaymentOption, UserCategoryOption } from './User';
import { BankAccountType } from './General';
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
      personal: [
        'profilePhoto',
        'idProof',
        'signature',
        'googleAddress',
        'bankCheque',
        'bankLetter',
      ],
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
            isNotEditable: true,
            placeholder: 'Phone number',
            countryCodes: CountryCodeOptions,
          },
        ],
      },
      {
        id: 'address',
        title: 'Address',
        items: [
          {
            id: 'address',
            label: 'Address',
            placeholder: 'Address',
          },
          {
            id: 'address2',
            label: 'Address 2',
            placeholder: 'Address 2',
          },
          {
            id: 'landmark',
            label: 'Landmark',
            placeholder: 'Landmark',
          },
          {
            id: 'district',
            label: 'District',
            placeholder: 'District',
          },
          {
            id: 'city',
            label: 'City',
            placeholder: 'City',
          },
          {
            id: 'zip',
            label: 'Zip',
            placeholder: 'Zip',
            type: 'number',
          },
          {
            id: 'state',
            label: 'State',
            placeholder: 'State',
          },
          {
            id: 'country',
            type: 'select',
            label: 'Country',
            placeholder: 'Country',
            options: CountriesOption,
          },
        ],
      },
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
          { id: 'bankCheque', label: 'Bank Cheque', required: true },
          {
            id: 'bankLetter',
            label: 'Bank Letter',
            placeholder: ['Brand authorization', 'Bank authorization'],
          },
          { id: 'signature', label: 'Signature' },
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
            isNotEditable: true,
            label: 'Refer code',
            placeholder: 'Refer code',
          },
          {
            id: 'grade',
            isNotEditable: true,
            label: 'Grade',
            placeholder: 'Grade',
          },
          {
            id: 'status',
            isNotEditable: true,
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
            isNotEditable: true,
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
            isNotEditable: true,
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
            isNotEditable: true,
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
            isNotEditable: true,
            label: 'PAN',
            placeholder: 'Pending',
          },
          {
            id: 'aadhar',
            isNotEditable: true,
            label: 'Aadhar',
            placeholder: 'Pending',
          },
          {
            id: 'kyc',
            isNotEditable: true,
            label: 'KYC',
            placeholder: 'Pending',
          },
          {
            id: 'agreement',
            isNotEditable: true,
            label: 'Agreement',
            placeholder: 'Pending',
          },
          {
            id: 'confirmation',
            isNotEditable: true,
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
          { id: 'companyLogo', label: 'Company Logo' },
          { id: 'license', label: 'License FSSAI/ISO' },
          { id: 'shopCertificate', label: 'Shop & Est/Govt Certificate' },
          { id: 'taxCertificate', label: 'GST/VAT Certificate' },
          {
            id: 'tradeLicense',
            label: 'Trade License',
            placeholder: ['Exim', 'Trade mark'],
          },
        ],
      },
    ],
  },
};
