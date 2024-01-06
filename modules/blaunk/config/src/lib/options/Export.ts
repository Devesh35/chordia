import { FormSection } from '@li/types/design';

export const Export: FormSection = {
  id: 'export-details',
  title: 'Export details',
  items: [
    {
      id: 'certification',
      label: 'Certification',
      placeholder: 'FSSAI/ISO/AGMARK/...',
    },
    {
      id: 'shippingPort',
      label: 'Shipping Port',
      placeholder: 'Chennai, Mumbai...',
    },
    {
      id: 'shippingTerms',
      label: 'Shipping Terms',
      placeholder: 'FOB,CIF...',
    },
    {
      id: 'terms',
      label: 'Terms',
      placeholder: 'LC @SIGHT...',
    },
    {
      id: 'advancePayment',
      label: 'Advance Payment',
      placeholder: '5%...',
    },
    {
      id: 'minDaysDelivery',
      label: 'Min Days Delivery',
      placeholder: '45...',
    },
    {
      id: 'exportMinQty',
      label: 'Export Min Qty',
      placeholder: '5000pcs/kgs...',
    },
    {
      id: 'codWithinCountry',
      label: 'COD Within Country',
      placeholder: 'YES/NO...',
    },
    {
      id: 'exportLicense',
      label: 'Export License',
      placeholder: 'AVAILABLE/AGENT...',
    },
    {
      id: 'origin',
      label: 'Origin',
      placeholder: 'WITHIN COUNTRY...',
    },
  ],
};
