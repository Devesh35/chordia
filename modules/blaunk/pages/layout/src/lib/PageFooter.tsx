'use client';

import { FooterDetails } from '@md/blaunk/config';
import {
  Background,
  BorderRadius,
  Cursor,
  Flex,
  FontSize,
  Foreground,
  Position,
  Shadows,
} from '@li/config/design';
import { Facebook, Gmail, Instagram, LinkedIn } from '@li/design/icons';
import styled from '@emotion/styled';

export const PageFooter = () => {
  return (
    <Wrapper>
      <DetailsWrapper>
        {FooterDetails.map((details) => (
          <DetailsSection id={details.title} key={details.title}>
            <DetailsTitle>{details.title}</DetailsTitle>
            {details.items.map((item) => (
              <DetailLabel key={item.label}>{item.label}</DetailLabel>
            ))}
          </DetailsSection>
        ))}
      </DetailsWrapper>
      <ConnectWrapper>
        <Icon>
          <Gmail />
        </Icon>
        <Icon>
          <LinkedIn />
        </Icon>
        <Icon>
          <Facebook />
        </Icon>
        <Icon>
          <Instagram />
        </Icon>
      </ConnectWrapper>
      <CopyrightWrapper>
        <CopyrightItem>© 2021 Copyright</CopyrightItem>
        <CopyrightItem>Blaunk.com</CopyrightItem>
      </CopyrightWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${Background.color('Primary')}
`;

const DetailsWrapper = styled.div`
  ${Flex({ justify: 'space-around' })}
  padding: 24px 0;
  width: 60%;
  margin: 0 auto;
`;

const DetailsSection = styled.div``;

const DetailsTitle = styled.div`
  ${FontSize.H5}
  ${Position.relative}
  ${Foreground.color('OnPrimaryAccent')}
  margin-bottom: 8px;
  &:before {
    content: '';
    ${Position.absolute}
    width: 6px;
    height: 2ch;
    ${Background.color('PrimaryDark')}
    ${BorderRadius.Default}
    left: -12px;
  }
`;

const DetailLabel = styled.div`
  ${FontSize.P16}
  ${Foreground.color('OnPrimary')}
  ${Cursor.pointer}
`;

const ConnectWrapper = styled.div`
  ${Flex({ justify: 'center', align: 'center', gap: 24 })}
  padding: 24px 0;
  ${FontSize.P16}
  ${Foreground.color('White')}
`;

const Icon = styled.div`
  ${Background.color('White')}
  ${BorderRadius.Rounded};
  ${Cursor.pointer}
  ${Shadows.m};
  width: 48px;
  height: 48px;
  padding: 8px;
  & > * {
    width: 32px;
    height: 32px;
    margin: auto;
  }
`;

const CopyrightWrapper = styled.div`
  ${Background.color('PrimaryDark')}
  ${Foreground.color('OnPrimaryDarkAccent')}
  ${Flex({ justify: 'center', gap: 48, align: 'center' })}
  padding: 12px;
  ${FontSize.P14}
`;

const CopyrightItem = styled.span`
  ${Cursor.pointer}
`;
