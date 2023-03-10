// import { BsPlusLg } from 'react-icons/bs';

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

  /* border-radius: ${({ theme }) => theme.radii.round}; */
  /* background-color: ${({ theme }) => theme.color.accent}; */
  /* box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5); */
  transition: color ${p => p.theme.transition};

  div {
    transition: 190ms linear;
  }

  :hover {
    color: ${p => p.theme.color.text_pink};
    /* background-color: ${({ theme }) => theme.color.text_pink}; */
    /* box-shadow: 0px 6px 15px rgba(0, 255, 110, 0.884); */
  }
  /* :hover div {
    rotate: 90deg;
  } */
`;

export const AddIcon = styled(BsPlusLg)`
  display: block;
  fill: white;
  width: 20px;
  height: 20px;
`;
