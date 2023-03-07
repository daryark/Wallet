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
  z-index: 1;

  @media screen and (min-width: 768px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 73px;
    width: 540px;
    min-height: 508px;
    border-radius: 20px;
  }

  & .modal {
    &__close-btn {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 20px;
      right: 20px;
    }

    &__title {
      font-family: 'Poppins';
      font-weight: 400;
      text-align: center;
      font-size: 30px;
      line-height: 45px;
    }
  }
`;
