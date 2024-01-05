import { FormSection } from '@li/types/design';

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
    id: 'product-details',
    label: 'Product details',
    items: [
      { id: 'p.o.', label: 'P.O.', placeholder: 'P.O.' },
      { id: 'bill no.', label: 'Bill No.', placeholder: 'Bill No' },
      { id: 'eway no.', label: 'Eway No.', placeholder: 'Eway No,' },
      { id: 'date', label: 'Date', placeholder: 'Date', type: 'date' },
      { id: 'cargo', label: 'Cargo', placeholder: 'Cargo' },
    ],
  },
  purchaseDetails: {
    id: 'purchase-details',
    label: 'Purchase details',
    items: [
      { id: 'group', label: 'Group', placeholder: 'Group' },
      { id: 'segment', label: 'Segment', placeholder: 'Segment' },
      { id: 'article', label: 'Article', placeholder: 'Article' },
      { id: 'brand', label: 'Brand', placeholder: 'Brand' },
      { id: 'hsn code', label: 'HSN Code', placeholder: 'HSN Code' },
      { id: 'u code', label: 'U Code', placeholder: 'U Code' },
      { id: 'mrp', label: 'MRP', placeholder: 'MRP' },
      { id: 'pos', label: 'POS', placeholder: 'POS' },
      { id: 'gst', label: 'GST', placeholder: 'GST' },
      { id: 'gst %', label: 'GST %', placeholder: 'GST %' },
      { id: 'discount', label: 'Discount', placeholder: 'Discount' },
      { id: 'exp. date', label: 'Exp. date', placeholder: 'Exp. date' },
      { id: 'weight', label: 'Weight', placeholder: 'Weight' },
      { id: 'origin', label: 'Origin', placeholder: 'Origin' },
      { id: 'pdt code', label: 'Pdt Code', placeholder: 'Pdt Code' },
      { id: 'mfr name', label: 'Mfr name', placeholder: 'Mfr name' },
      { id: 'deal', label: 'Deal', placeholder: 'Deal' },
      { id: 'location', label: 'Location', placeholder: 'Location' },
      { id: 'supply', label: 'Supply', placeholder: 'Supply' },
      { id: 'commission', label: 'Commission', placeholder: 'Commission' },
      { id: 'com details', label: 'COM details', placeholder: 'COM details' },
      { id: 'bk assure', label: 'BK Assure', placeholder: 'BK Assure' },
    ],
  },
  highlights: {
    id: 'highlights',
    label: 'Highlights',
    items: [
      {
        id: 'tags',
        label: 'Tags',
        placeholder: 'Tags (Comma separated)',
        type: 'area',
      },
    ],
  },
};
