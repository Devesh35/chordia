import {
  Alpha,
  Background,
  BorderRadius,
  BoxSizing,
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
} from '@li/config/design';
import styled from '@emotion/styled';
import { useRangeIndex } from '@li/design/hooks';
import { AngleLeft, AngleRight, Dot } from '@li/design/icons';
import React, { forwardRef, useEffect } from 'react';
import { css } from '@emotion/react';
import {
  PolymorphicComponentProp,
  PolymorphicComponentPropWithRef,
} from '../poly';

// type ControlSize = 'small' | 'large';
type PaginationDirection = 'left' | 'bottom' | 'right';
const paginationGap = 8;
const paginationDotSize = 12;

export type CarousalProps = {
  children: React.ReactNode;
  autoInterval?: number;
  // shouldLoop?: boolean;
  showControls?: boolean;
  showPagination?: boolean;
  // controlSize?: ControlSize;
  pagination?: PaginationDirection;
};

export const Carousal = forwardRef<
  HTMLDivElement,
  PolymorphicComponentProp<'div', CarousalProps>
>(
  (
    {
      children,
      autoInterval,
      showControls = true,
      showPagination = true,
      pagination = 'bottom',
    },
    ref,
  ) => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    const { active, update, updateTo, isNearActive } = useRangeIndex(
      childArray.length,
    );

    useEffect(() => {
      if (!autoInterval) return;
      const interval = setInterval(() => update(1), autoInterval);
      return () => clearInterval(interval);
    }, [autoInterval, update]);

    return (
      <Wrapper ref={ref}>
        <ItemWrapper size={childArray.length} active={active}>
          {childArray.map((child, i) => (
            <Item key={child.key}>{isNearActive(i) ? child : null}</Item>
          ))}
        </ItemWrapper>
        <ControlsWrapper>
          {showControls && pagination === 'bottom' && (
            <Directional>
              <ControlItem onClick={() => update(-1)}>
                <AngleLeft />
              </ControlItem>
              <ControlItem onClick={() => update(1)}>
                <AngleRight />
              </ControlItem>
            </Directional>
          )}
          {showPagination && (
            <PaginationRow direction={pagination}>
              <Pagination direction={pagination}>
                {childArray.map((child, i) => (
                  <StyledDot key={child.key} onClick={() => updateTo(i)} />
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
  ${Flex({})};
  & > {
    width: 100%;
  }
  width: ${({ size }) => `${size}00%`};
  ${BoxSizing.borderBox}
  min-width: 100%;
  ${Size.fullHeight};
  transform: ${({ active, size }) =>
    `translate(-${active * (100 / size)}%, 0)`};
  transition: transform;
  ${TransitionDuration.medium}
  ${TransitionTimingFunctions.default}
  ${Position.relative}
  ${Layers.Base}
`;

const Item = styled.div`
  ${Size.full}
  ${Size.fullMax}
  ${Overflow.hidden}
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
  top: calc(50% - 24px);
`;

const PaginationRow = styled.div<{ direction: PaginationDirection }>`
  ${BorderRadius.Rounded}
  ${Background.color('Transparent80')}
  ${Position.absolute}
  ${BoxSizing.borderBox}
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

const ControlItem = styled.div`
  ${Background.color('Transparent80')}
  ${Foreground.transparent('White', Alpha[80])}
  ${BorderRadius.Large}
  ${Flex({ align: 'center', justify: 'center' })}
  ${FontSize.H3}
  ${BoxSizing.borderBox}
  ${Cursor.pointer}
  ${Cursor.events}
  padding: 12px;
  min-width: 48px;
  min-height: 48px;
  &:hover {
    ${Background.color('Transparent60')}
    ${Foreground.color('White')}
  }
`;

const StyledDot = styled(Dot, {
  shouldForwardProp: (name) => name !== 'filled',
})<{ filled?: true }>`
  fill: ${({ filled }) => Transparent(Colors.White, Alpha[filled ? 100 : 60])};
  width: ${paginationDotSize}px;
  height: ${paginationDotSize}px;
  ${Cursor.pointer}
  ${Cursor.events}
  &>:hover {
    fill: ${({ filled }) =>
      Transparent(Colors.White, Alpha[filled ? 100 : 80])};
  }
`;
