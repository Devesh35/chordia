import React from 'react';
import styled from '@emotion/styled';
import { Flex, Overflow, ScrollBar } from '@li/config/design';

type ScrollableSnapProps = {
  children: React.ReactNode;
  className?: string;
};

export const ScrollableSnap = ({
  children,
  className,
}: ScrollableSnapProps) => {
  return (
    <ScrollableSnapContainer className={className}>
      {children}
    </ScrollableSnapContainer>
  );
};

const ScrollableSnapContainer = styled.div`
  ${Flex()}
  ${Overflow.scroll('x')}
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  ${ScrollBar.none}

  > * {
    scroll-snap-align: start;
  }
`;
