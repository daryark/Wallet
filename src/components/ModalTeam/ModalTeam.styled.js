import styled from 'styled-components';

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 540px;
  max-height: 600px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.medium};
  background-color: ${({ theme }) => theme.color.bg_white};
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
`;
