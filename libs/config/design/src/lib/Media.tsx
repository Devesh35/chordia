'use client';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import Responsive, { useMediaQuery } from 'react-responsive';

type CSSInterpolation = Parameters<typeof css>[0];
type MediaQueryProps = React.ComponentProps<typeof Responsive>;

const breakpoint = {
  Large: 1920,
  Desktop: 1280,
  Small: 1024,
  Tablet: 768,
  Mobile: 480,
} as const;
type BreakPointKeys = keyof typeof breakpoint;
type Breakpoint = (typeof breakpoint)[BreakPointKeys];

const buildMax = (maxWidth: Breakpoint) => `(max-width: ${maxWidth}px)`;

const conditions: { [k in BreakPointKeys]: string } = {
  Large: buildMax(breakpoint.Large),
  Desktop: buildMax(breakpoint.Desktop),
  Small: buildMax(breakpoint.Small),
  Tablet: buildMax(breakpoint.Tablet),
  Mobile: buildMax(breakpoint.Mobile),
};

const mqWrapper =
  (param: string) =>
  (first: TemplateStringsArray, ...interpolations: CSSInterpolation[]) => {
    return css`
      @media ${param} {
        ${css(first, ...interpolations)};
      }
    `;
  };
const useHydrationProps = () => {
  const [isHydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  // This renders the app with width 1280.
  // After hydration things are calculated on client side.
  return isHydrated ? undefined : { deviceWidth: 1280 };
};
/**
 * Hook API for checking matching media query
 */
export const useMedia = (size: BreakPointKeys) => {
  return useMediaQuery({ query: conditions[size] });
};
/**
 * Media query helpers
 */
export const media = {
  large: mqWrapper(conditions.Large),
  desktop: mqWrapper(conditions.Desktop),
  small: mqWrapper(conditions.Small),
  tablet: mqWrapper(conditions.Tablet),
  mobile: mqWrapper(conditions.Mobile),
};
/**
 * Media query components
 */
export const MediaQuery = {
  Large: (props: MediaQueryProps) => {
    const hydrationProps = useHydrationProps();
    return (
      <Responsive {...props} {...hydrationProps} maxWidth={breakpoint.Large} />
    );
  },
  Desktop: (props: MediaQueryProps) => {
    const hydrationProps = useHydrationProps();
    return (
      <Responsive
        {...props}
        {...hydrationProps}
        maxWidth={breakpoint.Desktop}
      />
    );
  },
  Small: (props: MediaQueryProps) => {
    const hydrationProps = useHydrationProps();
    return (
      <Responsive {...props} {...hydrationProps} maxWidth={breakpoint.Small} />
    );
  },
  Tablet: (props: MediaQueryProps) => {
    const hydrationProps = useHydrationProps();
    return (
      <Responsive {...props} {...hydrationProps} maxWidth={breakpoint.Tablet} />
    );
  },
  Mobile: (props: MediaQueryProps) => {
    const hydrationProps = useHydrationProps();
    return (
      <Responsive {...props} {...hydrationProps} maxWidth={breakpoint.Mobile} />
    );
  },
};
