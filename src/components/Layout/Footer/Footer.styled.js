import { BsBalloonHeartFill } from 'react-icons/bs';
import styled from 'styled-components';
import { StyledHeader } from '../Header/Header.styled';

export const StyledFooter = styled(StyledHeader)`
  grid-area: footer;

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;
    padding: 0 auto;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }
  }

  .item {
    font-size: ${p => p.theme.fontSizes.xs};
    color: ${({ theme }) => theme.color.text_dark};

    &:first-of-type {
      padding-top: 5px;
    }

    &:last-of-type {
      margin: 0 auto;
    }

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
    }
    50% {
      transform: translateY(-0px);
    }
    75% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(-0px);
    }
  }

  fill: ${({ theme }) => theme.color.text_pink};
  width: 20px;
  height: 20px;
  margin-left: 5px;
  animation: scaleHeart 2000ms linear infinite;
`;
