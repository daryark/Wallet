import styled from 'styled-components';

export const RegisterBox = styled.div`
  padding: 32px 0px 36px;
  background-color: ${({ theme }) => theme.color.bg_white};

  @media screen and (min-width: 768px) {
    padding: 40px 58px 62px 65px;
    margin: 0 auto;
    width: 532px;
    height: 616px;

    border-radius: 20px;
  }

  .input {
    text-transform: lowercase;
  }
`;

export const StyledError = styled.div`
  position: absolute;
  top: 115%;
  font-size: 10px;
  color: ${({ theme }) => theme.color.text_pink};
`;
