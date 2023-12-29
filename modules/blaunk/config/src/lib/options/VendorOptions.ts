import { optionsFromStrings } from '@li/config/utils';

export const Purpose = [
  { id: 'selling', label: 'For selling' },
  { id: 'buying', label: 'For buying' },
  { id: 're_selling', label: 'For reselling' },
];

const vendorFirm = [
  'Proprietorship',
  'Partnership',
  'LLP',
  'Pvt. Ltd',
  'Limited',
  'Cooperative',
];
export const VendorFirm = optionsFromStrings(vendorFirm);

const vendorIndustrySector = [
  'FMCG',
  'Garments',
  'Pharmaceutical',
  'Chemicals',
];
export const VendorIndustrySector = optionsFromStrings(vendorIndustrySector);

const vendorCertificate = ['ISO', 'Food safety', 'BIS', 'Drugs', 'Trademark'];
export const VendorCertificate = optionsFromStrings(vendorCertificate);

const vendorFirmBranchCount = ['0-1', '2-5', '6-10', '11-24', '25+'];
export const VendorFirmBranchCount = optionsFromStrings(vendorFirmBranchCount);

const vendorNumberOfEmployees = [
  '0-10',
  '11-50',
  '51-100',
  '101-500',
  '501-1000',
  '1001-10000',
  '10001+',
];

export const VendorNumberOfEmployees = optionsFromStrings(
  vendorNumberOfEmployees,
);

const vendorResponseTime = ['0-1', '1-2', '2-3', '3-6', 'up to 12', 'up to 24'];
export const VendorResponseTime = optionsFromStrings(vendorResponseTime);
const vendorLanguage = ['English', 'Hindi', 'Tamil', 'Urdu', 'Arabic'];
export const VendorLanguage = optionsFromStrings(vendorLanguage);
