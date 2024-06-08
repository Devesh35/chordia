import { optionsFromStrings } from '@li/config/utils';

export const Purpose = [
  { id: 'buying', label: 'For buying' },
  { id: 're_selling', label: 'For reselling' },
  { id: 'looking_for_vendor', label: 'Looking for vendor' },
  { id: 'looking_for_agent', label: 'Looking for Agent' },
  { id: 'looking_for_distributor', label: 'Looking For Distributor' },
  { id: 'looking_for_dealer', label: 'Looking For Dealer' },
  { id: 'looking_for_c_f', label: 'Looking For C&F' },
];

const vendorRequirement = [
  'Assorted Articles',
  'Customized Articles',
  'Day package',
  'Export Enquiry',
  'Export Quality ',
  'Factory Second Articles',
  'Organic Articles',
  'Packed Articles',
  'Partially Damaged Articles',
  'QC Done',
  'QC Required',
  'Refurbished Articles',
  'Sell Within Country',
  'Unpacked Articles',
  'Others',
] as const;
export const VendorRequirementOptions = optionsFromStrings(vendorRequirement);

const vendorFirm = [
  'Proprietorship',
  'Partnership',
  'LLP',
  'Pvt. Ltd',
  'Limited',
  'Cooperative',
] as const;
export const VendorFirm = optionsFromStrings(vendorFirm);

const vendorIndustrySector = [
  'FMCG',
  'Garments',
  'Pharmaceutical',
  'Chemicals',
] as const;
export const VendorIndustrySector = optionsFromStrings(vendorIndustrySector);

const vendorCertificate = [
  'ISO',
  'Food safety',
  'BIS',
  'MSME',
  'Drugs',
  'Trademark',
] as const;
export const VendorCertificate = optionsFromStrings(vendorCertificate);

const vendorFirmBranchCount = ['0-1', '2-5', '6-10', '11-24', '25+'] as const;
export const VendorFirmBranchCount = optionsFromStrings(vendorFirmBranchCount);

const vendorNumberOfEmployees = [
  '0-10',
  '11-50',
  '51-100',
  '101-500',
  '501-1000',
  '1001-10000',
  '10001+',
] as const;

export const VendorNumberOfEmployees = optionsFromStrings(
  vendorNumberOfEmployees,
);

const vendorResponseTime = [
  '0-1',
  '1-2',
  '2-3',
  '3-6',
  'up to 12',
  'up to 24',
] as const;
export const VendorResponseTime = optionsFromStrings(vendorResponseTime);
const vendorLanguage = ['English', 'Hindi', 'Tamil', 'Urdu', 'Arabic'] as const;
export const VendorLanguage = optionsFromStrings(vendorLanguage);

const paymentType = ['Cash', 'Debit card', 'Credit Card', 'Wallet'];
export const PaymentType = optionsFromStrings(paymentType);
