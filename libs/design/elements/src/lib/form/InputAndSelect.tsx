import styled from '@emotion/styled';
import { Input, InputProps } from './Input';
import { Select, SelectProps } from './Select';
import { Flex } from '@li/config/design';

export type InputAndSelectProps<K extends string> = {
  input: InputProps;
  select: SelectProps<K>;
};

export const InputAndSelect = <K extends string>({
  input,
  select,
}: InputAndSelectProps<K>) => {
  return (
    <Wrapper>
      <Input {...input} />
      <Select {...select} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex()}
`;
