import { css } from '@emotion/react';
import { Prop, getCSS } from './utils';

type Margin = {
  top: Prop;
  bottom: Prop;
  left: Prop;
  right: Prop;
  block: Prop;
  inline: Prop;
};

export const Margin = ({
  top,
  bottom,
  left,
  right,
  block,
  inline,
}: Partial<Margin>) => css`
  ${getCSS('margin-top', top || block)}
  ${getCSS('margin-left', left || inline)}
  ${getCSS('margin-right', right || inline)}
  ${getCSS('margin-bottom', bottom || block)}
`;

Margin.all = (p: Prop) => css`
  ${getCSS('margin', p)}
`;
