import styled from 'styled-components';

export const StyledFooterPusher = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledMain = styled.main`
  grid-area: main;
  /* flex-grow: 1; */
  max-width: ${({ theme }) => theme.breakpoints.sm};
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.breakpoints.lg};
  }
`;
