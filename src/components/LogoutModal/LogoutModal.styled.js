import styled from 'styled-components';

export const StyledBackdrop = styled.div`
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 160;
`;

export const StyledModal = styled.div`
  max-width: 400px;
  padding: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.color.bg_white};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: ${({ theme }) => theme.lineHeights.body};
  color: ${({ theme }) => theme.color.text_dark};

  & p {
    width: 70%;
    margin: 0 auto 20px auto;
  }
`;

export const StyledBtn = styled.button`
  display: block;
  width: 100%;
  height: 50px;
  margin: 0 auto;
  padding: 13px 0px;

  border: ${({ primary, theme }) =>
    primary ? 'none' : `1px solid ${theme.color.text_blue}`};
  border-radius: 20px;

  text-align: center;
  text-transform: uppercase;

  background-color: ${({ primary, theme }) =>
    primary ? theme.color.accent : 'transparent'};
  color: ${({ primary, theme }) => (primary ? 'white' : theme.color.text_blue)};

  cursor: pointer;

  transition-property: transform;
  transition-duration: 400ms;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1199px) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;
