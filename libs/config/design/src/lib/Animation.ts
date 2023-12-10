import { css, keyframes } from '@emotion/react';
import { marqueeSwitch } from './AnimationHelper';
import { Direction, DurationType } from './types';

const Duration = {
  marquee: {
    slow: 60000,
    medium: 40000,
    fast: 20000,
  },
};

const Keyframes = {
  marquee: (direction: Direction, infinite: boolean = false) => keyframes`
    0% {
      ${marqueeSwitch(direction, true, infinite)}
    }
    100% {
      ${marqueeSwitch(direction, false, infinite)}
    }`,
};

const AnimationTimingFunctions = {
  linear: css`
    animation-timing-function: linear;
  `,
};

// FIXME: Make it smooth, transition does not work
export const AnimationState = {
  pause: css`
    animation-play-state: paused;
  `,
  play: css`
    animation-play-state: running;
  `,
};

export const Animation = {
  marquee: (
    duration: DurationType = 'medium',
    direction: Direction = 'to left',
    infinite: boolean = false,
  ) =>
    css`
      transform: translateX(100%);
      animation-name: ${Keyframes.marquee(direction, infinite)};
      animation-duration: ${Duration.marquee[duration] * (+infinite + 1)}ms;
      ${AnimationTimingFunctions.linear}
      animation-iteration-count: infinite;
    `,
};
