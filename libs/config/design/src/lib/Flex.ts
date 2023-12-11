import { css } from '@emotion/react';
import { Prop, getCSS } from './utils';

export type FlexOptions =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'flex-start'
  | 'flex-end';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type FlexConfig = {
  flex: number;
  gap: Prop;
  rowGap: Prop;
  direction: FlexDirection;
  justify: FlexOptions;
  align: FlexOptions;
  wrap: boolean;
};

export const FlexItems = {
  display: css`
    display: flex;
  `,
  flex: (f?: number | string) => css`
    flex: ${f ?? 1};
  `,
  shrink: (f?: number) => css`
    flex-shrink: ${f ?? 1};
  `,
  direction: (d: FlexDirection) => css`
    flex-direction: ${d};
  `,
  justify: (j: FlexOptions) => css`
    justify-content: ${j};
  `,
  align: (j: FlexOptions) => css`
    align-items: ${j};
  `,
  gap: (n: Prop) => css`
    ${getCSS('gap', n, true)}
  `,
  rowGap: (n: Prop) => css`
    ${getCSS('row-gap', n, true)}
  `,
  wrap: (w: boolean) => css`
    flex-wrap: ${w ? 'wrap' : 'no-wrap'};
  `,
};

export const Flex = (options: Partial<FlexConfig> = {}) => css`
  ${FlexItems.display}
  ${options.gap && FlexItems.gap(options.gap)}
  ${options.flex && FlexItems.flex(options.flex)}
  ${options.wrap && FlexItems.wrap(options.wrap)}
  ${options.align && FlexItems.align(options.align)}
  ${options.rowGap && FlexItems.rowGap(options.rowGap)}
  ${options.justify && FlexItems.justify(options.justify)}
  ${options.direction && FlexItems.direction(options.direction)}
`;

Flex.items = FlexItems;
