import {
  Background,
  Cursor,
  Flex,
  FontSize,
  Overflow,
  Size,
  TransitionDuration,
  TransitionTimingFunctions,
} from '@li/config/design';
import { DownFilled } from '@li/design/icons';
import styled from '@emotion/styled';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Divider } from '../presentational';

export type AccordionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  childHeight?: number;
  initialOpen?: boolean;
  updateParentHeight?: (height: number) => void;
};

export const Accordion = ({
  title,
  children,
  childHeight = 0,
  initialOpen = false,
  updateParentHeight,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current)
      setContentHeight(contentRef.current.scrollHeight + childHeight);
  }, [children, childHeight]);

  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
    updateParentHeight?.(contentHeight);
  }, [contentHeight, updateParentHeight, setIsOpen]);

  return (
    <Wrapper>
      <Header onClick={toggleAccordion}>
        <Title>{title}</Title>
        <Icon isOpen={isOpen}>
          <DownFilled />
        </Icon>
      </Header>
      {isOpen ? <Divider color="SecondaryDark" /> : null}
      <ContentWrapper
        isOpen={isOpen}
        ref={contentRef}
        contentHeight={contentHeight}
      >
        {children}
      </ContentWrapper>
      <Divider color="SecondaryDark" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Size.fullWidth}
  ${Background.color('Secondary')}
  &:hover {
    ${Background.color('SecondaryDark')}
  }
`;

const Header = styled.div`
  padding: 12px;
  ${Cursor.pointer}
  ${Flex({ align: 'center', justify: 'space-between' })}
`;

const Title = styled.span`
  ${FontSize.H6}
`;

const Icon = styled.div<{ isOpen: boolean }>`
  ${Flex()}
  width: 16px;
  height: 16px;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform;
  ${TransitionDuration.fast}
  ${TransitionTimingFunctions.easeOut}
`;

const ContentWrapper = styled.div<{ isOpen: boolean; contentHeight: number }>`
  ${Size.fullHeight}
  height: ${(props) => (props.isOpen ? `${props.contentHeight}px` : '0')};
  transition: height;
  ${TransitionDuration.fast}
  ${TransitionTimingFunctions.default}  
  ${Overflow.hidden}
`;
