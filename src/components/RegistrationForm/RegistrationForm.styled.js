import styled from 'styled-components';

export const RegisterBox = styled.div`
  padding: 32px 0px 36px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 532px;
    height: 616px;

    background-color: white;
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
  color: red;
`;
