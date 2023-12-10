'use client';

import styled from '@emotion/styled';
import {
  Background,
  BoxSizing,
  Flex,
  Foreground,
  Size,
} from '@li/config/design';
import { Constants } from '@md/blaunk/config';

export const MenuBar = () => {
  return <Wrapper>MenuBar</Wrapper>;
};

const Wrapper = styled.div`
  ${Size.fullWidth};
  padding: 8px 24px;
  ${BoxSizing.borderBox}
  height: ${Constants.menuBarHeight};
  max-height: ${Constants.menuBarHeight};
  ${Background.color('Primary')};
  ${Foreground.color('OnPrimaryDark')};
  ${Flex({ align: 'center', gap: 24, justify: 'center' })}
`;
