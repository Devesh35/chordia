import {
  Alpha,
  Background,
  BorderRadius,
  Colors,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Overflow,
  Position,
  Size,
  TransitionDuration,
  Transparent,
  TransitionTimingFunctions,
  Absolute,
  Layers,
  Opacity,
} from '@li/config/design';
import styled from '@emotion/styled';
import { useRangeIndex } from '@li/design/hooks';
import { AngleLeft, AngleRight, Dot } from '@li/design/icons';
import { shouldNotForwardProps } from '@li/config/utils';
import React, { forwardRef, useEffect } from 'react';
import { css } from '@emotion/react';
import {
  PolymorphicComponentProp,
  PolymorphicComponentPropWithRef,
} from '../poly';

type Variant = 'light' | 'dark';
type ControlSize = 'small' | 'large';
type PaginationDirection = 'left' | 'bottom' | 'right';
const paginationGap = 8;
const paginationDotSize = 12;

export type CarousalProps = {
  children: React.ReactNode;
  autoInterval?: number;
  hideControls?: true;
  hidePagination?: true;
  enablePagination?: true;
  controlSize?: ControlSize;
  pagination?: PaginationDirection;
  className?: string;
  variant?: Variant;
};

export const Carousal = forwardRef<
  HTMLDivElement,
  PolymorphicComponentProp<'div', CarousalProps>
>(
  (
    {
      children,
      autoInterval,
      hideControls,
      hidePagination,
      pagination = 'bottom',
      variant,
      className,
      controlSize,
      enablePagination,
    },
    ref,
  ) => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const { active, prev, update, updateTo, isNearActive } = useRangeIndex(
      childArray.length,
    );

    useEffect(() => {
      if (!autoInterval) return;
      const interval = setInterval(() => update(1), autoInterval);
      return () => clearInterval(interval);
    }, [autoInterval, update]);

    return (
      <Wrapper ref={ref} className={className}>
        <ItemWrapper size={childArray.length} active={active}>
          {childArray.map((child, i) => (
            <Item key={child.key} active={active === i} prev={prev === i}>
              {isNearActive(i) ? child : null}
            </Item>
          ))}
        </ItemWrapper>
        <ControlsWrapper>
          {hideControls
            ? null
            : pagination === 'bottom' && (
                <Directional>
                  <ControlItem
                    onClick={() => update(-1)}
                    size={controlSize}
                    variant={variant}
                  >
                    <AngleLeft />
                  </ControlItem>
                  <ControlItem
                    onClick={() => update(1)}
                    size={controlSize}
                    variant={variant}
                  >
                    <AngleRight />
                  </ControlItem>
                </Directional>
              )}
          {hidePagination ? null : (
            <PaginationRow direction={pagination} variant={variant}>
              <Pagination direction={pagination}>
                {childArray.map((child, i) => (
                  <StyledDot
                    key={child.key}
                    enablePagination={enablePagination}
                    onClick={() => enablePagination && updateTo(i)}
                  />
                ))}
              </Pagination>
              <Highlight active={active} direction={pagination}>
                <StyledDot filled />
              </Highlight>
            </PaginationRow>
          )}
        </ControlsWrapper>
      </Wrapper>
    );
  },
) as <C extends React.ElementType = 'div'>(
  props: PolymorphicComponentPropWithRef<C, CarousalProps>,
) => React.JSX.Element;

const Wrapper = styled.div`
  ${Position.relative}
  ${Overflow.hidden}
  ${Size.full}
  ${Size.fullMax}
`;

const ItemWrapper = styled.div<{ size: number; active: number }>`
  width: 100%;
  min-width: 100%;
  ${Size.fullHeight};
  ${Position.relative}
  ${Layers.Base}
`;

