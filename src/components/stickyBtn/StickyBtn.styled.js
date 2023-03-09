import styled from 'styled-components';

export const BtnUp = styled.button`
  position: fixed;
  z-index: 1;

  bottom: 0;
  left: 0;

  height: 30px;
  width: 30px;

  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.accent};
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.color.text_pink};
  }
`;
