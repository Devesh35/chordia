import { FormSectionGroup } from '@li/types/design';
import { tourSegmentOptions } from '../Tour';
import { Address } from '../Address';

const tourSection = {
  'tour-details': {
    form: ['details', 'address'],
  },
  'tour-desc': {
    form: ['description', 'highlights'],
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
      {
        id: 'highlights',
        title: 'Highlights',
        items: [
          {
            id: 'safety-hygiene',
            label: 'Safety and Hygiene',
            placeholder: 'Safety and Hygiene',
            type: 'area',
          },
          {
            id: 'basic-facilities',
            label: 'Basic Facilities',
            placeholder: 'Basic Facilities',
            type: 'area',
          },
          {
            id: 'facilities',
            label: 'Facilities',
            placeholder: 'Facilities',
            type: 'area',
          },
          {
            id: 'food-drinks',
            label: 'Food and Drinks',
            placeholder: 'Food and Drinks',
            type: 'area',
          },
          {
            id: 'nearby-attraction',
            label: 'Nearby Attraction',
            placeholder: 'Nearby Attraction',
            type: 'area',
          },
          {
            id: 'amenities',
            label: 'Amenities',
            placeholder: 'Amenities',
            type: 'area',
          },
        ],
      },
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