'use client';
import styled from '@emotion/styled';
import {
  Background,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Overflow,
  Padding,
  Position,
  Shadows,
  Size,
  TransitionDuration,
  TransitionProperty,
  TransitionTimingFunctions,
} from '@li/config/design';
import { Button } from '@li/design/elements';
import { Country } from '@li/types/config';

type Props = {
  country: Country;
};

const flagWidth = '20vw';
const flagHeight = '15vw';

export const CountryCard = ({ country }: Props) => {
  return (
    <Wrapper>
      <FlagWrapper>
        <country.Flag />
      </FlagWrapper>
      <Content>
        <CountryName>{country.name}</CountryName>
        <StyledButton bg={country.color} color={country.colorOnColor}>
          Source
        </StyledButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Size.minWidth(`clamp(120px, ${flagWidth}, 240px)`)}
  ${Background.color('White')}
  ${BorderRadius.Medium}
  ${Overflow.hidden}
  ${Shadows.s}
  ${Cursor.pointer}
  ${TransitionProperty('transform')}
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
  ${Size.width(flagWidth, { min: 120, max: 240 })}
  ${Size.height(flagHeight, { min: 90, max: 180 })}
  ${Background.color('White')}
  ${Flex({ justify: 'center', align: 'center' })}
  ${Overflow.hidden}
  ${Position.relative}
  &>* {
    ${Size.width(flagWidth, { min: 120, max: 240 })}
    ${Size.height(flagHeight, { min: 90, max: 180 })}
  }
`;

const Content = styled.div`
  ${Flex({ align: 'center', gap: '2vmin', direction: 'column' })}
  ${Padding({ block: '2vmin' })}
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