const Item = styled.div<{ active: boolean; prev: boolean }>`
  ${Position.absolute}
  inset: 0;
  transition: transform, opacity;
  ${TransitionDuration.medium}
  ${TransitionTimingFunctions.default}
  ${Overflow.hidden}
  ${({ active, prev }) => {
    if (active)
      return css`
        transform: translate(0, 0);
        ${Opacity.to(1)}
      `;
    if (prev)
      /* This works somehow. IDK. do not touch  */
      return css`
        ${Opacity.to(0)}
        transition: transform, opacity;
        transform: translate(100vw, 0);
        transition-delay: 250ms;
      `;
    return css`
      ${Opacity.to(0)}
      transform: translate(100vw, 0);
    `;
  }};
`;

const ControlsWrapper = styled.div`
  ${Position.absolute};
  inset: 24px;
  ${Layers.First}
  ${Cursor.noEvents}
`;

const Directional = styled.div`
  ${Position.absolute}
  ${Flex({ justify: 'space-between' })}
  ${Size.fullWidth}
  top: 50%;
  transform: translate(0, -50%);
`;

const PaginationRow = styled.div<{
  direction: PaginationDirection;
  variant?: Variant;
}>`
  ${BorderRadius.Rounded}
  ${Background.color('Transparent80')}
  ${Position.absolute}
  ${({ direction }) => {
    switch (direction) {
      case 'bottom':
        return css`
          bottom: -12px;
          ${Absolute.centerHorizontally}
        `;
      case 'left':
        return css`
          left: -12px;
          ${Absolute.centerVertically}
        `;
      case 'right':
        return css`
          right: -12px;
          ${Absolute.centerVertically}
        `;
    }
  }}
  padding: 12px;
`;

const Pagination = styled.div<{ direction: PaginationDirection }>`
  ${({ direction }) =>
    Flex({
      gap: paginationGap,
      rowGap: paginationGap,
      direction: direction === 'bottom' ? 'row' : 'column',
    })}
`;

const Highlight = styled.div<{
  active: number;
  direction: PaginationDirection;
}>`
  ${Position.absolute}
  ${Flex({})}
  top: 12px;
  left: 12px;
  transform: translate(
    ${({ active, direction }) => {
      const v = `${active * (paginationGap + paginationDotSize)}px`;
      return direction === 'bottom' ? `${v}, 0` : `0, ${v}`;
    }}
  );
  transition: transform;
  ${TransitionDuration.medium}
  ${TransitionTimingFunctions.default}
`;

const ControlItem = styled.div<{ size?: ControlSize; variant?: Variant }>`
  ${Background.color('Transparent80')}
  ${Foreground.transparent('White', Alpha[80])}
  ${BorderRadius.Large}
  ${Flex({ align: 'center', justify: 'center' })}
  ${FontSize.H3}
  ${Cursor.pointer}
  ${Cursor.events}
  padding: 12px;
  min-width: 48px;
  min-height: 48px;
  &:hover {
    ${Background.color('Transparent60')}
    ${Foreground.color('White')}
  }
  ${({ size }) => {
    if (size === 'large')
      return css`
        padding: 24px;
        min-width: 96px;
        min-height: 96px;
        & > svg {
          width: 48px;
          height: 48px;
        }
      `;
  }}
  ${({ variant }) => {
    if (variant === 'dark')
      return css`
        ${Background.color('Transparent20')}
        ${Foreground.transparent('White', Alpha[80])}
        &:hover {
          ${Background.color('Black')}
          ${Foreground.color('White')}
        }
      `;
  }}
`;

const StyledDot = styled(
  Dot,
  shouldNotForwardProps('filled', 'enablePagination'),
)<{ filled?: true; enablePagination?: boolean }>`
  fill: ${({ filled }) => Transparent(Colors.White, Alpha[filled ? 100 : 60])};
  width: ${paginationDotSize}px;
  height: ${paginationDotSize}px;
  ${({ enablePagination }) => enablePagination && Cursor.pointer}
  ${Cursor.events}
  &>:hover {
    fill: ${({ filled }) =>
      Transparent(Colors.White, Alpha[filled ? 100 : 80])};
  }
`;
