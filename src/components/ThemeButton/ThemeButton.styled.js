import styled from 'styled-components';

export const ThemeButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.text_dark};
  /* z-index: 10; */

  /* position: absolute; */
  /* top: 17px;
  right: 20px; */
`;
