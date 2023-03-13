import styled from 'styled-components';

export const StyledGoogleRegister = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0;
  .google__text {
    margin: 0;
    font-size: 14px;

    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
  .google__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    text-align: center;
    gap: 5px;
    color: ${({ theme }) => theme.color.text_dark};
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }
`;
