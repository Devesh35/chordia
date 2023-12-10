import { FlexDirection, FlexOptions } from '@li/config/design';
import styled from '@emotion/styled';

type Prop = number | string;

const getValue = (n: Prop): string => (typeof n === 'number' ? `${n}px` : n);
const getCSS = (k: string, n?: Prop): string => {
  return n ? `${k}: ${getValue(n)};` : '';
};

export type StackProps = {
  inline?: boolean;

  direction?: FlexDirection;
  alignItems?: FlexOptions;
  justifyContent?: FlexOptions;

  mt?: Prop;
  mr?: Prop;
  mb?: Prop;
  ml?: Prop;
  m?: Prop;
  mx?: Prop;
  my?: Prop;

  pt?: Prop;
  pr?: Prop;
  pb?: Prop;
  pl?: Prop;
  p?: Prop;
  px?: Prop;
  py?: Prop;

  gap?: Prop;
  rowGap?: Prop;

  width?: Prop;
  height?: Prop;
  fullWidth?: boolean;

  flex?: number;
  wrap?: boolean;
};

export const Stack = styled(styled.div``, {
  shouldForwardProp: (name) =>
    ![
      'direction',
      'alignItems',
      'justifyContent',
      'mt',
      'mr',
      'mb',
      'ml',
      'm',
      'mx',
      'my',
      'pt',
      'pr',
      'pb',
      'pl',
      'p',
      'px',
      'py',
      'gap',
      'rowGap',
      'flex',
      'width',
      'height',
      'fullWidth',
      'wrap',
    ].includes(name),
})<StackProps>`
  display: ${({ inline }) => (inline ? 'inline-flex' : 'flex')};

  ${({ direction }) => getCSS('flex-direction', direction || 'row')}

  ${({ alignItems }) => getCSS('align-items', alignItems)}
  ${({ justifyContent }) => getCSS('justify-content', justifyContent)}

  ${({ m }) => getCSS('margin', m)}
  ${({ mt, my }) => getCSS('margin-top', mt ?? my)}
  ${({ mb, my }) => getCSS('margin-bottom', mb ?? my)}
  ${({ ml, mx }) => getCSS('margin-left', ml ?? mx)}
  ${({ mr, mx }) => getCSS('margin-right', mr ?? mx)}

  ${({ p }) => getCSS('padding', p)}
  ${({ pt, py }) => getCSS('padding-top', pt ?? py)}
  ${({ pb, py }) => getCSS('padding-bottom', pb ?? py)}
  ${({ pl, px }) => getCSS('padding-left', pl ?? px)}
  ${({ pr, px }) => getCSS('padding-right', pr ?? px)}

  ${({ gap }) => getCSS('gap', gap)};
  ${({ rowGap }) => getCSS('row-gap', rowGap)}

  ${({ wrap }) => getCSS('flex-wrap', wrap ? 'wrap' : 'no-wrap')}
  ${({ flex }) => getCSS('flex', flex)}

  ${({ width }) => getCSS('width', width)}
  ${({ height }) => getCSS('height', height)}

  ${({ fullWidth }) => getCSS('width', fullWidth ? '100%' : undefined)}
`;
