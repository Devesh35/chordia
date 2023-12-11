import {
  Background,
  Border,
  BorderRadius,
  Colors,
  Cursor,
  Flex,
  Overflow,
  Position,
  Size,
} from '@li/config/design';
import styled from '@emotion/styled';
import Image from 'next/image';
import { css } from '@emotion/react';
import { NextImage } from '@li/types/shared';

type Props = {
  image: NextImage;
  isClickable?: boolean;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
};

export const ImageCardOverlay = ({
  image,
  top,
  bottom,
  isClickable = false,
}: Props) => {
  return (
    <Wrapper
      width={image.width}
      height={image.height}
      isClickable={isClickable}
    >
      <Image {...image} />
      <Overlay>
        {top || <Spacer />}
        {bottom}
      </Overlay>
    </Wrapper>
  );
};

const Wrapper = styled.div<{
  width: number;
  height: number;
  isClickable: boolean;
}>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
  ${BorderRadius.Large}
  ${Overflow.hidden}
  ${Position.relative}
  ${Border.simple('PrimaryDark')}
  ${({ isClickable }) => (isClickable ? Cursor.pointer : undefined)};
`;

const Overlay = styled.div`
  ${Position.absolute}
  inset: 0;
  ${Size.fullMax}
  ${Background.gradient(
    'to bottom',
    `${Colors.Transparent} 60%`,
    `${Colors.Transparent40} 100%`,
  )}
  ${Flex({ direction: 'column', justify: 'space-between' })}
  padding: 8px 12px;
`;

const Spacer = styled.div``;
