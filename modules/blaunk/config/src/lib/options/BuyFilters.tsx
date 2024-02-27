import { optionsFromStrings } from '@li/config/utils';
import { Rating } from '@li/design/elements';

const price = ['Low to High', 'High to Low'];

export const PriceSortOptions = optionsFromStrings(price);

export const RatingOptions = [
  { id: 'One', item: <Rating rating={1} max={1} size="small" /> },
  { id: 'Two', item: <Rating rating={2} max={2} size="small" /> },
  { id: 'Three', item: <Rating rating={3} max={3} size="small" /> },
  { id: 'Four', item: <Rating rating={4} max={4} size="small" /> },
  { id: 'Five', item: <Rating rating={5} max={5} size="small" /> },
];
