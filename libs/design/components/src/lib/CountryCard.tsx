'use client';
import styled from '@emotion/styled';
import {
  Background,
  BorderRadius,
  Colors,
  Cursor,
  Flex,
  FontSize,
  Overflow,
  Position,
  Shadows,
  TransitionDuration,
  TransitionTimingFunctions,
} from '@li/config/design';
import { Button } from '@li/design/elements';
import { Country } from '@li/types/config';

type Props = {
  country: Country;
};

const width = 240;
const height = 180;

export const CountryCard = ({ country }: Props) => {
  return (
    <Wrapper>
      <FlagWrapper>
        <country.Flag width={width + 2} height={height + 2} />
      </FlagWrapper>
      <Content>
        <CountryName>{country.name}</CountryName>
        <StyledButton bg={country.color} color={country.colorOnColor}>
          Select
        </StyledButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: ${width}px;
  ${Background.color('White')}
  ${BorderRadius.Medium}
  ${Overflow.hidden}
  ${Shadows.s}
  ${Cursor.pointer}
  transition: transform;
  ${TransitionDuration.fast}
  ${TransitionTimingFunctions.easeIn}
  &:hover {
    ${Shadows.m}
    transform: scale(1.2);
    ${TransitionDuration.medium}
    ${TransitionTimingFunctions.easeOut}
  }
  margin: 48px 0;
`;
const FlagWrapper = styled.div`
  width: ${width}px;
  height: ${height}px;
  ${Background.color('White')}
  border-radius: 0% 0% 60% 0% / 0% 0% 45% 0%;
  ${Flex({ justify: 'center', align: 'center' })}
  ${Overflow.hidden}
  ${Position.relative}
  &:after {
    content: '';
    ${Position.absolute}
    inset: 0;
    ${Background.gradient(
      '135deg',
      `${Colors.Transparent} 65%`,
      Colors.Transparent40,
    )}
  }
`;

const Content = styled.div`
  ${Flex({ align: 'center', gap: 24, direction: 'column' })}
  padding: 24px 0;
`;

const CountryName = styled.div`
  text-align: center;
  ${FontSize.H5}
  text-transform: uppercase;
`;

const StyledButton = styled(Button)<{ bg: string; color: string }>`
  ${BorderRadius.Rounded}
  ${({ bg }) => `background-color: ${bg}`};
  ${({ color }) => `color: ${color}`};
  &:hover {
    ${({ bg }) => `background-color: ${bg}`};
    ${({ color }) => `color: ${color}`};
  }
`;
