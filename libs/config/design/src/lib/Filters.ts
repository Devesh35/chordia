import { css } from '@emotion/react';
import { Position } from './Position';
import { Cursor } from './Cursor';
import { Colors } from './Colors';

export const FiltersAB = {
  gradientOverlayHorizontal: css`
    ${Position.relative};
    &::after {
      content: '';
      ${Position.absolute}
      inset: 0;
      background: linear-gradient(
        to right,
        ${Colors.Primary050} 0%,
        ${Colors.Transparent} 7.5%,
        ${Colors.Transparent} 92.5%,
        ${Colors.Primary050} 100%
      );
      ${Cursor.noEvents}
    }
  `,
};
