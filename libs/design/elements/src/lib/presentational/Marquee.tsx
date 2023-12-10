import {
  Animation,
  AnimationState,
  Flex,
  Overflow,
  Size,
} from '@li/config/design';
import React, { ReactNode, useMemo, useState } from 'react';
import styled from '@emotion/styled';

type MarqueeProps = {
  children: ReactNode;
  className?: string;
  pauseOhHover?: boolean;
  isInfinite?: boolean;
  itemsGap?: number;
};

export const Marquee = ({
  children,
  className,
  pauseOhHover = false,
  isInfinite = true,
  itemsGap = 0,
}: MarqueeProps) => {
  const childArray = useMemo(() => {
    const c = React.Children.toArray(children) as React.ReactElement[];
    return isInfinite
      ? [...c, ...c.map((o) => ({ ...o, key: `${o.key}_1` }))]
      : c;
  }, [children, isInfinite]);
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  return (
    <Container className={className}>
      <Content
        onMouseEnter={() => setIsAnimationRunning(!pauseOhHover)}
        onMouseLeave={() => setIsAnimationRunning(true)}
        isAnimationRunning={isAnimationRunning}
        isInfinite={isInfinite}
      >
        <ChildWrapper gap={itemsGap} px={itemsGap / 2}>
          {childArray.map((child) => child)}
        </ChildWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  ${Overflow.hidden}
  ${Size.fullWidth}
  white-space: nowrap;
  ${Flex({})}
`;

const Content = styled.div<{
  isAnimationRunning: boolean;
  isInfinite: boolean;
}>`
  display: inline-block;
  white-space: nowrap;
  ${({ isInfinite }) => Animation.marquee('fast', 'to left', isInfinite)}
  ${({ isAnimationRunning }) =>
    isAnimationRunning ? AnimationState.play : AnimationState.pause}
`;

const ChildWrapper = styled.div<{ gap: number; px: number }>`
  ${({ gap }) => Flex({ gap })}
  ${({ px }) => `padding: 0 ${px}px`}
`;
