import { optionsFromStrings } from '@li/config/utils';
import { FormSection, SelectItem } from '@li/types/design';
import { CountriesOptionWithFlag } from './Country';

export type DialCategoryIdType =
  | 'healthcare'
  | 'artists'
  | 'prediction'
  | 'transport'
  | 'mechanic'
  | 'financial'
  | 'repair'
  | 'automobile'
  | 'itDevelopers'
  | 'property'
  | 'tour'
  | 'helper'
  | 'event'
  | 'eventMgt'
  | 'misc';

export const DialCategoryOptions: SelectItem<DialCategoryIdType>[] = [
  { id: 'healthcare', item: 'Healthcare' },
  { id: 'artists', item: 'Artists' },
  { id: 'prediction', item: 'Prediction Forecast' },
  { id: 'transport', item: 'Transport' },
  { id: 'mechanic', item: 'Mechanic' },
  { id: 'financial', item: 'Financial' },
  { id: 'repair', item: 'Repair' },
  { id: 'automobile', item: 'Automobile' },
  { id: 'itDevelopers', item: 'IT Developers' },
  { id: 'property', item: 'Property' },
  { id: 'tour', item: 'Tour Operator' },
  { id: 'helper', item: 'Helper' },
  { id: 'event', item: 'Event' },
  { id: 'eventMgt', item: 'Event Management' },
  { id: 'misc', item: 'Miscellaneous' },
];

const DialServices: {
  [key in DialCategoryIdType]: string[];
} = {
  healthcare: ['Hair Salon', 'Spa', 'Ayurvedic Spa', 'Chemist', 'Physiotherapist', 'Others'],
  artists: [
    'Henna Artist',
    'Tattoo Artist',
    'Makeup Artist',
    'Nail Artist',
    'Saree Draper',
    'Costume Designer',
    'Sketch Artist',
    'Portrait',
    'Sculptor',
    'Clay Artist',
    'Others',
  ],
  prediction: [
    'Pandit',
    'Priest',
    'Astrologer',
    'Palmistry',
    'Vastu',
    'Tarot Reader',
    'Numerologist',
    'Gemologist',
    'Others',
  ],
  transport: [
    'Packers & Movers',
    'Driver',
    'Fleet Agent',
    'Transporters',
    'Vehicle on rent',
    'Custom Agent',
    'Courier Services',
    'Logistics',
    'Cargo Services',
    'Others',
  ],
  mechanic: [
    'Mechanic by night',
    'All Engine Service',
    'Truck Ecm Repair',
    'Breakdown Services',
    'Bike Repairs',
    'Car Repairs',
    'Car Electrical Service',
    'Car Battery Repair',
    'Accident Towing',
    'Others',
  ],
  event: [
    'Workshops',
    'Comedy Shows',
    'Screenings',
    'Spirituality',
    'Exhibition',
    'Meetups',
    'Kids',
    'Performances',
    'Talks',
    'Festivals',
    'Conferences',
    'Sports',
    'Competitions',
    'Others',
  ],
  eventMgt: [
    'In-house decorator',
    'Outdoor decorator',
    'Wedding Planner',
    'Orchestra',
    'Balloon Arch',
    'Balloon Backdrop',
    'Sound Systems',
    'Flower Decorators',
    'Event Organizers',
    'Birthday Party Organizers',
    'Tent House',
    'Costumes on rent',
    'Office Decorators',
    'Caterers',
    'Pre wedding shoot',
    'Car decoration',
    'Pandit',
    'Anchoring Services',
    'Photographers',
    'Advertising agencies',
    'DJ',
    'Venue Selection',
    'Others',
  ],
  financial: [
    'Advisor',
    'Risk management',
    'Portfolio management',
    'Financial planning',
    'Financial Consultation',
    'Insurance agent',
    'Others',
  ],
  repair: [
    'Commercial',
    'Installation',
    'Repair and maintenance',
    'Cleaning ',
    'Emergency service',
    'Appliance repair service',
    'Others',
  ],
  automobile: [
    'Repair and maintenance',
    'Washing and cleaning',
    'Vehicle replacement ',
    'Vehicle modification',
    'Vehicle inspection',
    'Vehicle scrap',
    'Others',
  ],
  itDevelopers: [
    'Web Developer',
    'WordPress Developer',
    'Software Engineer',
    'Front-End Developer',
    'Mobile Application Developer',
    'Game Developer',
    'Back-End Developer',
    'Big Data Developer',
    'Developmental Operations Engineer',
    'Data Scientist',
    'Security Developer',
    'Graphics Developer',
    'Language developer',
    'Desktop developer',
    'Software developer',
    'Operating systems developer',
    'Embedded systems developer',
    'CRM developer',
    'Full stack developer',
    'Software Tester',
    'MERN Developer',
    'UI/UX Designer',
    'Others',
  ],
  property: [
    'Real Estate Agent',
    'Property Dealers',
    'Property Developers',
    'Property Consultants',
    'Property Valuers',
    'Property Registration Consultants',
    'Property Lawyers',
    'Others',
  ],
  tour: [
    'Flight Booking',
    'Bus Booking',
    'Railway Booking',
    'Hotel Booking',
    'Domestic Package',
    'International Package',
    ' Others',
  ],
  helper: ['House Cook', 'House Maid', 'Gardener', 'Electrician', 'Plumber', 'Carpenter', 'Others'],
  misc: ['Gym', 'Music', 'Others'],
};

export const DialServicesOptions = Object.entries(DialServices).reduce(
  (a, [k, v]) => ({ ...a, [k]: optionsFromStrings(v) }),
  {} as { [key in DialCategoryIdType]: SelectItem[] },
);

export const DialForm: FormSection = {
  id: 'dial',
  title: 'Blaunk dial',
  noHeader: true,
  items: [
    {
      id: 'country',
      label: 'Country',
      type: 'select',
      block: true,
      options: CountriesOptionWithFlag,
      placeholder: 'Select Country',
    },
    {
      id: 'pin-code',
      label: 'Zip-code/Pin-code',
      type: 'number',
      block: true,
      placeholder: 'Enter Zip-code/Pin-code',
    },
    {
      id: 'category',
      label: 'Category',
      block: true,
      type: 'select-submenu',
      options: DialCategoryOptions,
      placeholder: 'Select Category',
      optionsSub: DialServicesOptions,
      sub: {
        id: 'services',
        label: 'Services',
        placeholder: 'Select Services',
      },
    },
  ],
};
