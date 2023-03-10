import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${p => p.theme.color.text_dark};

  position: absolute;
  top: 17px;
  right: 20px;
`;

export const Background = styled.div`
  position: relative;

  & .blur {
    width: '100vw';
    height: '100vh';
    position: 'fixed';
    top: 0;
    backdrop-filter: blur(25px);
    /* filter: blur(25px); */
    z-index: -1;
  }

  & .ellipse_pink {
    position: fixed;
    transform: translateX(-50%);
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      left: calc(50% + 395px);
      top: -110px;
    }

    /* & path {
      fill: ${({ themeProp }) =>
      themeProp === 'dark' ? '#d0b0aa' : '#ffd8d0'};
    } */
  }

  & .ellipse_purple {
    position: fixed;
    transform: translateX(-50%) rotate(17deg);
    z-index: -1;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      left: calc(50% - 388px);
      bottom: -186px;
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      left: calc(50% - 409px);
      bottom: -157px;
    }

    /* & path {
      fill: ${({ themeProp, theme }) =>
      themeProp === 'dark' ? '#9b92cb' : '#c5baff'};
    } */
  }
`;
