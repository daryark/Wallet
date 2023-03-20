import { LoginBox } from 'components/LoginForm/LoginForm.styled';
import styled from 'styled-components';

export const RegisterBox = styled(LoginBox)`
  @media screen and (min-width: 768px) {
    height: 616px;
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
