'use client';
import {
  Background,
  BorderRadius,
  BoxSizing,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Size,
} from '@li/config/design';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Badge, Input } from '@li/design/elements';
import { Cart, DownFilled, Microphone, Search } from '@li/design/icons';
import { Constants, logoLarge } from '@md/blaunk/config';

export const NavHeader = () => {
  return (
    <Wrapper>
      <Image src={logoLarge} alt="logo" height={36} width={160} />

      <SearchInput
        iconLeft={<StyledSearch />}
        iconRight={<StyledMic />}
        placeholder="Search for products, brands and more"
      />

      <ItemsStack>
        <ItemWrapper>
          Welcome <DownFilled />
        </ItemWrapper>
        <ItemWrapper>
          Cart
          <Badge content={3}>
            <Cart />
          </Badge>
        </ItemWrapper>
        <ItemWrapper>
          Login <DownFilled />
        </ItemWrapper>
      </ItemsStack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Size.fullWidth};
  ${Flex({ align: 'center', gap: 24 })}
  padding: 8px 24px;
  ${BoxSizing.borderBox}
  height: ${Constants.navHeaderHeight};
  max-height: ${Constants.navHeaderHeight};
  ${Background.color('PrimaryDark')};
  ${Foreground.color('OnPrimaryDark')};
`;

const SearchInput = styled(Input)`
  width: 620px;
  ${BorderRadius.Large}
`;

const StyledSearch = styled(Search)``;

const StyledMic = styled(Microphone)`
  ${Cursor.pointer};
`;

const ItemsStack = styled.div`
  ${Flex({})}
  ${FontSize.H4};
  margin: 0 auto;
`;
const ItemWrapper = styled.div`
  ${Flex({ gap: 8, align: 'center' })}

  padding: 12px;
`;
