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
  z-index: 150;

  @media (max-width: 767px) {
    background-color: transparent;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 20px;
  background-color: ${({ theme }) => theme.color.bg_white};
  z-index: 10;

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
      font-family: 'Poppins', 'Montserrat';
      font-weight: 400;
      text-align: center;
      font-size: 30px;
      line-height: 45px;
    }
  }
`;
