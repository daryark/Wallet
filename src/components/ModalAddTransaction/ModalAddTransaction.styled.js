import styled from 'styled-components';

export const ModalAddTransactionStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: #fff;
  z-index: 102;

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 73px;
    width: 540px;
    min-height: 508px;
    border-radius: 20px;
  }

  & .modal__title {
    font-family: 'Poppins';
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    line-height: calc(36 / 24);

    @media screen and (min-width: 768px) {
      font-size: 30px;
      line-height: calc(45 / 30);
    }
  }
`;
