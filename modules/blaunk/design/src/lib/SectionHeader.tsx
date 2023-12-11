import styled from '@emotion/styled';
import {
  Flex,
  FontSize,
  FontWeight,
  Foreground,
  Margin,
} from '@li/config/design';
import { Divider } from '@li/design/elements';

export const SectionHeader = ({ sectionName }: { sectionName: string }) => (
  <Header>
    <Title>
      <Divider color={'Primary'} />
      {sectionName}
      <Divider color={'Primary'} />
    </Title>
  </Header>
);

const Header = styled.div`
  ${Flex({ justify: 'center' })}
  ${Margin({ block: 2 })}
`;

const Title = styled.div`
  width: 80%;
  white-space: nowrap;
  ${FontSize.H1}
  ${FontWeight.Bold}
  ${Foreground.color('Primary')}
  ${Flex({ gap: 4, align: 'center' })}
`;
