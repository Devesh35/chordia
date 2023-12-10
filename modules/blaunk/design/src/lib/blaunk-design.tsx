import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface BlaunkDesignProps {}

const StyledBlaunkDesign = styled.div`
  color: pink;
`;

export function BlaunkDesign(props: BlaunkDesignProps) {
  return (
    <StyledBlaunkDesign>
      <h1>Welcome to BlaunkDesign!</h1>
    </StyledBlaunkDesign>
  );
}

export default BlaunkDesign;
