import {
  Background,
  BorderRadius,
  Flex,
  FontSize,
  Overflow,
  Size,
} from '@li/config/design';
import { Divider } from '@li/design/elements';
import { NextImage } from '@li/types/shared';
import styled from '@emotion/styled';
import Image from 'next/image';

type Props = {
  image: NextImage;
  top: React.ReactNode;
  bottom?: React.ReactNode;
  hasDivider?: boolean;
};

export const ImageCardDetails = ({ image, top, bottom, hasDivider }: Props) => (
  <Wrapper>
    <Image {...image} />
    <Details>
      <Top>{top}</Top>
      {hasDivider && <Divider color="Gray800" />}
      {bottom}
    </Details>
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
  margin-left: auto;
  margin-top: 16px;
`;

const Top = styled.div`
  ${FontSize.L16}
  text-align: right;
  margin-bottom: 4px;
`;
