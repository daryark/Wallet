import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.color.text_dark};

  position: absolute;
  top: 17px;
  right: 20px;
`;

// export const Blur = styled.div`
//   width: '100vw';
//   height: '100vh';
//   position: 'fixed';
//   top: 0;
//   backdrop-filter: blur(25px);
//   filter: blur(25px);
//   z-index: -1;
// `;

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
    width: '100vw';
    height: '100vh';
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
