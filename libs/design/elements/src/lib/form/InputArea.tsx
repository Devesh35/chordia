import {
  Background,
  Border,
  BorderRadius,
  Colors,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Margin,
  Opacity,
  Padding,
  ScrollBar,
  Size,
} from '@li/config/design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';

type InputVariant = 'error' | 'success' | 'warning' | 'default';

export type InputAreaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    prefix?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    variant?: InputVariant;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
    disableWrapperFocus?: boolean;
  };

export const InputArea = ({
  prefix,
  isDisabled = false,
  isReadOnly = false,
  variant = 'default',
  iconLeft,
  iconRight,
  disableWrapperFocus = false,
  ...props
}: InputAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const focusInput = useCallback(() => {
    if (disableWrapperFocus) return;
    inputRef.current?.focus();
  }, [disableWrapperFocus]);

  return (
    <Wrapper
      variant={variant}
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

const Wrapper = styled.div<{
  variant: InputVariant;
  isReadOnly: boolean;
  isDisabled: boolean;
}>`
  ${Cursor.text}
  ${Size.fullWidth}
  ${BorderRadius.Medium}
  ${Size.height(48)}
  ${Border.medium('Divider')}
  ${Background.color('White')}
  ${Flex({ align: 'center' })}
  ${Padding({ block: 0.5, inline: 1 })}

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

const IconWrapper = styled.span<{
  position: 'left' | 'right';
  isDisabled?: boolean;
}>`
  ${({ isDisabled }) =>
    Foreground.color(isDisabled ? 'TextDisabled' : 'Gray600')}

  ${({ position }) =>
    position === 'right' ? Margin({ left: 0.75 }) : Margin({ right: 0.75 })}
`;

const Prefix = styled.div`
  ${Cursor.noEvents}
  ${Flex.items.shrink(0)}
  ${Margin({ left: 0.5 })}
  ${Foreground.color('Gray600')};
`;

const InputElement = styled.textarea`
  ${Border.none};
  ${Foreground.color('OnWhite')};
  ${Background.color('Transparent')};
  ${FontSize.H6}
  ${Size.full}
  ${Size.fullMax}
  ${ScrollBar.default}  
  outline: none;

  &::placeholder {
    ${Foreground.color('Gray600')}
    ${Opacity.to(1)}
  }
`;
