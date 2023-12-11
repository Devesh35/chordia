import {
  Background,
  BorderRadius,
  Flex,
  Overflow,
  Size,
} from '@li/config/design';
import { NextImage } from '@li/types/shared';
import styled from '@emotion/styled';
import Image from 'next/image';

type Props = {
  image: NextImage;
  details: React.ReactNode;
  hasDivider?: boolean;
  className?: string;
};

export const ImageCardDetails = ({ image, details, className }: Props) => (
  <Wrapper className={className}>
    <Image {...image} />
    <Details>{details}</Details>
  </Wrapper>
);

const Wrapper = styled.div`
  ${Flex({ gap: 12 })}
  ${Size.fullWidth}
  ${Background.color('Gray100')}
  ${BorderRadius.Medium}
  ${Overflow.hidden}
`;

const Details = styled.div`
  padding-right: 12px;
  margin: auto;
  margin-right: 0;
`;
