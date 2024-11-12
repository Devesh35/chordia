import { arrayOf, optionsFromStrings } from '@li/config/utils';
import { FormSectionGroup } from '@li/types/design';
import { Address } from './Address';
import { CountryBanksOptions } from './Banks';
import { CountriesOption, CountryCodeOptions } from './Country';
import { Export } from './Export';
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
    form: ['general', 'vendorIdentification'],
  },
  bank: {
    bank: { form: ['bank'] },
    upi: { form: ['upi'] },
    qrCode: { document: ['qrCode'] },
  },
  vendor: {
    form: ['vendorCompany', 'vendorAgent', 'vendorResponse'],
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
  export: {
    form: ['export'],
  },
  policy: {
    form: ['policy'],
  },
  terms: {
    form: ['terms'],
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
            id: 'dob',
            label: 'DOB',
            placeholder: 'DOB',
            type: 'date',
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
          { id: 'profilePhoto', label: 'Profile Photo' },
          {
            id: 'idProof',
            label: 'ID Proof',
            required: true,
            placeholder: ['PAN Card', 'Driving License', 'Aadhar Card', 'Passport'],
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
            id: 'voucher-code',
            type: 'select',
            label: 'Enable code',
            placeholder: 'Enable',
            options: YesNoOptions,
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
            id: 'entity',
            type: 'select',
            label: 'Entity',
            placeholder: 'Entity',
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
            options: optionsFromStrings(arrayOf(10).map((_, i) => (i < 9 ? `${i + 1}` : '10+'))),
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
            type: 'text',
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
  export: {
    form: [
      {
        id: 'vendor-enquiry',
        title: 'Vendor enquiry',
        items: [
          // {
          //   id: 'vendorCode',
          //   isReadOnly: true,
          //   label: 'Vendor code',
          //   placeholder: 'Vendor code',
          // },
          // {
          //   id: 'blaunkAssurance',
          //   type: 'yes-no',
          //   label: 'Blaunk Assurance',
          //   placeholder: '',
          // },
          {
            id: 'exportEnquiry',
            type: 'select',
            label: 'Export enquiry',
            placeholder: '',
            options: YesNoOptions,
          },
        ],
      },
      // depends on exportEnquiry
      { title: 'Export', id: 'export', items: Export.items },
    ],
  },
  policy: {
    form: [
      {
        id: 'policy',
        title: 'Policy',
        items: [
          {
            id: 'productDifference',
            type: 'text',
            label: 'Product Differ from Image',
            placeholder: 'Product Differ from Image',
          },
          {
            id: 'quantityShortage',
            type: 'text',
            label: 'Quantity Shortage',
            placeholder: 'Quantity Shortage',
          },
          {
            id: 'articleColourBleed',
            type: 'text',
            label: 'Article Colour Bleed',
            placeholder: 'Article Colour Bleed',
          },
          {
            id: 'paymentModeRefund',
            type: 'text',
            label: 'Payment Mode - Refund',
            placeholder: 'Payment Mode - Refund',
          },
          {
            id: 'warrantyPeriod',
            type: 'text',
            label: 'Warranty Period',
            placeholder: 'Warranty Period',
          },
          {
            id: 'exportQualityStandard',
            type: 'text',
            label: 'Export Quality Standard',
            placeholder: 'Export Quality Standard',
          },
          {
            id: 'refundAmount',
            type: 'text',
            label: 'Refund Amount',
            placeholder: 'Refund Amount',
          },
          {
            id: 'damagedArticle',
            type: 'text',
            label: 'Damaged Article',
            placeholder: 'Damaged Article',
          },
          {
            id: 'qcCharges',
            type: 'text',
            label: 'QC Charges',
            placeholder: 'QC Charges',
          },
          {
            id: 'productDeadOnArrival',
            type: 'text',
            label: 'Product Dead On Arrival',
            placeholder: 'Product Dead On Arrival',
          },
          {
            id: 'damagedArticle',
            type: 'text',
            label: 'Damaged Article',
            placeholder: 'Damaged Article',
          },
          {
            id: 'sizeRatioWrongPacking',
            type: 'text',
            label: 'Size Ratio / Wrong Packing',
            placeholder: 'Size Ratio / Wrong Packing',
          },
          {
            id: 'returnLogisticCharges',
            type: 'text',
            label: 'Return Logistic Charges',
            placeholder: 'Return Logistic Charges',
          },
          {
            id: 'internationalTradeRejection',
            type: 'text',
            label: 'International Trade Rejection',
            placeholder: 'International Trade Rejection',
          },
          {
            id: 'customizeOrder',
            type: 'text',
            label: 'Customize Order',
            placeholder: 'Customize Order',
          },
          {
            id: 'delayInSupplyPenalty',
            type: 'text',
            label: 'Delay in Supply - Penalty',
            placeholder: 'Delay in Supply - Penalty',
          },
          {
            id: 'blaunkChargesOnCancellation',
            type: 'text',
            label: 'Blaunk Charges on Cancellation',
            placeholder: 'Blaunk Charges on Cancellation',
          },
          {
            id: 'reportAnIssuePenalty',
            type: 'text',
            label: 'Report an Issue - Penalty',
            placeholder: 'Report an Issue - Penalty',
          },
          {
            id: 'sampleOnRequest',
            type: 'text',
            label: 'Sample on Request',
            placeholder: 'Sample on Request',
          },
          {
            id: 'vendorPayment',
            type: 'text',
            label: 'Vendor Payment',
            placeholder: 'Vendor Payment',
          },
          {
            id: 'cancellationPolicy',
            type: 'text',
            label: 'Cancellation Policy',
            placeholder: 'Cancellation Policy',
          },
        ],
      },
    ],
  },
  terms: {
    form: [
      {
        id: 'terms',
        title: 'Terms',
        items: [
          {
            id: 'terms',
            type: 'text',
            label: 'Terms',
            placeholder: 'Terms',
          },
        ],
      },
    ],
  },
};
