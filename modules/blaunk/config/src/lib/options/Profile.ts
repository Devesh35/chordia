import { arrayOf, optionsFromStrings } from '@li/config/utils';
import { FormSectionGroup } from '@li/types/design';
import { Address } from './Address';
import { CountryBanksOptions } from './Banks';
import { CountriesOption, CountryCodeOptions } from './Country';
import { CurrencyCodeOptions } from './Currency';
import { Export } from './Export';
import { BankAccountType, YesNoOptions } from './General';
import { GradeOptions } from './Grade';
import { IndustrySectorOptions } from './Industry';
import {
  ArticleColourBleedOptions,
  BlaunkChargesOnCancellationOptions,
  CancellationPolicyOptions,
  CustomizedMakeToOrderOptions,
  DamagedArticleOptions,
  DelayInSupplyPenaltyOptions,
  DifferOptions,
  InternationalTradeRejectionOptions,
  LogisticChargesOnReturnOptions,
  PaymentModeOptions,
  ProductDeadOnArrivalOptions,
  QcChargesOptions,
  RefundOnCancellationOptions,
  ReportAnIssueOptions,
  SampleOnRequestOptions,
  ShortageOptions,
  SizeDifferenceOptions,
  VendorPaymentAfterDeliveryOptions,
  WarrantyPeriodOptions,
} from './Policy';
import { StatusOptions, UserCategoryOption } from './User';
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
    form: ['general', 'vendorIdentification', 'vendorAgent', 'fines', 'deposit'],
  },
  bank: {
    bank: { form: ['bank'] },
    upi: { form: ['upi'] },
    qrCode: { document: ['qrCode'] },
  },
  vendor: {
    form: ['vendorCompany', 'vendorResponse'],
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
    yes: { form: ['exportEnquiry'] },
    no: { form: [] },
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
          {
            id: 'dob',
            type: 'date',
            label: 'Date of Birth',
            placeholder: 'Date of Birth',
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
            label: 'Grade',
            type: 'select',
            placeholder: 'Grade',
            options: GradeOptions,
          },
          {
            id: 'status',
            label: 'Status',
            placeholder: 'Status',
            type: 'select',
            options: StatusOptions,
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
        id: 'fines',
        title: 'Fines & charges',
        items: [
          {
            id: 'complaint',
            type: 'number',
            label: 'Complaint',
            placeholder: '1',
            isReadOnly: true,
          },
          {
            id: 'resolved',
            type: 'number',
            label: 'Issue resolved',
            placeholder: '1',
            isReadOnly: true,
          },
          {
            id: 'noOrder',
            type: 'number',
            label: 'No of order',
            placeholder: '1',
            isReadOnly: true,
          },
          {
            id: 'penalty',
            type: 'number',
            label: 'Penalty',
            placeholder: '1',
            isReadOnly: true,
          },
          {
            id: 'amount',
            type: 'number',
            label: 'Amount',
            placeholder: '50',
            isReadOnly: true,
          },
        ],
      },
      {
        id: 'deposit',
        title: 'Deposit',
        items: [
          {
            id: 'amount',
            type: 'number',
            label: 'Amount',
            placeholder: 'Amount',
            isReadOnly: true,
          },
          {
            id: 'date',
            type: 'date',
            label: 'Date',
            placeholder: '01-01-2024',
            isReadOnly: true,
          },
          {
            id: 'refNo',
            type: 'number',
            label: 'Reference number',
            placeholder: '000000',
            isReadOnly: true,
          },
          {
            id: 'refund',
            type: 'text',
            label: 'Refund',
            placeholder: 'Refund',
            isReadOnly: true,
          },
          // {
          //   id: 'charges',
          //   type: 'text',
          //   label: 'Charges',
          //   placeholder: 'Charges',
          //   isReadOnly: true,
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
          {
            id: 'currency',
            type: 'select',
            label: 'Currency',
            placeholder: 'Currency',
            options: CurrencyCodeOptions,
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
    title: 'Export enquiry',
    options: [
      {
        id: 'yes',
        item: 'Yes',
      },
      {
        id: 'no',
        item: 'No',
      },
    ],
    items: {
      yes: {
        form: [{ title: 'Export', id: 'export', items: Export.items }],
      },
      no: { form: [] },
    },
  },
  policy: {
    form: [
      {
        id: 'policy',
        title: 'Policy',
        items: [
          {
            id: 'productDifference',
            type: 'select',
            label: 'Product Differ from Image',
            placeholder: 'Product Differ from Image',
            options: DifferOptions,
          },
          {
            id: 'quantityShortage',
            type: 'select',
            label: 'Quantity Shortage',
            placeholder: 'Quantity Shortage',
            options: ShortageOptions,
          },
          {
            id: 'articleColourBleed',
            type: 'select',
            label: 'Article Colour Bleed',
            placeholder: 'Article Colour Bleed',
            options: ArticleColourBleedOptions,
          },
          {
            id: 'paymentModeRefund',
            type: 'select',
            label: 'Payment Mode - Refund',
            placeholder: 'Payment Mode - Refund',
            options: PaymentModeOptions,
          },
          {
            id: 'warrantyPeriod',
            type: 'select',
            label: 'Warranty Period',
            placeholder: 'Warranty Period',
            options: WarrantyPeriodOptions,
          },
          {
            id: 'exportQualityStandard',
            type: 'text',
            label: 'Export Quality Standard',
            placeholder: 'Export Quality Standard',
          },
          {
            id: 'refundAmount',
            type: 'select',
            label: 'Refund Amount',
            placeholder: 'Refund Amount',
            options: RefundOnCancellationOptions,
          },
          {
            id: 'damagedArticle',
            type: 'select',
            label: 'Damaged Article',
            placeholder: 'Damaged Article',
            options: DamagedArticleOptions,
          },
          {
            id: 'qcCharges',
            type: 'select',
            label: 'QC Charges',
            placeholder: 'QC Charges',
            options: QcChargesOptions,
          },
          {
            id: 'productDeadOnArrival',
            type: 'select',
            label: 'Product Dead On Arrival',
            placeholder: 'Product Dead On Arrival',
            options: ProductDeadOnArrivalOptions,
          },
          {
            id: 'sizeRatioWrongPacking',
            type: 'select',
            label: 'Size Ratio / Wrong Packing',
            placeholder: 'Size Ratio / Wrong Packing',
            options: SizeDifferenceOptions,
          },
          {
            id: 'returnLogisticCharges',
            type: 'select',
            label: 'Return Logistic Charges',
            placeholder: 'Return Logistic Charges',
            options: LogisticChargesOnReturnOptions,
          },
          {
            id: 'internationalTradeRejection',
            type: 'select',
            label: 'International Trade Rejection',
            placeholder: 'International Trade Rejection',
            options: InternationalTradeRejectionOptions,
          },
          {
            id: 'customizeOrder',
            type: 'select',
            label: 'Customize Order',
            placeholder: 'Customize Order',
            options: CustomizedMakeToOrderOptions,
          },
          {
            id: 'delayInSupplyPenalty',
            type: 'select',
            label: 'Delay in Supply - Penalty',
            placeholder: 'Delay in Supply - Penalty',
            options: DelayInSupplyPenaltyOptions,
          },
          {
            id: 'blaunkChargesOnCancellation',
            type: 'select',
            label: 'Blaunk Charges on Cancellation',
            placeholder: 'Blaunk Charges on Cancellation',
            options: BlaunkChargesOnCancellationOptions,
          },
          {
            id: 'reportAnIssuePenalty',
            type: 'select',
            label: 'Report an Issue - Penalty',
            placeholder: 'Report an Issue - Penalty',
            options: ReportAnIssueOptions,
          },
          {
            id: 'sampleOnRequest',
            type: 'select',
            label: 'Sample on Request',
            placeholder: 'Sample on Request',
            options: SampleOnRequestOptions,
          },
          {
            id: 'vendorPayment',
            type: 'select',
            label: 'Vendor Payment',
            placeholder: 'Vendor Payment',
            options: VendorPaymentAfterDeliveryOptions,
          },
          {
            id: 'cancellationPolicy',
            type: 'select',
            label: 'Cancellation Policy',
            placeholder: 'Cancellation Policy',
            options: CancellationPolicyOptions,
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
