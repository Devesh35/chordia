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
  <Wrapper>
    <Divider color={'Primary'} thickness={4} />
    {sectionName}
    <Divider color={'Primary'} thickness={4} />
  </Wrapper>
);

const Wrapper = styled.div`
  width: 80%;
  white-space: nowrap;
  ${Margin({ inline: 'auto', block: 2 })}
  ${FontSize.H1}
  ${FontWeight.Bold}
  ${Foreground.color('Primary')}
  ${Flex({ gap: 12, align: 'center' })}
`;
