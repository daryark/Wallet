import styled from 'styled-components';

export const StyledCurrencyThumb = styled.div`
  position: relative;
  background-color: #4a56e2;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.2) 50px,
    #4a56e2 50px
  );
  height: 184px;
  width: 280px;

  color: white;
  font-size: ${({ theme }) => theme.fontSizes.s};
  font-weight: ${({ theme }) => theme.fontWeights.normal};

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.radii.large};

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
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.2) 60px,
      #4a56e2 60px
    );
  }
`;

export const StyledCurrencyTable = styled.table`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

export const StyledCurrencyTr = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-top: 20px;
`;

export const StyledBodyTr = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding-top: 10px;
`;
