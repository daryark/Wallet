import styled from 'styled-components';

export const StyledBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const StyledLoader = styled.div`
  width: 150px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  & #first {
    height: 80px;
    width: 20px;
    background-color: ${({ theme }) => theme.color.text_blue};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 6px;
    animation: loader 2s linear 0ms infinite;
  }

  & #second {
    height: 80px;
    width: 20px;
    background-color: ${({ theme }) => theme.color.text_blue};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 6px;
    animation: loader 2s linear 500ms infinite;
  }

  & #third {
    height: 80px;
    width: 20px;
    background-color: ${({ theme }) => theme.color.text_blue};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 6px;
    animation: loader 2s linear 1000ms infinite;
  }

  & #fourth {
    height: 80px;
    width: 20px;
    background-color: ${({ theme }) => theme.color.text_blue};
    box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
    border-radius: 6px;
    animation: loader 2s linear 1500ms infinite;
  }

  @keyframes loader {
    0%,
    100% {
      transform: scaleY(0.5);
      filter: opacity(0);
    }
    10% {
      transform: scaleY(1.2);
      filter: opacity(1);
    }
  }
`;
