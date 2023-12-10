import {
  Background,
  Border,
  BorderRadius,
  Colors,
  Flex,
  FontSize,
  Foreground,
  Size,
} from '@li/config/design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';

type InputVariant = 'error' | 'success' | 'warning' | 'default';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  prefix?: string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  variant?: InputVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disableWrapperFocus?: boolean;
};

export const Input = ({
  prefix,
  isDisabled,
  isReadOnly,
  variant = 'default',
  iconLeft,
  iconRight,
  disableWrapperFocus = false,
  ...props
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = useCallback(() => {
    if (disableWrapperFocus) return;
    inputRef.current?.focus();
  }, [disableWrapperFocus]);

  return (
    <Wrapper
      variant={variant}
      width={props.width}
      onClick={focusInput}
      isDisabled={isDisabled}
      isReadOnly={isReadOnly}
      className={props.className}
    >
      {iconLeft ? (
        <IconWrapper isDisabled={isDisabled || isReadOnly} position="left">
          {iconLeft}
        </IconWrapper>
      ) : null}
      {prefix ? <Prefix>{prefix}</Prefix> : null}
      <InputElement
        {...props}
        prefix={prefix}
        readOnly={isReadOnly}
        disabled={isDisabled}
        ref={inputRef}
      />
      {iconRight ? (
        <IconWrapper isDisabled={isDisabled || isReadOnly} position="right">
          {iconRight}
        </IconWrapper>
      ) : null}
    </Wrapper>
  );
};

type WrapperProps = Pick<
  InputProps,
  'variant' | 'isDisabled' | 'isReadOnly' | 'width'
>;

const Wrapper = styled.div<WrapperProps>`
  ${Flex({ align: 'center' })};
  cursor: text;
  ${Size.fullWidth};
  height: 48px;
  box-sizing: border-box;
  padding: 4px 12px;
  ${Border.medium('Divider')};
  ${BorderRadius.Medium};
  ${FontSize.L20};
  ${({ variant }) => {
    switch (variant) {
      case 'error':
        return css`
          ${Border.color('Error300')};
        `;
      case 'success':
        return css`
          ${Border.color('Success400')};
        `;
      case 'warning':
        return css`
          ${Border.color('Warning200')};
        `;
      default:
        return css`
          ${Border.color('Gray300')};
          &:hover {
            ${Border.color('Gray500')};
          }
        `;
    }
  }}

  ${Background.color('White')};

  &:focus-within {
    ${Border.color('Primary500')};
    outline: 1px solid ${Colors.Primary500};
  }

  ${({ isReadOnly }) =>
    isReadOnly &&
    css`
      ${Background.color('Primary075')};
      ${Border.color('Primary075')};
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      ${Foreground.color('TextDisabled')}
      ${Background.color('BackgroundDisabled')};
      ${Border.color('BackgroundDisabled')};
    `}
`;

type IconsWrapperProps = {
  position: 'left' | 'right';
  isDisabled?: boolean;
};

const IconWrapper = styled.span<IconsWrapperProps>`
  ${({ isDisabled }) =>
    Foreground.color(isDisabled ? 'TextDisabled' : 'Gray600')}

  ${({ position }) =>
    position === 'right' ? { marginLeft: '12px' } : { marginRight: '12px' }}
`;

const Prefix = styled.div`
  flex-shrink: 0;
  margin-right: 8px;
  pointer-events: none;
  ${Foreground.color('Gray600')};
`;

const InputElement = styled.input`
  ${Border.none};
  ${Foreground.color('OnWhite')};
  ${Background.color('Transparent')};
  ${FontSize.L20};
  padding: 4px 0;
  ${Size.fullWidth};
  outline: none;

  &::placeholder {
    ${Foreground.color('Gray600')}
    opacity: 1;
  }
`;
