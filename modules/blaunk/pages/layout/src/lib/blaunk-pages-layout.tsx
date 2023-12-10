import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BlaunkPagesLayoutProps {}

const StyledBlaunkPagesLayout = styled.div`
  color: pink;
`;

export function BlaunkPagesLayout(props: BlaunkPagesLayoutProps) {
  return (
    <StyledBlaunkPagesLayout>
      <h1>Welcome to BlaunkPagesLayout!</h1>
    </StyledBlaunkPagesLayout>
  );
}

export default BlaunkPagesLayout;
