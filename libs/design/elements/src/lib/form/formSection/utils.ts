import { grid } from '@li/config/design';
import clsx from 'clsx';

export const inlineFormItemStyles = clsx(grid[`col-4`], grid['col-t-4'], grid['col-m-6']);
export const blockFormItemStyles = clsx(grid[`col-2`], grid['col-t-3'], grid['col-m-6']);
