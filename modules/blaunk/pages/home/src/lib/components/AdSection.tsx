'use client';

import { getRandomImagesArray } from '@md/blaunk/config';
import {
  Alpha,
  Background,
  BorderRadius,
  Cursor,
  Overflow,
  Shadows,
} from '@li/config/design';
import { Marquee } from '@li/design/elements';
import styled from '@emotion/styled';
import Image from 'next/image';

const img = getRandomImagesArray(6);

export const AdSection = ({ size = 200 }: { size?: number }) => {
  return (
    <AdRow pauseOhHover itemsGap={12} isInfinite>
      {img(size, size * 2).map((id, i) => (
        <StyledImage
          key={id}
          src={id}
          width={size * 2}
          height={size}
          alt="random"
        />
      ))}
    </AdRow>
  );
};

const AdRow = styled(Marquee)`
  ${Background.transparent('Primary', Alpha[20])}
  padding: 12px 0;
`;

const StyledImage = styled(Image)`
  ${BorderRadius.Large}
  ${Overflow.hidden}
  ${Cursor.pointer}
  ${Shadows.s}
`;
