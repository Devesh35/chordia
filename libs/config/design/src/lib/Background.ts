import { css } from '@emotion/react';
import { ColorKeys, Colors, Transparent } from './Colors';
import { Direction } from './types';

export const Background = {
  color: (color: ColorKeys) => css`
    background-color: ${Colors[color]};
  `,
  transparent: (color: ColorKeys, alpha: number) => css`
    background-color: ${Transparent(Colors[color], alpha)};
  `,
  gradient: (direction: Direction, ...color: string[]) => css`
    background: linear-gradient(${direction}, ${color.join(', ')});
  `,
};
