import styled from 'styled-components';

export const BtnUp = styled.button`
  position: fixed;
  top: calc(100vh - 100px);
  left: calc(100vw - 170px);
  z-index: 1;

  /* bottom: 50px;
  right: 50px; */
  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.accent};
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.color.text_pink};
  }
`;
