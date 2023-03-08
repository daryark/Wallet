import styled from 'styled-components';
import currencyImg from '../../components/images/CurrencyVioletBlock.png';
import downImg from '../../components/images/MountainViolet.png';

export const StyledCurrencyThumb = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.text_blue};
  height: 184px;
  width: 280px;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center; */
  /* margin: 0 auto; */
  color: white;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  /* background-image: ${currencyImg}; */
  /* linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) -7.46%,
      rgba(255, 255, 255, 0) 100%
    ); */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.radii.large};
  /* padding-top: 11px; */
  & svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 182px;
  }

  @media screen and (min-width: 1280px) {
    width: 393px;
    height: 331px;
    padding-top: 17px;
  }
`;
