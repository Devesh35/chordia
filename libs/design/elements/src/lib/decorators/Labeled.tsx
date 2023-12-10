import { FontSize } from '@li/config/design';
import styled from '@emotion/styled';
import React from 'react';

type Props = {
  label: string;
  children: React.ReactNode;
};

export const Labeled = ({ label, children }: Props) => (
  <Wrapper>
    <Label>{label}</Label>
    {children}
  </Wrapper>
);

const Wrapper = styled.div``;

const Label = styled.div`
  ${FontSize.P16}
  margin-bottom: 4px;
`;
