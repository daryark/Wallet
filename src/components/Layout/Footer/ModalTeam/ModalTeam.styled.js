import styled from 'styled-components';

export const StyledModalTeam = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: ${({ theme }) => theme.color.bg_white};
  z-index: 102;

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 540px;
    padding: 30px;
    max-height: 600px;
    border-radius: ${({ theme }) => theme.radii.medium};
    box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
      0px 2px 1px rgb(0 0 0 / 20%);
    transition: transform 500ms linear;
    text-align: center;
  }

  .title {
    font-family: 'Poppins';
    text-align: center;
    font-weight: 400;
    font-size: ${p => p.theme.fontSizes.l};
    line-height: calc(36 / 24);
    color: ${({ theme }) => theme.color.text_dark};

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.xl};
      line-height: calc(45 / 30);
    }
  }

  .list {
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

  .image {
    border-radius: ${({ theme }) => theme.radii.round};
    margin: 0 auto 20px auto;
    width: 250px;
    height: 250px;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    display: block;

    @media screen and (min-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }

  .text__wrapper {
    color: ${({ theme }) => theme.color.text_dark};
    font-size: ${p => p.theme.fontSizes.m};
    text-align: center;
    :not(:last-child) {
      margin-top: 10px;

      @media screen and (min-width: 768px) {
        font-size: ${p => p.theme.fontSizes.l};
      }
    }
  }
`;
