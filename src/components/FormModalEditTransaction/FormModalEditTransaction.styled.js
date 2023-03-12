import styled from 'styled-components';
import { Form } from 'formik';

export const FormModalEditTransactionStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  & .switcher {
    width: 235px;
    height: 44px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: 'Circe';
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #e0e0e0;

    & .income {
      /* color:; */
    }
    & .expense {
      /* color:; */
    }

    &__box {
      position: relative;
      display: inline-block;
      width: 80px;
      height: 40px;
    }

    &__checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }

    &__toggle {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${({ theme }) => theme.color.bg_white};
      -webkit-transition: 0.4s;
      border-radius: 30px;
      border: 1px solid #e0e0e0;
      transition: 0.4s;

      &:before {
        position: absolute;
        content: '';
        height: 44px;
        width: 44px;
        left: -4px;
        bottom: -2px;
        transition: 0.4s;
        border-radius: 50%;
        background-color: #24cca7;
        box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
        -webkit-transition: 0.4s;
      }
    }

    &__checkbox:checked + .switcher__toggle:before {
      background-color: #ff6596;
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
      -webkit-transform: translateX(44px);
      -ms-transform: translateX(44px);
      transform: translateX(44px);
    }
  }

  & input,
  & select {
    width: 100%;
    max-height: 32px;
    padding: 8px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    color: ${({ theme }) => theme.color.text_dark};

    &:focus {
      outline: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 30px #fff inset;
    }
  }

  & .amount-date-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px 0;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      gap: 0 30px;

      & .amount {
        width: calc((100% - 30px) / 2);
        text-align: center;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          /* display: none; */
          -webkit-appearance: none;
          -moz-appearance: textfield;
          margin: 0;
        }

        &::placeholder {
          text-align: center;
        }
      }

      & .date {
        width: calc((100% - 30px) / 2);
      }
    }
  }

  & .comment {
    ////        ??
    width: 100%;
  }

  & .btns-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;

    & button {
      font-family: 'Circe';
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin: 0px -10px;
      width: calc(100% + 20px);
      height: 50px;
      border-radius: 20px;

      @media screen and (min-width: 768px) {
        width: 300px;
        margin: 0;
      }
    }
  }

  & .submit-btn {
    border: 1px solid transparent;
    color: ${({ theme }) => theme.color.bg_white};
    background-color: #24cca7;
  }

  & .cancel-btn {
    color: #4a56e2;
    border: 1px solid #4a56e2;
    background-color: transparent;
  }
`;
