import { css } from '@emotion/react';
import { Prop, getCSS } from './utils';

export const Size = {
  full: css`
    width: 100%;
    height: 100%;
  `,
  fullMax: css`
    max-width: 100%;
    max-height: 100%;
  `,
  fullWidth: css`
    width: 100%;
  `,
  fullHeight: css`
    height: 100%;
  `,
  width: (d: Prop, bounds?: { min?: Prop; max?: Prop }) => css`
    ${getCSS('width', d, true)}
    ${getCSS('min-width', bounds?.min, true)}
    ${getCSS('max-width', bounds?.max, true)}
  `,
  height: (d: Prop, bounds?: { min?: Prop; max?: Prop }) => css`
    ${getCSS('height', d, true)}
    ${getCSS('min-height', bounds?.min, true)}
    ${getCSS('max-height', bounds?.max, true)}
  `,
  minWidth: (min: Prop) => css`
    ${getCSS('min-width', min, true)}
  `,
  maxWidth: (max: Prop) => css`
    ${getCSS('max-width', max, true)}
  `,
  minHeight: (min: Prop) => css`
    ${getCSS('min-height', min, true)}
  `,
  maxHeight: (max: Prop) => css`
    ${getCSS('max-height', max, true)}
  `,
};
