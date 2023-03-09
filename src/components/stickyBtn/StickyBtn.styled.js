import styled from 'styled-components';

export const BtnUp = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  right: 90px;
  width: 44px;
  height: 44px;
  cursor: pointer;

  z-index: 1;

  background-color: transparent;
  border: none;
  color: ${p => p.theme.color.accent};
  transition: color ${p => p.theme.transition};

  &:hover {
    color: ${p => p.theme.color.text_pink};
  }
`;
