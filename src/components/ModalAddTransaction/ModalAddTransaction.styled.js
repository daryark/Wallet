import styled from 'styled-components';

export const ModalAddTransactionStyled = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  min-height: calc(100% - 60px);
  padding: 20px;
  background-color: ${p => p.theme.color.bg_white};
  z-index: 102;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 540px;
    min-height: 508px;
    padding: 40px 73px;
    border-radius: ${p => p.theme.radii.medium};
  }

  & .modal__title {
    font-family: 'Poppins';
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.l};
    line-height: calc(36 / 24);

    @media screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${p => p.theme.fontSizes.xl};
      line-height: calc(45 / 30);
    }
  }
`;
