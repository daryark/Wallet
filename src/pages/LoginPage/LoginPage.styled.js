import { LoginPageSvg } from 'assets/icons';
import styled from 'styled-components';

export const SectionLogin = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    padding-top: 60px;
    padding-bottom: 196px;

    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 116px;
    padding-bottom: 136px;
    height: 100vh;
  }
`;
export const ImgLogin = styled(LoginPageSvg)`
  transition-property: transform;
  transition-duration: 400ms;

  @media screen and (min-width: 768px) {
    width: 260px;
    height: 250px;

    &:hover {
      transform: scale(1.01);
    }
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
    width: 435px;
    height: 419px;
  }
`;

export const SvgWrapper = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;

export const BgContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    margin: 0 auto;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
export const LoginText = styled.p`
  @media screen and (min-width: 768px) {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 1.5;
    color: #000000;
  }
`;
