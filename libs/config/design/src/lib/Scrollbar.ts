import { css } from '@emotion/react';
import { BorderRadius } from './BorderRadius';
import { Colors } from './Colors';

export const ScrollBar = {
  none: css`
    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  `,
  default: css`
    scrollbar-width: 6px;
    scrollbar-height: 6px;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background: ${Colors.Transparent};
    }
    &::-webkit-scrollbar-track {
      margin: 4px 0;
      background: ${Colors.Transparent};
      ${BorderRadius.Small}
    }
    &::-webkit-scrollbar-thumb {
      background: ${Colors.Primary050};
      ${BorderRadius.Small}
    }
  `,
};
