'use client';
import {
  Background,
  Border,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Padding,
  Size,
} from '@li/config/design';
import styled from '@emotion/styled';
import Image from 'next/image';
import { Badge, Input, Select } from '@li/design/elements';
import { Cart, Microphone, Search } from '@li/design/icons';
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
        <LoginSelect options={[]} header={() => <MenuHead>Welcome</MenuHead>} />
        <ItemWrapper>
          Cart
          <Badge content={3}>
            <Cart />
          </Badge>
        </ItemWrapper>
        <LoginSelect
          options={[
            {
              id: 'b2b',
              item: 'B2B Login',
            },
          ]}
          header={() => <MenuHead>Login</MenuHead>}
        />
      </ItemsStack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Size.fullWidth};
  ${Flex({ align: 'center', gap: 24 })}
  padding: 8px 24px;
  height: ${Constants.navHeaderHeight};
  max-height: ${Constants.navHeaderHeight};
  ${Background.color('PrimaryDark')};
`;

const SearchInput = styled(Input)`
  width: 40vw;
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
  ${Foreground.color('OnPrimaryDark')};
  padding: 12px;
`;

const LoginSelect = styled(Select)`
  ${Background.color('Transparent')}
  ${Border.none}
  ${Foreground.color('OnPrimaryDark')};
`;

const MenuHead = styled.div`
  ${Padding({ right: 0.5 })}
`;
