import { css } from '@emotion/react';
import { ColorKeys, Colors } from './Colors';

export const Border = {
  none: css`
    border: none;
  `,
  color: (color: ColorKeys) => css`
    border-color: ${Colors[color]};
  `,
  simple: (color: ColorKeys) => css`
    border: 1px solid ${Colors[color]};
  `,
  medium: (color: ColorKeys) => css`
    border: 2px solid ${Colors[color]};
  `,
  large: (color: ColorKeys) => css`
    border: 4px solid ${Colors[color]};
  `,
};
