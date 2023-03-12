import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 20px 30px;
  @media screen and (min-width: 768px) {
    /* padding: 32px 32px 24px; */
    padding: 0;
    padding-top: 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 46px 16px 0 69px;
  }
`;

export const ContainerAuth = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;
