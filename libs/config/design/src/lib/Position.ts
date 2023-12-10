import { css } from '@emotion/react';

export const Position = {
  absolute: css`
    position: absolute;
  `,
  relative: css`
    position: relative;
  `,
};

export const Absolute = {
  centerHorizontally: css`
    left: 50%;
    transform: translate(-50%, 0);
  `,
  centerVertically: css`
    top: 50%;
    transform: translate(0, -55%);
  `,
};
