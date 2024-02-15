import { optionsFromStrings } from '@li/config/utils';

const propertyType = ['Hotel'];

export const PropertyTypeOptions = optionsFromStrings(propertyType);

const landmark = [
  'Airport',
  'Amusement Park',
  'Bus stand',
  'Church',
  'College',
  'Lake',
  'Metro',
  'Railway station',
  'School',
  'Sea',
  'Shopping Mall',
  'Taxi stand',
];

export const LandmarkOptions = optionsFromStrings(landmark);

const arrivingTime = [
  '12:00 AM - 01:00 AM',
  '01:00 AM - 02:00 AM',
  '02:00 AM - 03:00 AM',
  '03:00 AM - 04:00 AM',
  '04:00 AM - 05:00 AM',
  '05:00 AM - 06:00 AM',
  '06:00 AM - 07:00 AM',
  '07:00 AM - 08:00 AM',
  '08:00 AM - 09:00 AM',
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 01:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
  '06:00 PM - 07:00 PM',
  '07:00 PM - 08:00 PM',
  '08:00 PM - 09:00 PM',
  '09:00 PM - 10:00 PM',
  '10:00 PM - 11:00 PM',
  '11:00 PM - 12:00 AM',
];

export const ArrivingTimeOptions = optionsFromStrings(arrivingTime);

const roomRequest = Array.from({ length: 10 }, (_, i) => `${i + 1}`);

export const RoomRequestOptions = optionsFromStrings(roomRequest);

const specialRequests = [
  'Request for Butler',
  'Request for Rooms Noise free',
  'Request for Room with View',
  'Req for High Floor Rooms',
  'Cost Early check-in 1-2 Hours',
  'Possible for 1 day additional nights at the Hotel',
  'Request for transportation to & fro from airport',
  'Request for Meeting Room',
  'Request for Guide for Local recommendation',
];

export const SpecialRequestsOptions = optionsFromStrings(specialRequests);

export const AmenitiesItems = [
  {
    title: 'Safety & hygiene',
    color: '#FDE9DA',
    items: [
      'Face shield',
      'Sanitizer',
      'On call doctor',
      'Fire extinguisher',
      'Locker',
      'CCTV',
      'Bath kit',
    ],
  },
  {
    title: 'Basic facilities',
    color: '#DCDDFE',

    items: [
      'Swimming pool',
      'Free parking',
      'Wheelchair',
      'Restaurant & Bar',
      'Gym',
      'Wake-up call',
      'Kids play zone',
    ],
  },
  {
    title: 'Distance (in km)',
    color: '#F3DCDC',

    items: [
      'Airport',
      'Metro',
      'Taxi stand',
      'Railway station',
      'Bus stand',
      'Hospital',
      'Shopping Mall',
    ],
  },
  {
    title: 'Paid Add-On',
    color: '#E6E0ED',

    items: [
      'Guide',
      'Luxury car',
      'SPA',
      'Butler',
      'Adventure games',
      'Meeting room',
      'Airport hassle',
    ],
  },
  {
    title: 'Cuisine',
    color: '#DCDAC1',

    items: [
      'Mexican',
      'Jain',
      'Indian',
      'Italian',
      'Thai',
      'Arabic',
      'Japanese',
    ],
  },
  {
    title: 'Amenities',
    color: '#FFFFCD',

    items: [
      'Ironing',
      'Refrigerator',
      'Room heater',
      'News paper',
      'Tea/Coffee maker',
      'Fruit basket',
      'Welcome drink',
    ],
  },
];
