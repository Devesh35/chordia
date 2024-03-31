import { optionsFromStrings } from '@li/config/utils';

export const Grade = ['Platinum', 'Gold', 'Silver', 'Bronze'] as const;

export const GradeOptions = optionsFromStrings(Grade);
