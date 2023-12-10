import { Colors } from '@li/config/design';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

type OrientationType = 'horizontal' | 'vertical';

type Props = {
  color?: keyof typeof Colors;
  orientation?: OrientationType;
};

export const Divider = ({
  color = 'Divider',
  orientation = 'horizontal',
  ...props
}: Props) => {
  return <StyledDivider color={color} orientation={orientation} {...props} />;
};

const StyledDivider = styled.hr<Pick<Props, 'color' | 'orientation'>>`
  border: none;
  display: flex;
  background-color: ${({ color }) => (color ? Colors[color] : Colors.Divider)};
  ${({ orientation }) => {
    switch (orientation) {
      case 'horizontal':
        return css`
          width: 100%;
          height: 1px;
        `;
      case 'vertical':
        return css`
          width: 1px;
          height: 100%;
        `;
      default:
        return undefined;
    }
  }}
  margin: 0;
`;
