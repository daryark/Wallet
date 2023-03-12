import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text_grey_balance};

  & svg {
    display: inline-block;
    margin-top: 5px;
    width: 24px;
    height: 24px;
  }
`;
