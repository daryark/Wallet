import styled from 'styled-components';

// export const LayoutWrapper = styled.div`
//   min-height: 100vh;
//   display: grid;
//   grid-template-columns: 1fr 5fr;
//   grid-template-rows: auto 1fr auto;
//   grid-template-areas:
//     'header header'
//     'main main'
//     'footer footer';
//   @media screen and (min-width: 768px) {
//     grid-template-areas:
//       'header header'
//       'sidebar main'
//       'footer footer';
//   }
// `;
export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.color.text_dark};

  position: absolute;
  top: 17px;
  right: 20px;
`;
export const StyledMain = styled.main`
  grid-area: main;
  max-width: ${({ theme }) => theme.breakpoints.sm};
  margin: 0 auto;
  margin-bottom: 32px;
  padding: 0 20px;

  /* @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.breakpoints.sm};
  } */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.breakpoints.md};
    padding: 0;
    /* пофиксить паддинг на таблет и десктоп */
  }
  /* @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.breakpoints.lg};
  } */
`;

export const Background = styled.div`
  & .ellipse_pink {
    position: fixed;
    transform: translateX(-50%);
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      left: calc(50% + 395px);
      top: -110px;
    }

    /* @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      
    } */
  }

  & .ellipse_purple {
    position: fixed;
    transform: translateX(-50%) rotate(15deg);
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      left: calc(50% - 237px);
      bottom: -166px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      left: calc(50% - 509px);
      bottom: -137px;
    }
  }

  & .blur {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${({ theme }) => theme.color.bg_blur};
    backdrop-filter: blur(25px);
    z-index: -1;
  }
`;
