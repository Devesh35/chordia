import { arrayOf, optionsFromStrings } from '@li/config/utils';
import { FormSectionGroup } from '@li/types/design';
import { Address } from './Address';
import { CountryBanksOptions } from './Banks';
import { CountriesOption, CountryCodeOptions } from './Country';
import { BankAccountType, YesNoOptions } from './General';
import { IndustrySectorOptions } from './Industry';
import { UserCategoryOption } from './User';
import {
  VendorCertificate,
  VendorFirm,
  VendorFirmBranchCount,
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
    bank: { form: ['bank'] },
    upi: { form: ['upi'] },
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
            isReadOnly: true,
          },
          {
            id: 'email',
            type: 'email',
            label: 'Email',
            placeholder: 'Email',
            isReadOnly: true,
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
            maxLen: 12,
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
          // {
          //   id: 'payMode',
          //   type: 'select',
          //   label: 'Pay mode',
          //   placeholder: 'Pay mode',
          //   options: PaymentOption,
          // },
        ],
      },
    ],
  },
  bank: {
    title: 'Bank',
    options: [
      {
        id: 'bank',
        item: 'Bank',
      },
      {
        id: 'upi',
        item: 'UPI',
      },
      {
        id: 'qrCode',
        item: 'QR Code',
      },
    ],
    items: {
      bank: {
        form: [
          {
            id: 'bank',
            title: 'Bank',
            items: [
              {
                id: 'country',
                label: 'Country',
                placeholder: 'Country',
                type: 'select-submenu',
                options: CountriesOption,
                optionsSub: CountryBanksOptions,
                sub: {
                  id: 'bankName',
                  label: 'Bank name',
                  placeholder: 'Bank name',
                },
              },
              // {
              //   id: 'country',
              //   label: 'Country',
              //   placeholder: 'Country',
              //   type: 'select',
              //   options: CountriesOption,
              // },
              // {
              //   id: 'bankName',
              //   label: 'Bank name',
              //   placeholder: 'Bank name',
              //   type: 'select',
              //   options: CountryBanksOptions.in,
              // },

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
          // {
          //   id: 'vendorCode',
          //   isReadOnly: true,
          //   label: 'Vendor code',
          //   placeholder: 'Vendor code',
          // },
          {
            id: 'exportEnquiry',
            type: 'select',
            label: 'Export enquiry',
            placeholder: '',
            options: YesNoOptions,
          },
          // {
          //   id: 'blaunkAssurance',
          //   type: 'yes-no',
          //   label: 'Blaunk Assurance',
          //   placeholder: '',
          // },
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
            maxLen: 4,
          },
          {
            id: 'industrySector',
            type: 'select',
            label: 'Industry Sector',
            placeholder: 'Industry Sector',
            options: IndustrySectorOptions,
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
            placeholder: '00.00',
          },
          {
            id: 'totalDirectors',
            type: 'select',
            label: 'Total Directors',
            placeholder: 'Total Directors',
            options: optionsFromStrings(
              arrayOf(10).map((_, i) => (i < 9 ? `${i + 1}` : '10+')),
            ),
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
            label: 'VAT/TAX/GST No',
            placeholder: 'VAT/TAX/GST No',
          },
          {
            id: 'tanNo',
            label: 'TAN No',
            placeholder: 'TAN No',
          },
          {
            id: 'panNo',
            label: 'PAN No',
            placeholder: 'PAN No',
          },
          {
            id: 'ciNo',
            label: "Co's identification No",
            placeholder: 'CIN',
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
            label: 'Response Time (Hrs)',
            placeholder: 'Response Time',
            options: VendorResponseTime,
          },
          {
            id: 'communicationMode',
            type: 'text',
            label: 'Communication Language',
            placeholder: 'Communication Mode',
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
          {
            id: 'signature',
            label: 'Signature',
            placeholder: `Uploaded signature only with black pen and clear white back ground`,
          },
        ],
      },
    ],
  },
};
