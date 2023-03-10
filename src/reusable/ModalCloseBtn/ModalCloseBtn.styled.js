import styled from 'styled-components';

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: ${({ theme }) => theme.radii.round};
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
  transition: border 500ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 500ms cubic-bezier(0.4, 0, 0.2, 1);

  & svg {
    width: 16px;
    height: auto;
    fill: ${p => p.theme.color.text_dark};
  }

  :hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
    scale: 0.9;
  }
`;
