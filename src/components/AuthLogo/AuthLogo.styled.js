import styled from 'styled-components';

export const AuthLogoContainer = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 64px;
  align-items: baseline;

  & span {
    font-family: 'Poppins', 'Montserrat Alternates';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 1.5;
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.color.text_dark};
    @media (min-width: 768px) {
      // @include font-poppins-medium-big;
    }
  }
  & svg {
    margin-right: 15px;
    width: 30px;
    height: 30px;

    @media (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
