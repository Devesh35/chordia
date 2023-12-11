import styled from '@emotion/styled';
import { Input, InputProps } from './Input';
import { Select, SelectProps } from './Select';
import { Border, BorderRadius, Flex, Size } from '@li/config/design';

export type InputAndSelectProps<K extends string> = {
  input: InputProps;
  select: SelectProps<K>;
  inputFlex?: number;
};

export const InputAndSelect = <K extends string>({
  input,
  select,
  inputFlex = 1,
}: InputAndSelectProps<K>) => {
  return (
    <Wrapper>
      <StyledInput flex={inputFlex} {...input} />
      <StyledSelect {...select} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Flex()}
  ${Size.height(48)}
  ${BorderRadius.Medium}
  ${Border.medium('Gray300')}
  &:hover {
    ${Border.color('Gray500')};
  }
`;

const StyledInput = styled(Input)<{ flex: number }>`
  ${({ flex }) => Flex.items.flex(flex)}
  ${BorderRadius.None}
  ${Border.none}
  ${Size.height(44)}
  border-radius: 4px 0 0 4px;
  &:hover {
    ${Border.none}
  }
`;

const StyledSelect = styled(Select)`
  ${Flex.items.flex(1)}
  & > div:first-of-type {
    ${BorderRadius.None}
    ${Border.none}
    ${Size.height(44)}
    border-radius: 0 4px 4px 0;
    &:hover {
      ${Border.none}
    }
  }
` as typeof Select;
