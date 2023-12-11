'use client';

import styled from '@emotion/styled';
import {
  Background,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Size,
} from '@li/config/design';
import { Constants, getRandomImagesArray } from '@md/blaunk/config';
import Image from 'next/image';

const names = ['Tour', 'Store', 'Cake', 'Boutique'];

const Name = styled.div`
  ${Foreground.color('OnPrimary')}
  ${FontSize.H5}
`;

const Store = styled.div`
  ${Cursor.pointer}
  ${Flex({ direction: 'column', align: 'center' })}
`;

const Img = styled(Image)`
  ${BorderRadius.SquareRounded}
`;

const ads = getRandomImagesArray(4)(64).map((src, i) => (
  <Store>
    <Img src={src} width={64} height={56} alt="random" />
    <Name>{names[i]}</Name>
  </Store>
));

export const MenuBar = () => {
  return <Wrapper>{ads}</Wrapper>;
};

const Wrapper = styled.div`
  ${Size.fullWidth};
  padding: 8px 24px;
  height: ${Constants.menuBarHeight};
  max-height: ${Constants.menuBarHeight};
  ${Background.color('Primary')};
  ${Foreground.color('OnPrimaryDark')};
  ${Flex({ align: 'center', gap: 48, justify: 'center' })}
`;
