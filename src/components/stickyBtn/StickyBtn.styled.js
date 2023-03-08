import styled from 'styled-components';

export const BtnUp = styled.button`
  position: fixed;
  bottom: 10px;
  right: 20px;
  background-color: transparent;
  color: ${p => p.theme.color.accent};
  border-color: transparent;
  border-radius: ${p => p.theme.radii.round};

  &:hover {
    color: ${p => p.theme.color.text_light};
    background-color: ${p => p.theme.color.accent};
  }
`;
