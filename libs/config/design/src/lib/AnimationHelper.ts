import { Direction } from './types';

const tr = (d: 'X' | 'Y', start: boolean, infinite: boolean) =>
  `transform: translate${d}(${
    infinite ? (start ? '0' : '-50%') : start ? '100%' : '-100%'
  });`;

export const marqueeSwitch = (
  direction: Direction,
  start: boolean = true,
  infinite: boolean = false,
) => {
  switch (direction) {
    case 'to left':
      return tr('X', start, infinite);
    case 'to right':
      return tr('X', !start, infinite);
    case 'to top':
      return tr('Y', start, infinite);
    case 'to bottom':
      return tr('Y', !start, infinite);
  }
};
