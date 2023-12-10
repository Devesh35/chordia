import { css } from '@emotion/react';

export const Overflow = {
  hidden: css`
    overflow: hidden;
  `,
  scroll: (dir?: 'x' | 'y') =>
    dir
      ? css`
        overflow-${dir}: scroll;
        overflow-${dir === 'x' ? 'y' : 'x'}: hidden;
      `
      : css`
          overflow: scroll;
        `,
};
