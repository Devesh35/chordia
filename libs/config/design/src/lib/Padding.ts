import { css } from '@emotion/react';
import { Prop, getCSS } from './utils';

type Padding = {
  top: Prop;
  bottom: Prop;
  left: Prop;
  right: Prop;
  block: Prop;
  inline: Prop;
};

export const Padding = ({
  top,
  bottom,
  left,
  right,
  block,
  inline,
}: Partial<Padding>) => css`
  ${getCSS('padding-top', top || block)}
  ${getCSS('padding-left', left || inline)}
  ${getCSS('padding-right', right || inline)}
  ${getCSS('padding-bottom', bottom || block)}
`;

Padding.all = (p: Prop) => css`
  ${getCSS('padding', p)}
`;
