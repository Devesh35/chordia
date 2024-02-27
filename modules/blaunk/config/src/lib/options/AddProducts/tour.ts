import { FormSectionGroup } from '@li/types/design';
import { tourSegmentOptions } from '../Tour';
import { Address } from '../Address';
import { ArrivingTimeOptions, SpecialRequestsOptions } from '../BuyProducts';
import { YesNoOptions } from '../General';

const tourSection = {
  'tour-details': {
    form: ['details', 'address'],
  },
  'tour-desc': {
    form: [
      'description',
      // 'highlights'
    ],
  },
  'tour-image': {
    document: ['images'],
  },
} as const;

export const TourProductDetails: FormSectionGroup<typeof tourSection> = {
  'tour-details': {
    form: [
      {
        id: 'details',
        title: 'Tour details',
        items: [
          {
            id: 'Segment',
            label: 'Segment',
            placeholder: 'Segment',
            type: 'select',
            options: tourSegmentOptions,
          },
          {
            id: 'name',
            label: 'Name',
            placeholder: 'Name',
            type: 'text',
          },
          {
            id: 'currency',
            label: 'Currency',
            placeholder: 'Currency',
            type: 'text',
          },
          {
            id: 'special',
            label: 'Special request',
            placeholder: 'Special request',
            type: 'select',
            options: SpecialRequestsOptions,
          },
          {
            id: 'timing',
            label: 'Timing',
            placeholder: 'Timing',
            type: 'select',
            options: ArrivingTimeOptions,
          },
          {
            id: 'availability',
            label: 'Availability',
            placeholder: 'Availability',
            type: 'select',
            options: YesNoOptions,
          },
          {
            id: 'deal',
            label: 'Deal',
            placeholder: 'Deal',
            type: 'text',
          },
          {
            id: 'size',
            label: 'Size (Sq.ft.)',
            placeholder: 'Size',
            type: 'number',
          },
        ],
      },
      Address,
    ],
  },
  'tour-desc': {
    form: [
      {
        id: 'description',
        title: 'Description',
        items: [
          {
            id: 'description',
            label: 'Description',
            placeholder: 'Description',
            type: 'area',
          },
        ],
      },
      // {
      //   id: 'highlights',
      //   title: 'Highlights',
      //   items: [
      //     {
      //       id: 'safety-hygiene',
      //       label: 'Safety and Hygiene',
      //       placeholder: 'Safety and Hygiene',
      //       type: 'area',
      //     },
      //     {
      //       id: 'basic-facilities',
      //       label: 'Basic Facilities',
      //       placeholder: 'Basic Facilities',
      //       type: 'area',
      //     },
      //     {
      //       id: 'facilities',
      //       label: 'Facilities',
      //       placeholder: 'Facilities',
      //       type: 'area',
      //     },
      //     {
      //       id: 'food-drinks',
      //       label: 'Food and Drinks',
      //       placeholder: 'Food and Drinks',
      //       type: 'area',
      //     },
      //     {
      //       id: 'nearby-attraction',
      //       label: 'Nearby Attraction',
      //       placeholder: 'Nearby Attraction',
      //       type: 'area',
      //     },
      //     {
      //       id: 'amenities',
      //       label: 'Amenities',
      //       placeholder: 'Amenities',
      //       type: 'area',
      //     },
      //   ],
      // },
    ],
  },
  'tour-image': {
    document: [
      {
        id: 'images',
        title: 'Tour Image',
        items: Array.from({ length: 10 }, (_, i) => ({
          id: `images${i}`,
          label: 'Image',
        })),
      },
    ],
  },
};
