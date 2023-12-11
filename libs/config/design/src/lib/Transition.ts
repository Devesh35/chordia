import { css } from '@emotion/react';

const Duration = {
  slow: 500,
  medium: 300,
  fast: 200,
  veryFast: 100,
};

export const TransitionDuration = {
  slow: css`
    transition-duration: ${Duration.slow}ms;
  `,
  medium: css`
    transition-duration: ${Duration.medium}ms;
  `,
  fast: css`
    transition-duration: ${Duration.fast}ms;
  `,
  veryFast: css`
    transition-duration: ${Duration.veryFast}ms;
  `,
};

export const TransitionTimingFunctions = {
  default: css`
    transition-timing-function: ease-in-out;
  `,
  ease: css`
    transition-timing-function: ease;
  `,
  easeOut: css`
    transition-timing-function: ease-out;
  `,
  easeIn: css`
    transition-timing-function: ease-in;
  `,
};

export const TransitionProperty = (name: string) => css`
  transition: ${name};
`;

export const TransitionDelay = (delay: string) => css`
  transition-delay: ${delay};
`;
