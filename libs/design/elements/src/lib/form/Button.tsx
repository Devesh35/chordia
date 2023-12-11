import styled from '@emotion/styled';
import {
  Background,
  Border,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  FontWeight,
  Foreground,
  Padding,
} from '@li/config/design';
import { ReactNode } from 'react';
import { css } from '@emotion/react';

type Variant = 'primary' | 'outline' | 'text';

export type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  isDisabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = 'primary',
  isDisabled = false,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton variant={variant} {...rest} disabled={isDisabled}>
      {iconLeft || null}
      {children}
      {iconRight || null}
    </StyledButton>
  );
};
const StyledButton = styled.button<{ variant: Variant }>`
  ${Border.none}
  ${FontSize.L16}
  ${Cursor.pointer}
  ${FontWeight.Bold}
  ${BorderRadius.Default}
  ${Padding({ block: 0.5, inline: 1 })}
  ${Flex({ align: 'center', justify: 'center', gap: 12 })}
  ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return outlineStyle;
      case 'text':
        return textStyle;
      default:
        return primaryStyle;
    }
  }}
`;

const primaryStyle = css`
  ${Foreground.color('OnPrimaryAccent')}
  ${Background.color('Primary')};
  &:hover {
    ${Background.color('Primary700')};
  }
  &:active {
    ${Background.color('PrimaryDark')};
  }
  &[disabled] {
    ${Foreground.color('TextDisabled')}
    ${Background.color('BackgroundDisabled')};
  }
`;

const outlineStyle = css`
  ${Foreground.color('PrimaryDark')}
  ${Background.color('BackgroundSecondary')};
  ${Border.simple('PrimaryDark')}
  &:hover {
    ${Background.color('BackgroundHover')};
  }
  &:active {
    ${Background.color('BackgroundSelected')};
  }
  &[disabled] {
    ${Foreground.color('TextDisabled')}
    ${Background.color('BackgroundDisabled')};
    ${Border.color('Gray200')}
  }
`;

const textStyle = css`
  ${Foreground.color('Primary')}
  ${Background.color('Transparent')};
  &:hover {
    ${Foreground.color('Primary800')}
  }
  &:active {
    ${Foreground.color('Primary800')}
  }
  &[disabled] {
    ${Foreground.color('TextDisabled')}
  }
`;
