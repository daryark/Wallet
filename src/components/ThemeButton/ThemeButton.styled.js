import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text_grey_balance};

  & svg {
    display: inline-block;
    margin: 6px 6px 0;
    width: 22px;
    height: 22px;
  }
`;
