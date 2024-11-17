import { optionsFromStrings } from '@li/config/utils';

const differ = ['N.A', 'Might vary slightly'] as const;
const shortage = ['Full Refund', '@ Buyer Risk', 'NA'] as const;
const articleColourBleed = ['NA', 'Full Refund', 'No guarantee'] as const;
const paymentMode = ['MONEY BACK', 'EXCHANGE', 'SERVICE'] as const;
const warrantyPeriod = [
  'Under Product warranty',
  'Under Manufacturer Warranty',
  'Under Sellers Warranty',
  'NA',
  'Guarantee',
] as const;
const refundOnCancellation = [
  'within 4 days',
  'Within 5 days',
  'Within 8 days',
  'Within 7 days',
  'Within10 days',
  'Immediate',
  'NA',
  'No Refund on Cancellation',
  'Only Exchange',
] as const;
const damagedArticle = ['Full Refund', 'Replacement', 'NA'] as const;
const qcCharges = ['Additional Fees', 'NA', 'Free', 'Factory Check', 'Not Allowed', 'Third Party QC'] as const;
const productDeadOnArrival = ['Full Refund', 'Replacement', 'NA'] as const;
const negotiable = ['No', 'Yes', 'Cash discount', 'Max.Quantity discount'] as const;
const sizeDifference = ['Full Refund', 'Replacement', 'NA'] as const;
const logisticChargesOnReturn = [
  'Return To & Fro',
  'One side only',
  'Both Party Contribution',
  'On Arrival Payment to 3PL',
  '100% Advance to 3 PL',
  '100% Advance',
  'COD on Delivery to Port',
  'COD Point-To-Point Delivery',
  'NA',
] as const;
const internationalTradeRejection = ['No Refund', 'No Exchange', 'N.A'] as const;
const customizedMakeToOrder = ['No cancellation', 'Penalty', 'NA', 'Applicable'] as const;
const delayInSupplyPenalty = ['Penalty for every 2 days delay (0.05% add on)'] as const;
const blaunkChargesOnCancellation = ['Levied on Buyer'] as const;
const reportAnIssue = ['Penalty will be levied on Seller'] as const;
const sampleOnRequest = [
  'NA',
  'Free',
  'Chargeable',
  'MRP+Logistic',
  'Cost+Logistic',
  'Only Courier charges',
  '@ MRP Cost',
] as const;
const vendorPaymentAfterDelivery = ['Within 4-7 working days'] as const;
const cancellationPolicy = [
  'Within 1 Hour',
  'Within 2 Hours',
  'Within 4 Hours',
  'Same day',
  'One day prior',
  'No cancellation',
];

export const DifferOptions = optionsFromStrings(differ);
export const ShortageOptions = optionsFromStrings(shortage);
export const ArticleColourBleedOptions = optionsFromStrings(articleColourBleed);
export const PaymentModeOptions = optionsFromStrings(paymentMode);
export const WarrantyPeriodOptions = optionsFromStrings(warrantyPeriod);
export const RefundOnCancellationOptions = optionsFromStrings(refundOnCancellation);
export const DamagedArticleOptions = optionsFromStrings(damagedArticle);
export const QcChargesOptions = optionsFromStrings(qcCharges);
export const ProductDeadOnArrivalOptions = optionsFromStrings(productDeadOnArrival);
export const NegotiableOptions = optionsFromStrings(negotiable);
export const SizeDifferenceOptions = optionsFromStrings(sizeDifference);
export const LogisticChargesOnReturnOptions = optionsFromStrings(logisticChargesOnReturn);
export const InternationalTradeRejectionOptions = optionsFromStrings(internationalTradeRejection);
export const CustomizedMakeToOrderOptions = optionsFromStrings(customizedMakeToOrder);
export const DelayInSupplyPenaltyOptions = optionsFromStrings(delayInSupplyPenalty);
export const BlaunkChargesOnCancellationOptions = optionsFromStrings(blaunkChargesOnCancellation);
export const ReportAnIssueOptions = optionsFromStrings(reportAnIssue);
export const SampleOnRequestOptions = optionsFromStrings(sampleOnRequest);
export const VendorPaymentAfterDeliveryOptions = optionsFromStrings(vendorPaymentAfterDelivery);
export const CancellationPolicyOptions = optionsFromStrings(cancellationPolicy);
