import {
  Background,
  BorderRadius,
  Flex,
  FontSize,
  Foreground,
  Position,
} from '@li/config/design';
import styled from '@emotion/styled';

export type BadgeProps = {
  width?: number;
  content?: React.ReactNode;
  children: React.ReactNode;
};

export const Badge = ({ children, content, width = 12 }: BadgeProps) => {
  return (
    <Wrapper>
      {children}
      {content && <Content width={width}>{content}</Content>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Position.relative};
  display: flex;
`;

const Content = styled.div<{ width: number }>`
  ${Position.absolute};
  padding: 4px;
  aspect-ratio: 1 / 1;
  ${BorderRadius.SquareRounded};
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  ${Background.color('Red')};
  ${Foreground.color('White')};
  ${FontSize.L12};
  ${({ width }) => `width: ${width}px;`}
  ${Flex({ align: 'center', justify: 'center' })}
`;
