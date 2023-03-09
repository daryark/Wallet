import styled from 'styled-components';

export const BtnUp = styled.button`
  position: fixed;
  top: calc(100vh - 100px);
  left: calc(100vw - 100px);
  z-index: 1;

  /* bottom: 50px;
  right: 50px; */
  background-color: transparent;
  color: ${p => p.theme.color.accent};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.round};

  &:hover {
    color: ${p => p.theme.color.text_light};
    background-color: ${p => p.theme.color.accent};
  }
`;
