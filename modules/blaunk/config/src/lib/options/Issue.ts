import { optionsFromStrings } from '@li/config/utils';

const issues = [
  'Images',
  'Product name',
  'Bullet points',
  'Other product details',
];

export const IssueOptions = optionsFromStrings(issues);
