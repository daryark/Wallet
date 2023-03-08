import { BsBalloonHeartFill } from 'react-icons/bs';
import styled from 'styled-components';

export const OpenTeamModal = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 40px;
  left: 40px;
  width: 70px;
  height: 70px;

  /* border-radius: ${({ theme }) => theme.radii.round}; */

  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #ff6596;
  transition: all 400ms linear;

  :hover {
    color: red;
    transform: scale(1.1);
  }

  span {
    display: inline-block;
    width: 25px;
    position: absolute;
    transform: translate(-12.5px, 0px) rotate(90deg 45deg) translate(0, -105px);
  }
`;

export const IconHeart = styled(BsBalloonHeartFill)`
  fill: currentColor;
  width: 50px;
  height: 50px;
`;
