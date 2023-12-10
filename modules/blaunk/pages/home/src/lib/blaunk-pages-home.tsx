import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BlaunkPagesHomeProps {}

const StyledBlaunkPagesHome = styled.div`
  color: pink;
`;

export function BlaunkPagesHome(props: BlaunkPagesHomeProps) {
  return (
    <StyledBlaunkPagesHome>
      <h1>Welcome to BlaunkPagesHome!</h1>
    </StyledBlaunkPagesHome>
  );
}

export default BlaunkPagesHome;
