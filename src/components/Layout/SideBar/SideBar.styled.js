import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledAside = styled.aside`
  grid-area: sidebar;
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    /* padding: 0 32px 20px 32px; */
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    border-right: 1px solid #e7e5f2;
    box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
      1px 0px 0px rgba(255, 255, 255, 0.6);
  }
`;

export const StyledSideBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 12px;
  gap: 30px;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 40px;
    gap: 12px;
  }
`;

export const StyledBtn = styled(NavLink)`
  font-family: Poppins;
  display: flex;
  gap: 20px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.color.text_dark};

  &.active {
    color: ${({ theme }) => theme.color.text_dark};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    & > div {
      color: ${({ theme }) => theme.color.bg_white};
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background-color: ${({ theme }) => theme.color.text_blue};
    }
  }
`;

export const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e7eaf2;
  background-color: #6e78e8;
  border-radius: 6px;
  padding: 5px;

  & svg {
    width: 28px;
    height: 28px;
  }

  @media screen and (min-width: 768px) {
    & svg {
      width: 18px;
      height: 18px;
      border-radius: 2px;
    }
  }
`;
