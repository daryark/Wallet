import styled from 'styled-components';

export const ModalStyled = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 540px;
  padding: 30px;
  max-height: 600px;
  border-radius: ${({ theme }) => theme.radii.medium};
  background-color: ${({ theme }) => theme.color.bg_white};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  transition: transform 500ms linear;
  text-align: center;

  ul {
    position: relative;
    margin: 0 auto;
    margin-top: 4rem;
    width: 80vw;
    height: 450px;
    max-width: 100%;

    display: flex;
    overflow: hidden;
  }

  li {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 1000ms linear;
  }
  .activeSlide {
    opacity: 1;
    transform: translateX(0);
  }
  .lastSlideLeft {
    opacity: 0;
    transform: translateX(-100%);
  }

  .lastSlideRight {
    opacity: 0;
    transform: translateX(100%);
  }
  .nextSlide {
    transform: translateY(100%);
  }

  img {
    border-radius: ${({ theme }) => theme.radii.round};
    margin-bottom: 1rem;
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 0 auto;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    display: block;
  }

  div {
    margin-top: 20px;
    font-size: ${p => p.theme.fontSizes.m};
    :not(:last-child) {
      margin-top: 8px;
    }
  }
`;
