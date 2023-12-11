import {
  Background,
  BorderRadius,
  Flex,
  FontSize,
  Foreground,
  Padding,
  Position,
  Size,
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
  ${Flex()}
`;

const Content = styled.div<{ width: number }>`
  ${FontSize.L12};
  ${Position.absolute};
  ${Padding.all('10px')}
  ${BorderRadius.SquareRounded};
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  ${Background.color('Red')};
  ${Foreground.color('White')};
  ${({ width }) => Size.width(width)}
  ${({ width }) => Size.height(width)}
  ${Flex({ align: 'center', justify: 'center' })}
`;
