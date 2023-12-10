'use client';

import { Background } from '@li/config/design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Placeholder = styled.div<{ width?: number; height?: number }>`
  ${({ width, height }) => css`
    width: ${width ? width + 'px' : '100%'};
    height: ${height ? height + 'px' : '100%'};
  `}
  ${Background.color('Gray300')}
`;
