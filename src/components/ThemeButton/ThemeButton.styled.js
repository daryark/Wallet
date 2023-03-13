import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text_grey_balance};
  /* border-radius: 50%;
  transition: background-color 250ms cubic-bezier(0.4, 0.1, 0.98, 0.335);

  &:hover {
    background-color: #d5d5ff5e;
  } */

  & svg {
    display: inline-block;
    margin: 6px 6px 0;
    width: 22px;
    height: 22px;
  }
`;
