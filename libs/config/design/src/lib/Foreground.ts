import { css } from '@emotion/react';
import { ColorKeys, Colors, Transparent } from './Colors';

export const Foreground = {
  color: (color: ColorKeys) => css`
    color: ${Colors[color]};
  `,
  transparent: (color: ColorKeys, alpha: number) => css`
    color: ${Transparent(Colors[color], alpha)};
  `,
};
