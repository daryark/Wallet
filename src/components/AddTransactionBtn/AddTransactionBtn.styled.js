import { BsPlusLg } from 'react-icons/bs';
import styled from 'styled-components';

export const AddBtn = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${p => p.theme.color.accent};
  z-index: 50;
  transition: color ${p => p.theme.transition};

  div {
    transition: 190ms linear;
  }

  :hover {
    color: ${p => p.theme.color.text_pink};
  }
`;

export const AddIcon = styled(BsPlusLg)`
  display: block;
  fill: white;
  width: 20px;
  height: 20px;
`;
