import {
  Background,
  Border,
  Colors,
  Flex,
  Margin,
  Size,
} from '@li/config/design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type OrientationType = 'horizontal' | 'vertical';

type Props = {
  thickness?: number;
  color?: keyof typeof Colors;
  orientation?: OrientationType;
};

export const Divider = ({
  thickness = 1,
  color = 'Divider',
  orientation = 'horizontal',
}: Props) => {
  return (
    <StyledDivider
      color={color}
      thickness={thickness}
      orientation={orientation}
    />
  );
};

const StyledDivider = styled.hr<Required<Props>>`
  ${Border.none}
  ${Flex()}
  ${({ color }) => Background.color(color || 'Divider')}
  ${({ orientation, thickness }) => {
    switch (orientation) {
      case 'horizontal':
        return css`
          ${Size.fullWidth}
          ${Size.height(thickness)}
        `;
      case 'vertical':
        return css`
          ${Size.fullHeight}
          ${Size.width(thickness)}
        `;
      default:
        return undefined;
    }
  }}
  ${Margin({})}
`;
