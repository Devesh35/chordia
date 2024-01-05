import { FormSection } from "@li/types/design";

export const storeSection = [
  'productDetails',
  'purchaseDetails',
  'highlights',
] as const;

type StoreSectionId = (typeof storeSection)[number];

export const storeSections: {
  [key in StoreSectionId]: FormSection;
} = {
  productDetails: {
    label: 'Product details',
    items: [
      { label: 'P.O.', placeholder: 'P.O.' },
      { label: 'Bill No.', placeholder: 'Bill No' },
      { label: 'Eway No.', placeholder: 'Eway No,' },
      { label: 'Date', placeholder: 'Date', type: 'date' },
      { label: 'Cargo', placeholder: 'Cargo' },
    ],
  },
  purchaseDetails: {
    label: 'Purchase details',
    items: [
      { label: 'Group', placeholder: 'Group' },
      { label: 'Segment', placeholder: 'Segment' },
      { label: 'Article', placeholder: 'Article' },
      { label: 'Brand', placeholder: 'Brand' },
      { label: 'HSN Code', placeholder: 'HSN Code' },
      { label: 'U Code', placeholder: 'U Code' },
      { label: 'MRP', placeholder: 'MRP' },
      { label: 'POS', placeholder: 'POS' },
      { label: 'GST', placeholder: 'GST' },
      { label: 'GST %', placeholder: 'GST %' },
      { label: 'Discount', placeholder: 'Discount' },
      { label: 'Exp. date', placeholder: 'Exp. date' },
      { label: 'Weight', placeholder: 'Weight' },
      { label: 'Origin', placeholder: 'Origin' },
      { label: 'Pdt Code', placeholder: 'Pdt Code' },
      { label: 'Mfr name', placeholder: 'Mfr name' },
      { label: 'Deal', placeholder: 'Deal' },
      { label: 'Location', placeholder: 'Location' },
      { label: 'Supply', placeholder: 'Supply' },
      { label: 'Commission', placeholder: 'Commission' },
      { label: 'COM details', placeholder: 'COM details' },
      { label: 'BK Assure', placeholder: 'BK Assure' },
    ],
  },
  highlights: {
    label: 'Highlights',
    items: [
      { label: 'Tags', placeholder: 'Tags (Comma separated)', type: 'area' },
    ],
  },
};
