import { useMediaQuery } from 'react-responsive';

enum Breakpoint {
  Large = 1159,
  Desktop = 1200,
  Custom = 1261,
  TabletTill = 1199,
  TabletFrom = 898,
  MobileTill = 897,
  MobileSmallTill = 356,
}

const buildCondition = (minWidth?: Breakpoint, maxWidth?: Breakpoint, extraCondition?: string) => {
  const result: string[] = [];

  if (minWidth) result.push(`(min-width: ${minWidth}px)`);
  if (maxWidth) result.push(`(max-width: ${maxWidth}px)`);

  const query = result.join(' and ');

  return extraCondition ? `${query} ${extraCondition}` : query;
};

type SupportedSizes = 'desktop' | 'tablet' | 'mobile' | 'custom';

type CustomOptions = {
  width: number;
  condition: 'min' | 'max';
};

const conditions = {
  desktop: buildCondition(Breakpoint.Desktop),
  tablet: buildCondition(Breakpoint.TabletFrom, Breakpoint.TabletTill),
  mobile: buildCondition(undefined, Breakpoint.MobileTill),
  custom: buildCondition(Breakpoint.Desktop, Breakpoint.Custom),
};

/**
 * Hook API for checking matching media query
 */
export const useMedia = (size: SupportedSizes = 'mobile', options?: CustomOptions) => {
  const queryCondition =
    size === 'custom' && options ? `(${options.condition}-width: ${options.width}px)` : conditions[size];

  return useMediaQuery({ query: queryCondition });
};
