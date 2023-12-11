'use client';

import { Purpose, Units } from '@md/blaunk/config';
import {
  Background,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Size,
} from '@li/config/design';
import { ImageCardDetails } from '@li/design/components';
import {
  Button,
  Divider,
  Input,
  InputAndSelect,
  InputArea,
  Labeled,
  Select,
} from '@li/design/elements';
import styled from '@emotion/styled';

const SocialItem = ({ label, i }: { label: string; i: number }) => (
  <ImageCardDetails
    image={{
      src: `https://source.unsplash.com/random/80x${80 + i}`,
      width: 80,
      height: 80,
      alt: 'random',
    }}
    details={
      <Details>
        {label}
        <Divider color="Gray800" />
        <SocialLink>Click here</SocialLink>
      </Details>
    }
  />
);

export const FindVendors = () => {
  return (
    <Wrapper>
      <Heading>Let us help you find best vendors</Heading>
      <Content>
        <Form>
          <Labeled label="Group">
            <Input placeholder="Enter group" />
          </Labeled>
          <Labeled label="Article/service name">
            <Input placeholder="Enter article/service name" />
          </Labeled>
          <Labeled label="Purpose">
            <Select
              options={Purpose.map((i) => ({ id: i.id, item: i.label }))}
              placeholder="Select purpose"
            />
          </Labeled>
          <Labeled label="Qty">
            <InputAndSelect
              input={{ placeholder: 'Enter qty' }}
              select={{
                options: Units.map((u) => ({ id: u, item: u })),
                placeholder: 'Select unit',
              }}
              inputFlex={0.9}
            />
          </Labeled>
          <Labeled label="Requirements">
            <StyledInputArea placeholder="Specify your requirements in max 500 words e.g. Name, color, size, MOQ, material, custom, etc." />{' '}
          </Labeled>
        </Form>
        <Actions>
          <SocialItem label="Ask anything on whatsapp" i={1}></SocialItem>
          <SocialItem label="Mail us on email" i={2}></SocialItem>
          <Button>Submit requirements</Button>
        </Actions>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex.items.flex(1)}
  ${Background.color('Gray050')}
  ${BorderRadius.Large}
  padding: 24px;
`;
const Heading = styled.div`
  ${FontSize.H4}
  text-align: center;
  margin-bottom: 24px;
`;
const Content = styled.div`
  ${Flex({ gap: 24, align: 'center', justify: 'center', wrap: true })}
`;

const Form = styled.div`
  flex: 1;
  min-width: 240px;
  ${Flex({ gap: 12, direction: 'column' })}
`;

const StyledInputArea = styled(InputArea)`
  height: 120px;
`;

const Actions = styled.div`
  ${Size.fullHeight}
  flex: 0.9;
  min-width: 200px;
  & > button {
    margin-top: 48px;
    ${Size.fullWidth}
  }
  ${Flex({ gap: 12, direction: 'column' })}
`;

const SocialLink = styled.span`
  ${Foreground.color('Interactive')}
  ${Cursor.pointer}
  float: right;
`;

const Details = styled.div`
  ${Flex({ direction: 'column', gap: 2 })}
  text-align: right;
`;
