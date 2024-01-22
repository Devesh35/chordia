import { optionsFromStrings } from '@li/config/utils';

const tourSegment = [
  'Hotel',
  'Resort',
  'Service Apartment',
  'Package Tour',
  'Cake',
  'Buffet Lunch',
  'Event',
  'Banquet/Event Hall',
];

export const tourSegmentOptions = optionsFromStrings(tourSegment);
