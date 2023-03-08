import styled from 'styled-components';

export const Container = styled.div`
  margin: 20px 20px 30px;
  @media screen and (min-width: 768px) {
    margin: 32px 32px 24px;
  }

  @media screen and (min-width: 1280px) {
    margin: 16px 16px 40px;
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
