import { TfiClose } from 'react-icons/tfi';
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
  color: ${({ theme }) => theme.color.text_dark};
  cursor: pointer;
  transition: border ${({ theme }) => theme.transition},
    scale ${({ theme }) => theme.transition};

  & svg {
    width: 16px;
    height: auto;
    fill: ${p => p.theme.color.text_dark};
  }

  :hover {
    border: 1px solid rgb(191 189 189);
    scale: 0.9;
  }
`;

export const StyledIconClose = styled(TfiClose)`
  width: 16px;
  height: auto;
  fill: currentColor;
`;
