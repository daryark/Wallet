import { BsBalloonHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import { StyledHeader } from '../Header/Header.styled';

export const StyledFooter = styled(StyledHeader)`
  grid-area: footer;

  @media (max-width: 767px) {
    position: fixed;
    top: calc(100% - 60px);
    left: 0;
    right: 0;
  }

  .list {
    text-align: center;
    padding: 0 auto;

    @media screen and (min-width: 768px) {
      display: flex;
      align-items: baseline;
      gap: 0;
    }
  }

  .item {
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${({ theme }) => theme.color.text_dark};

    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.s};
    }
  }
`;

export const StyledIconHeart = styled(BsBalloonHeartFill)`
  @keyframes scaleHeart {
    0% {
      transform: translateY(-0px);
    }
    25% {
      transform: translateY(-5px);
      scale: 1;
    }
    50% {
      transform: translateY(-0px);
      scale: 1.1;
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-0px);
      scale: 1;
    }
  }

  fill: ${({ theme }) => theme.color.text_pink};
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-right: 5px;
  animation: scaleHeart 2000ms linear infinite;
`;
