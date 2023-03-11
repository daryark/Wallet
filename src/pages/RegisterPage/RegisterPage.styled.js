import { RegisterPageSvg } from 'assets/icons';
import styled from 'styled-components';

export const ImgRegister = styled(RegisterPageSvg)`
  width: 248px;
  height: 250px;

  transition-property: transform;
  transition-duration: 400ms;

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
    width: 452px;
    height: 412px;

    &:hover {
      transform: scale(1.01);
    }
  }
`;
